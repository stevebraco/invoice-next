import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
const PaymentForm = ({ control, getValues }: any) => {
  return (
    <div className="flex flex-col w-1/2">
      <FormField
        control={control}
        name="paymentTerms"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel
                className={`text-xs mb-[5px] text-light-200 dark:text-[#DFE3FA]`}
              >
                Payment Terms
              </FormLabel>{" "}
              <Select
                onValueChange={field.onChange}
                value={getValues().paymentTerms}
              >
                <FormControl>
                  <SelectTrigger className="w-full focus:ring-transparent focus:border-purple-700 dark:border-[#252945] dark:text-primary-100 dark:bg-[#1E2139]">
                    <SelectValue placeholder="Net 30 Days" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-primary-100 dark:bg-[#1E2139] dark:text-primary-100 border-none">
                  <SelectGroup>
                    <SelectItem className="hover:text-primary-600" value="1">
                      Net 1 Day
                    </SelectItem>
                    <SelectItem className="hover:text-primary-600" value="7">
                      Net 7 Days
                    </SelectItem>
                    <SelectItem className="hover:text-primary-600" value="14">
                      Net 14 Days
                    </SelectItem>
                    <SelectItem className="hover:text-primary-600" value="30">
                      Net 30 Days
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          );
        }}
      />
    </div>
  );
};

export default PaymentForm;
