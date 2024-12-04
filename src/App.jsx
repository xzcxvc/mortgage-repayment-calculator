import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaPesoSign, FaPercent } from "react-icons/fa6";
import Input from "./assets/components/Input.jsx";

function App() {
  return (
    <div className="w-screen ">
      <div className="min-h-screen flex items-center justify-center">
        <div
          id="main"
          className="flex desktop:flex-row tablet:flex-col mobile:flex-col desktop:rounded-2xl bg-white w-6/12 h-96"
        >
          <div id="header" className="desktop:w-6/12 px-7 py-6">
            <div className="flex desktop:flex-row mobile:flex-col desktop:justify-between desktop:items-center">
              <h1 className="font-bold text-lg">Mortgage Calculator</h1>
              <span className="text-[14px] underline">Clear All</span>
            </div>
            <div className="form py-2">
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
            </div>
          </div>

          <div
            id="results"
            className="desktop:w-6/12 bg-[#193040] desktop:rounded-r-2xl desktop:rounded-bl-[70px]"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
