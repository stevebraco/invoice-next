import Image from "next/image";
import React from "react";

interface ButtonProps {
  type: string;
  name: string;
  handleClick?: () => void;
  icon?: boolean;
  isDisabled?: boolean;
}

const Button = ({ type, name, handleClick, icon, isDisabled }: ButtonProps) => {
  const typeButton = (type: string) => {
    switch (type) {
      case "edit":
        return "btn-light";

      case "delete":
        return "btn-danger";

      case "asPaid":
        return "btn-primary";

      default:
        "";
    }
  };

  if (icon)
    return (
      <button
        className={`text-[12px] btn ${typeButton(type)}`}
        onClick={handleClick}
      >
        <div className="bg-primary-100 w-[32px] h-[32px] inline-flex items-center justify-center mr-2 rounded-full">
          <Image
            src="assets/icon-plus.svg"
            alt="icon plus"
            width={10}
            height={10}
          />
        </div>
        {name}
      </button>
    );

  return (
    <button
      disabled={isDisabled}
      className={`text-[12px] font-bold btn rounded-full ${typeButton(type)}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
