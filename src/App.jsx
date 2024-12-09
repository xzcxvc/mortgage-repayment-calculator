import { useState, useEffect } from "react";
import "./App.css";
import { FaPesoSign, FaPercent } from "react-icons/fa6";
import Input from "./assets/components/Input.jsx";
import empty from "./assets/illustration-empty.svg";
import calculator from "./assets/icon-calculator.svg";

function App() {
  const [formData, setFormData] = useState({
    txtMortgageAmt: 0,
    txtMortgageTerm: 0,
    txtInterestRate: 0,
    typeInterest: false,
    typeRepayment: false,
  });

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
    console.table({ formData });
  }, [formData]);

  const handleCalculate = () => {};

  const handleClearForm = () => {
    setFormData((prev) => ({
      txtMortgageAmt: 0,
      txtMortgageTerm: 0,
      txtInterestRate: 0,
      typeInterest: false,
      typeRepayment: false,
    }));
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
                  />
                  <Input
                    id="interestRate"
                    name="txtInterestRate"
                    label="Interest Rate"
                    type="number"
                    element={<FaPercent className="text-[#334856]" />}
                    elementPosition="right"
                    onChange={handleInputChange}
                    value={formData.txtInterestRate || ""}
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
                </div>

                <div className="desktop:w-9/12 tablet:w-full mobile:w-full py-2 ">
                  <button className="flex gap-1 px-4 rounded-full bg-[#D9DB30] items-center justify-center w-full h-9">
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
            className="desktop:w-6/12 p-6 hidden mobile:w-full bg-[#193040] desktop:rounded-r-2xl desktop:rounded-bl-[70px] items-center justify-center"
          >
            <div className="flex-col flex gap-5 ">
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
          </div>

          <div
            id="results"
            className="absolutedesktop:w-6/12 py-6 px-9 mobile:w-full bg-[#193040] desktop:rounded-r-2xl desktop:rounded-bl-[70px] flex justify-center"
          >
            <div className="flex-col flex gap-5">
              <span className="text-white font-semibold flex text-xl">
                Results shown here
              </span>
              <div className="flex flex-col gap-5">
                <span className="text-md text-gray-400 flex ">
                  Your results are shown below based on the information you
                  provided. To adjust the results, edit the form and click
                  "calculate repayments" again.
                </span>

                <div className="w-full relative bg-[#D9DB30] h-3 rounded-md">
                  <div className="absolute w-full top-1 h-auto bg-[#0E2431] rounded-[5px] p-5 flex flex-col gap-2">
                    <span className="text-sm text-gray-400 flex">
                      Your monthly repayments
                    </span>
                    <h1 className="text-[#D9DB30] font-semibold text-4xl">
                      $1,797.74
                    </h1>
                    <div className="divider w-full h-[1px] bg-[#B1BABF] my-5" />
                    <span className="text-sm text-gray-400 flex">
                      Total you'll repay over the term
                    </span>
                    <h1 className="text-white font-semibold text-2xl">
                      $539,322.9
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
