import React from "react";
import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  margin,
}: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
            "text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py2.5 me-2 mb-2 focus:outline-none",
          `${bgColor} hover:${bgColor} ${margin} font-medium rounded-lg text-sm px-5 py-2.5 mx-2 my-2 focus:outline-none`
        )}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
