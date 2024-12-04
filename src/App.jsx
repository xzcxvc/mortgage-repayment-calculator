import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaPesoSign, FaPercent } from "react-icons/fa6";

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
              <div className="flex flex-col gap-2 w-full py-2 ">
                <label
                  htmlFor="mortgageAmt"
                  className="font-semibold text-[#334856]"
                >
                  Mortgage Amount
                </label>
                <div className="relative w-full ring-1 ring-[#B1BABF] h-10 rounded-sm flex">
                  <div className="bg-[#e6f4fc] px-3 rounded-l-sm flex items-center justify-center">
                    <FaPesoSign className="text-[#334856]" />
                  </div>
                  <div className="w-full rounded-r-sm flex items-center px-2">
                    <input
                      type="text"
                      className="w-full focus-within:outline-0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-6/12 py-2">
                  <label
                    htmlFor="mortgageTerm"
                    className="font-semibold text-[#334856]"
                  >
                    Mortgage Term
                  </label>
                  <div className="relative w-full ring-1 ring-[#B1BABF] h-10 rounded-sm flex">
                    <div className="w-full rounded-r-md flex items-center px-2">
                      <input
                        id=""
                        type="text"
                        className="w-full focus-within:outline-0"
                      />
                    </div>
                    <div className="bg-[#e6f4fc] px-3 rounded-r-sm flex items-center justify-center text-[#334856] font-semibold">
                      Years
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-6/12 py-2">
                  <label
                    htmlFor="mortgageTerm"
                    className="font-semibold text-[#334856]"
                  >
                    Interest Rate
                  </label>
                  <div className="relative w-full ring-1 ring-[#B1BABF] h-10 rounded-sm flex">
                    <div className="w-full rounded-r-md flex items-center px-2">
                      <input
                        id=""
                        type="text"
                        className="w-full focus-within:outline-0"
                      />
                    </div>
                    <div className="bg-[#e6f4fc] px-3 rounded-r-sm flex items-center justify-center text-[#334856]">
                      <FaPercent className="text-[#334856]" />
                    </div>
                  </div>
                </div>
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
