import React from "react";

interface StatusProps {
  status: string | undefined;
}

const Status = ({ status }: StatusProps) => {
  return (
    <div
      className={` ${
        status === "paid"
          ? "paid bg-paid"
          : status === "pending"
          ? "pending bg-pending"
          : "draft bg-draft"
      } w-[104px] h-[40] rounded-md flex-center gap-2 h3-12`}
    >
      <span
        className={`${
          status === "paid"
            ? "circle-paid"
            : status === "pending"
            ? "circle-pending"
            : "circle-draft"
        }`}
      ></span>
      <span className="capitalize">{status}</span>
    </div>
  );
};

export default Status;
