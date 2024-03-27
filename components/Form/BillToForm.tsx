import React from "react";
import InputLabel from "../InputLabel";
import { Control, FieldErrors } from "react-hook-form";

interface BillProps {
  control: any;
  errors: FieldErrors;
  register: any;
}

const BillToForm = ({ control, errors, register }: BillProps) => {
  return (
    <>
      <h3 className="h3-12 mt-10 text-primary-600 dark:text-[#7C5DFA]">
        Bill To
      </h3>

      <InputLabel
        control={control}
        label="Street Address"
        name="billToAddress"
        errorMessage={errors?.billToAddress?.message}
        register={register("billToAddress")}
      />
      <div className="flex flex-col md:flex-row md:gap-6 gap-0">
        <div className="flex flex-row gap-6 w-full">
          <InputLabel
            control={control}
            label="City"
            name="billToCity"
            errorMessage={errors?.billToCity?.message}
            register={register("billToCity")}
          />
          <InputLabel
            control={control}
            label="Post Code"
            name="billToPostCode"
            errorMessage={errors?.billToPostCode?.message}
            register={register("billToPostCode")}
          />
        </div>
        <InputLabel
          control={control}
          label="Country"
          name="billToCountry"
          errorMessage={errors?.billToCountry?.message}
          register={register("billToCountry")}
        />
      </div>
    </>
  );
};

export default BillToForm;
