"use client";
import { ButtonProps } from "@/types";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  title,
  containerStyles,
  handleClick,
  type,
  textStyles,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative">
          <FaArrowRight />
        </div>
      )}
    </button>
  );
};

export default Button;
