import React, { useState } from "react";
import { FaPesoSign, FaPercent } from "react-icons/fa6";

const Input = ({
  id,
  name,
  type,
  value,
  label,
  title,
  checked,
  element,
  elementPosition,
  onChange,
  onClick,
  readOnly,
  error,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={label} className="font-semibold text-[#334856]">
          {label}
        </label>
        {type == "text" || type == "number" ? (
          <div>
            <div
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className={`
          ${elementPosition === "left" ? "flex-row" : "flex-row-reverse"}
          ${error ? "ring-2 ring-[#D73329]" : ""}
          ${focus ? "ring-2 ring-[#D9DB30]" : ""}
        relative ring-1 ring-[#B1BABF] h-10 rounded-sm flex`}
            >
              <div
                className={`
                  ${
                    elementPosition === "left" ? "rounded-l-sm" : "rounded-r-sm"
                  }
                  ${
                    error
                      ? "bg-[#D73329] text-white"
                      : focus
                      ? "bg-[#D9DB30]"
                      : "bg-[#e6f4fc]"
                  }
             px-3 flex items-center justify-center font-semibold`}
              >
                {element}
              </div>
              <div className="w-full flex items-center px-2">
                <input
                  id={id}
                  name={name}
                  type={type}
                  value={value}
                  onChange={onChange}
                  className="w-full focus-within:outline-0 font-bold text-[#193040] px-2 hover:cursor-pointer"
                />
              </div>
            </div>
            {error && (
              <span className="text-[#D73329] font-semibold text-xs">
                {error}
              </span>
            )}
          </div>
        ) : type === "radio" ? (
          <>
            <div className="flex w-full">
              <div
                onClick={onClick}
                className={`
                  ${checked ? "ring-1 ring-[#D9DB30] bg-[#FAFAE0]" : ""}
                  relative w-full ring-1 ring-[#B1BABF] h-10 rounded-sm flex hover:cursor-pointer hover:ring-1 hover:ring-[#D9DB30]`}
              >
                <div className="px-3 rounded-l-sm flex items-center justify-center ">
                  <input
                    id={id}
                    name={name}
                    type={type}
                    checked={checked}
                    readOnly={readOnly}
                  />
                </div>
                <div className="w-full rounded-r-sm flex items-center px-2">
                  <span
                    type="text"
                    className="w-full focus-within:outline-0 font-semibold"
                  >
                    {title}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Input;
