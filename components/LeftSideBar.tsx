"use client";
import Image from "next/image";
import React from "react";
import FullForm from "./FullForm";
import { useActiveForm } from "@/context/ActiveFormProvider";
import { UserButton } from "@clerk/nextjs";
import Theme from "./Theme";

const LeftSideBar = () => {
  const { activeForm, setActiveForm } = useActiveForm();
  const handleCloseForm = () =>
    setActiveForm((prevState) => ({ ...prevState, active: false }));

  return (
    <>
      <div
        className={`absolute bg-black bg-opacity-70 inset-0 w-full z-10 ${
          activeForm.active
            ? "animate-moveRight  md:left-[105px] left-0"
            : "transition-transform duration-500 ease-in-out translate-x-[-100%]"
        }`}
        onClick={handleCloseForm}
      />

      <div className="md:w-[103px] w-full z-10">
        <div className="md:relative z-10 h-full">
          <div className="md:fixed z-10 bg-primary-700 dark:bg-[#141625] md:w-[103px] h-[80px] flex md:flex-col justify-between w-full md:rounded-r-2xl md:h-full">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }}
              objectFit="contain"
            />
            <div className="flex md:flex-col items-stretch space-x-8 md:space-x-0 space-y-0 md:w-full md:space-y-11 ">
              <Theme />
              <div className="md:border-t border-l border-[#494E6E] flex-center md:h-[90px] md:w-full w-[90px]">
                <UserButton />
              </div>
            </div>
          </div>
          <FullForm />
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
