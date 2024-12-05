import React from "react";
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
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full ">
        <label htmlFor={label} className="font-semibold text-[#334856]">
          {label}
        </label>
        {type == "text" || type == "number" ? (
          <div
            className={`
          ${elementPosition === "left" ? "flex-row" : "flex-row-reverse"}
        relative ring-1 ring-[#B1BABF] h-10 rounded-sm flex`}
          >
            <div
              className={`${
                elementPosition === "left" ? "rounded-l-sm" : "rounded-r-sm"
              }
        bg-[#e6f4fc] px-3 flex items-center justify-center focus:bg-[#D9DB30]`}
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
                className="w-full focus-within:outline-0"
              />
            </div>
          </div>
        ) : type === "radio" ? (
          <>
            <div className="flex w-full">
              <div
                onClick={onClick}
                className={`${
                  checked ? "ring-1 ring-[#D9DB30] bg-[#FAFAE0]" : ""
                }
                  relative w-full ring-1 ring-[#B1BABF] h-10 rounded-sm flex hover:cursor-pointer hover:ring-1 hover:ring-[#D9DB30]`}
              >
                <div className="px-3 rounded-l-sm flex items-center justify-center ">
                  <input
                    id={id}
                    name={name}
                    type={type}
                    checked={checked}
                    className="w-full focus-within:outline-0 border-2 "
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
        ) : null}
      </div>
    </>
  );
};

export default Input;
