import React from "react";
import { cn } from "@/lib/utils";
import InputLabel from "../InputLabel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormLabel } from "@/components/ui/form";
import { Calendar as CalendarIcon } from "lucide-react";
import PaymentForm from "./PaymentForm";
import { format } from "date-fns";
import { Control, FieldErrors, RegisterOptions } from "react-hook-form";
import { Invoice } from "@/types";

interface BillProps {
  control: any;
  errors: FieldErrors;
  register: any;
  date: Date;
  setDate: any;
  getValues: any;
}

const BillFromForm = ({
  control,
  errors,
  register,
  date,
  setDate,
  getValues,
}: BillProps) => {
  return (
    <>
      <h3 className="h3-12 mt-10 text-primary-600 dark:text-[#7C5DFA]">
        Bill From
      </h3>
      <InputLabel
        control={control}
        label="Client's Name"
        name="billFromName"
        errorMessage={errors?.billFromName?.message}
        register={register("billFromName")}
      />
      <InputLabel
        control={control}
        label="Client's Email"
        name="billFromEmail"
        errorMessage={errors?.billFromEmail?.message}
        register={register("billFromEmail")}
      />
      <InputLabel
        control={control}
        label="Street Address"
        name="billFromAddress"
        errorMessage={errors?.billFromAddress?.message}
        register={register("billFromAddress")}
      />
      <div className="flex gap-6">
        <InputLabel
          control={control}
          label="City"
          name="billFromCity"
          errorMessage={errors?.billFromCity?.message}
          register={register("billFromCity")}
        />
        <InputLabel
          control={control}
          label="Post Code"
          name="billFromPostCode"
          errorMessage={errors?.billFromPostCode?.message}
          register={register("billFromPostCode")}
        />
        <InputLabel
          control={control}
          label="Country"
          name="billFromCountry"
          errorMessage={errors?.billFromCountry?.message}
          register={register("billFromCountry")}
        />
      </div>
      <div className="flex justify-between gap-2 items-center mt-12">
        <div className="flex flex-col w-1/2">
          <FormLabel
            className={`text-xs mb-[5px] text-light-200 dark:text-[#DFE3FA]`}
          >
            Invoice Date
          </FormLabel>
          <Popover>
            <PopoverTrigger
              className="dark:border-[#252945] dark:text-primary-100 dark:bg-[#1E2139] "
              asChild
            >
              <Button
                variant={"outline"}
                className={cn(
                  " justify-start text-left font-normal",
                  !date && "text-muted-foreground "
                )}
              >
                <div className="flex justify-between w-full">
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon color="#7E88C3" className="mr-2 h-4 w-4" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-none ">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="bg-[#FFFFFF] dark:bg-[#252945] dark:text-[#DFE3FA]  rounded-lg"
              />
            </PopoverContent>
          </Popover>
        </div>
        <PaymentForm control={control} getValues={getValues} />
      </div>
      <InputLabel
        control={control}
        label="Project Description"
        name="description"
        errorMessage={errors?.description?.message}
        register={register("description")}
      />
    </>
  );
};

export default BillFromForm;
