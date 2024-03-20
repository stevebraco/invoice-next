import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { watch } from "fs";
import { FormValues } from "@/types";
import { Control, useWatch } from "react-hook-form";

const TableForm = ({ fields, control, formValues, remove, watch }: any) => {
  const Total = ({ control }: { control: Control<FormValues> }) => {
    const formValues = useWatch({
      name: "items",
      control,
    });
    const total = formValues.reduce(
      (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
      0
    );
    return (
      <>
        <TableCell className="text-light-200 dark:text-primary-100" colSpan={3}>
          Total
        </TableCell>
        <TableCell className="text-right text-light-200 dark:text-primary-100">
          {total}
        </TableCell>
      </>
    );
  };
  return (
    <div className="mt-4">
      <h3 className="text-[#777F98] font-bold text-lg">Item List</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px] text-xs text-light-200 dark:text-primary-100">
              Item Name
            </TableHead>
            <TableHead className="text-xs text-light-200 dark:text-primary-100">
              Qty.
            </TableHead>
            <TableHead className="text-xs text-light-200 dark:text-primary-100">
              Price
            </TableHead>
            <TableHead className="text-xs text-light-200 dark:text-primary-100">
              Total
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field: any, index: any) => {
            const total = formValues.reduce(
              (acc: any, current: any) =>
                acc + (current.price || 0) * (current.quantity || 0),
              0
            );

            return (
              <TableRow className="border-none" key={field.id}>
                <TableCell className="font-medium py-2 px-1">
                  <FormField
                    control={control}
                    defaultValue={field.name || ""}
                    name={`items.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            className="dark:bg-[#1E2139] dark:text-primary-100 dark:border-[#252945] "
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell className="font-medium py-2 px-1">
                  <FormField
                    control={control}
                    defaultValue={field.quantity || ""}
                    name={`items.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem className="w-[46px]">
                        <FormControl>
                          <Input
                            type="number"
                            className="text-center dark:bg-[#1E2139] dark:text-primary-100 dark:border-[#252945] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell className="font-medium py-2 px-1">
                  <FormField
                    control={control}
                    defaultValue={field.quantity || ""}
                    name={`items.${index}.price`}
                    render={({ field }) => (
                      <FormItem className="w-[100px]">
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            className="dark:bg-[#1E2139] dark:text-primary-100 dark:border-[#252945] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none  [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell className="  dark:text-[#DFE3FA] dark:border-[#252945] font-medium py-2 px-1 text-center">
                  <FormField
                    control={control}
                    // defaultValue=""
                    name={`items.${index}.total`}
                    render={({ field }) => (
                      <FormItem className="w-[100px]">
                        <FormControl>
                          <Input
                            {...field}
                            className="border-none dark:bg-[#141625] "
                            readOnly
                            value={
                              watch(`items.${index}.quantity`) *
                              watch(`items.${index}.price`)
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell className="font-medium py-2 px-1">
                  <Button onClick={() => remove(index)}>
                    <Image
                      src="/assets/icon-delete.svg"
                      alt="delete icon"
                      width={12}
                      height={16}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <Total control={control} />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TableForm;
