import { useState, useEffect } from "react";
import "./App.css";
import { FaPesoSign, FaPercent } from "react-icons/fa6";
import Input from "./assets/components/Input.jsx";
import empty from "./assets/illustration-empty.svg";
import calculator from "./assets/icon-calculator.svg";
import { MdOutlineBikeScooter } from "react-icons/md";

function App() {
  const [formData, setFormData] = useState({
    txtMortgageAmt: 0,
    txtMortgageTerm: 0,
    txtInterestRate: 0,
    typeInterest: false,
    typeRepayment: false,
    monthlyRepayment: 0,
    totalBalance: 0,
  });

  const [isCalculated, setIsCalculated] = useState(false);
  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState(false);

  const handleInputChange = (e) => {
    const { value, name, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleRadioCheck = (name, checked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
      ...(name === "typeInterest" && { typeRepayment: !checked }),
      ...(name === "typeRepayment" && { typeInterest: !checked }),
    }));
    setSelected(name);
  };

  const handleParentClick = (e) => {
    const target = e.target.closest("[data-name]");
    if (!target) return;

    const name = target.dataset.name;
    const isAlreadyChecked = target.dataset.checked === "true";
    if (isAlreadyChecked) return;

    const checked = true;
    handleRadioCheck(name, checked);
  };

  useEffect(() => {
    console.clear();
    console.log(errors.mType);
    console.table({ formData });
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.txtMortgageAmt) newErrors.mAmt = "This field is required";
    if (!formData.txtInterestRate) newErrors.iRate = "This field is required";
    if (!formData.txtMortgageTerm) newErrors.mTerm = "This field is required";
    if (formData.typeRepayment === false && formData.typeInterest === false) {
      newErrors.mType = "This field is required";
    }
    return newErrors;
  };

  const handleCalculate = (e) => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      const mortgageTerm = formData.txtMortgageTerm * 12;
      const interestRate = formData.txtInterestRate / 100;
      const totalBalance =
        (formData.txtMortgageAmt * interestRate + formData.txtMortgageAmt) *
        mortgageTerm;
      const monthlyRepayment = totalBalance / mortgageTerm;

      const formattedTotalBalance = `$${totalBalance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
      const formattedMonthlyRepayment = `$${monthlyRepayment.toLocaleString(
        undefined,
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}`;

      setFormData((prev) => ({
        ...prev,
        totalBalance: formattedTotalBalance,
        monthlyRepayment: formattedMonthlyRepayment,
      }));

      setIsCalculated((prev) => ({
        ...prev,
        isCalculated: true,
      }));
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      totalBalance:
        (prev.txtMortgageAmt * (prev.txtInterestRate / 100) +
          prev.txtMortgageAmt) *
        (prev.txtMortgageTerm * 12),
    }));
  }, []);

  const handleClearForm = () => {
    setFormData((prev) => ({
      ...prev,
      txtMortgageAmt: 0,
      txtMortgageTerm: 0,
      txtInterestRate: 0,
      typeInterest: false,
      typeRepayment: false,
      monthlyRepayment: 0,
      totalBalance: 0,
    }));

    setIsCalculated(prev);
  };

  return (
    <div className="w-screen">
      <div className="min-h-screen flex items-center justify-center">
        <div
          id="main"
          className="flex desktop:flex-row tablet:flex-col mobile:flex-col desktop:rounded-2xl bg-white w-6/12 h-auto"
        >
          <div className="desktop:w-6/12 px-7 py-6">
            <div>
              <div className="flex desktop:flex-row mobile:flex-col desktop:justify-between desktop:items-center pb-5">
                <h1 className="font-bold text-lg">Mortgage Calculator</h1>
                <span
                  className="text-[14px] underline cursor-pointer"
                  onClick={handleClearForm}
                >
                  Clear All
                </span>
              </div>
              <div className="flex flex-col gap-4 relative">
                <Input
                  id="mortgageAmt"
                  name="txtMortgageAmt"
                  label="Mortgage Amount"
                  type="number"
                  element={<FaPesoSign />}
                  elementPosition="left"
                  onChange={handleInputChange}
                  value={formData.txtMortgageAmt || ""}
                  error={errors.mAmt}
                />

                <div className="flex mobile:flex-col desktop:flex-row desktop:gap-x-4 mobile:gap-y-4">
                  <Input
                    id="mortgageTerm"
                    name="txtMortgageTerm"
                    label="Mortgage Term"
                    type="number"
                    element="Years"
                    elementPosition="right"
                    onChange={handleInputChange}
                    value={formData.txtMortgageTerm || ""}
                    error={errors.mTerm}
                  />
                  <Input
                    id="interestRate"
                    name="txtInterestRate"
                    label="Interest Rate"
                    type="number"
                    element={
                      <FaPercent
                        className={`${
                          !errors.iRate ? "text-[#334856]" : "text-white"
                        }`}
                      />
                    }
                    elementPosition="right"
                    onChange={handleInputChange}
                    value={formData.txtInterestRate || ""}
                    error={errors.iRate}
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#334856]">
                    Mortgage Type
                  </div>

                  <div
                    data-name="typeRepayment"
                    data-checked={formData.typeRepayment}
                  >
                    <Input
                      id="typeRepayment"
                      name="typeRepayment"
                      type="radio"
                      title="Repayment"
                      checked={formData.typeRepayment}
                      onClick={handleParentClick}
                    />
                  </div>

                  <div
                    data-name="typeInterest"
                    data-checked={formData.typeInterest}
                  >
                    <Input
                      id="typeInterest"
                      name="typeInterest"
                      type="radio"
                      title="Interest Only"
                      checked={formData.typeInterest}
                      onClick={handleParentClick}
                    />
                  </div>
                  <span className="text-[#D73329] font-semibold text-xs">
                    {errors.mType}
                  </span>
                </div>

                <div className="desktop:w-9/12 tablet:w-full mobile:w-full py-2 ">
                  <button
                    className="flex gap-1 px-4 rounded-full bg-[#D9DB30] items-center justify-center w-full h-9"
                    onClick={handleCalculate}
                  >
                    <img src={calculator} alt="" />
                    <span className="font-semibold flex justify-center text-sm">
                      Calculate Repayments
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="results"
            className="desktop:w-6/12 p-6 mobile:w-full bg-[#193040] desktop:rounded-r-2xl desktop:rounded-bl-[70px] flex items-center justify-center"
          >
            <div
              className={`${isCalculated ? "hidden" : "flex"} flex-col gap-5`}
            >
              <img src={empty} alt="empty result" className=" h-40" />
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold flex justify-center">
                  Results shown here
                </span>

                <span className="text-sm text-gray-400 flex justify-center items-center text-center">
                  Complete the form and click "calculate repayments" to see what
                  your monthly repayments would be.
                </span>
              </div>
            </div>

            <div
              className={`${isCalculated ? "flex" : "hidden"} flex-col gap-5`}
            >
              <span className="text-white font-semibold flex text-xl">
                Results shown here
              </span>
              <div className="flex flex-col gap-5">
                <span className="text-md text-gray-400 flex ">
                  Your results are shown below based on the information you
                  provided. To adjust the results, edit the form and click
                  "calculate repayments" again.
                </span>

                <div className=" relative bg-[#D9DB30] rounded-md">
                  <div className="relative top-1 h-auto bg-[#0E2431] rounded-[5px] p-5 flex flex-col gap-2">
                    <span className="text-sm text-gray-400 flex">
                      Your monthly repayments
                    </span>
                    <h1 className="text-[#D9DB30] font-semibold text-4xl">
                      {formData.monthlyRepayment}
                    </h1>
                    <div className="divider w-full h-[1px] bg-[#B1BABF] my-5" />
                    <span className="text-sm text-gray-400 flex">
                      Total you'll repay over the term
                    </span>
                    <h1 className="text-white font-semibold text-2xl">
                      {formData.totalBalance}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
