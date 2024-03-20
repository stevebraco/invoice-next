"use client";
import React from "react";
import { useActiveForm } from "@/context/ActiveFormProvider";
import FilterStatus from "./FilterStatus";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FilterInvoice = () => {
  const { setActiveForm } = useActiveForm();

  const handleActiveForm = () => {
    setActiveForm({ active: true, formValue: {} });
  };

  return (
    <div className="flex items-center gap-0 sm:gap-6 ">
      <FilterStatus />
      <Button
        className="btn btn-primary h-12 w-[100px] sm:w-[155px]"
        onClick={handleActiveForm}
      >
        <div className="bg-primary-100 w-[25px] h-[25px] sm:w-[32px] sm:h-[32px] inline-flex items-center justify-center rounded-full -translate-x-2">
          <Image
            src="assets/icon-plus.svg"
            alt="icon plus"
            width={10}
            height={10}
          />
        </div>
        New <span className="hidden sm:block ml-1"> Invoice </span>
      </Button>
    </div>
  );
};

export default FilterInvoice;
