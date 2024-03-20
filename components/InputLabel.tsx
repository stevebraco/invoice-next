import React from "react";
import { FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Input } from "./ui/input";
import { FieldError } from "react-hook-form";

interface Props {
  control: any;
  name: string;
  label: string;
  classNames?: string;
  errorMessage?: any;
  register?: any;
}

const InputLabel = ({
  control,
  name,
  label,
  errorMessage,
  register,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`mt-6`}>
          <div className="flex justify-between">
            <FormLabel
              className={`text-xs mb-[5px] text-light-200 dark:text-[#DFE3FA] ${
                errorMessage && "text-[#EC5757]"
              } `}
            >
              {label}
            </FormLabel>
            {errorMessage && (
              <span className="text-[10px] text-[#EC5757]">Can't be empty</span>
            )}
          </div>
          <FormControl>
            <Input
              className={`font-bold ${
                errorMessage && "border-[#EC5757]"
              } dark:bg-[#1E2139] dark:border-[#252945] dark:text-primary-100 `}
              {...field}
              {...register}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputLabel;
