import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaPesoSign, FaPercent } from "react-icons/fa6";
import Input from "./assets/components/Input.jsx";
import empty from "./assets/illustration-empty.svg";
import calculator from "./assets/icon-calculator.svg";

function App() {
  return (
    <div className="w-screen">
      <div className="min-h-screen flex items-center justify-center">
        <div
          id="main"
          className="flex desktop:flex-row tablet:flex-col mobile:flex-col desktop:rounded-2xl bg-white w-5/12 h-auto"
        >
          <div className="desktop:w-6/12 px-7 py-6">
            <div>
              <div className="flex desktop:flex-row mobile:flex-col desktop:justify-between desktop:items-center pb-5">
                <h1 className="font-bold text-lg">Mortgage Calculator</h1>
                <span className="text-[14px] underline">Clear All</span>
              </div>
              <div className="flex flex-col gap-4 relative">
                <Input
                  id={"mortgateAmount"}
                  label={"Mortgage Amount"}
                  type={"text"}
                  value={"Test"}
                  element={<FaPesoSign className="text-[#334856]" />}
                  elementPosition={"left"}
                />

                <div className="flex mobile:flex-col desktop:flex-row desktop:gap-4">
                  <Input
                    id={"mortgageTerm"}
                    label={"Mortgage Term"}
                    type={"text"}
                    value={"Test"}
                    element={"years"}
                    elementPosition={"right"}
                  />
                  <Input
                    id={"mortgageInterest"}
                    label={"Interest Rate"}
                    type={"text"}
                    value={"Test"}
                    element={<FaPercent className="text-[#334856]" />}
                    elementPosition={"right"}
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#334856]">
                    Mortgage Type
                  </div>
                  <Input
                    id={"typeRepayment"}
                    type={"radio"}
                    value={"Test"}
                    title={"Repayment"}
                  />
                  <Input
                    id={"typeInterest"}
                    type={"radio"}
                    value={"Test"}
                    title={"Interest Only"}
                  />
                </div>

                <div className="w-9/12 py-2 ">
                  <button className="flex gap-3 px-4 rounded-full bg-[#D9DB30] items-center justify-center w-full h-9">
                    <img src={calculator} alt="" />
                    <span className="font-semibold flex justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default App;
