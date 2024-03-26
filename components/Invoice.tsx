import React from "react";
import { Invoice, Item } from "@/types";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  invoice: Invoice;
}

const Invoice = ({ invoice }: Props) => {
  return (
    <div className="background-light mt-8 py-9 px-5 rounded">
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="mb-8 sm:mb-0">
          <h3 className="h3-16">
            <span className="text-primary400">#</span>
            {invoice?.id}
          </h3>
          <span className="text-12 text-primary400dark-700">
            {invoice?.description}
          </span>
        </div>
        <div className="sm:text-right text-left mb-8 sm:mb-0">
          <p className="text-12 text-primary400dark-700">
            {invoice?.senderAddress?.street}
          </p>
          <p className="text-12 text-primary400dark-700">
            {invoice?.senderAddress?.city}
          </p>
          <p className="text-12 text-primary400dark-700">
            {invoice?.senderAddress?.postCode}
          </p>
          <p className="text-12 text-primary400dark-700">
            {invoice?.senderAddress?.country}
          </p>
        </div>
      </div>
      <div className="flex-between pr-[90px] sm:flex-nowrap flex-wrap ">
        <div className="flex-column space-y-4">
          <div>
            <p className="text-12 text-primary400dark-700  mb-3">
              Invoice Date
            </p>
            <p className="font-bold text-[15px] dark:text-primary-100 ">
              {format(invoice?.createdAt, "d MMM yyyy") || invoice.createdAt}
            </p>
          </div>
          <div>
            <p className="text-12 text-primary400dark-700  mb-3">Payment Due</p>
            <p className="font-bold text-[15px] dark:text-primary-100">
              {format(invoice.paymentDue, "d MMM yyyy")}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-12 text-primary400dark-700  mb-3">Bill to</p>
            <p className="font-bold text-[15px] dark:text-primary-100">
              {invoice?.clientName}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-12 text-primary400">
              {invoice?.clientAddress?.street}
            </p>
            <p className="text-12 text-primary400">
              {invoice?.clientAddress?.city}
            </p>
            <p className="text-12 text-primary400">
              {invoice?.clientAddress?.postCode}
            </p>
            <p className="text-12 text-primary400">
              {invoice?.clientAddress?.country}
            </p>
          </div>
        </div>
        <div className="sm:basis-0 basis-full sm:mt-0 mt-4 ">
          <div>
            <p className="text-12 text-primary400dark-700  mb-3">Sent to</p>
            <p className="font-bold text-[15px] dark:text-primary-100">
              {invoice?.clientEmail}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 hidden sm:block">
        <Table className="rounded-lg bg-[#F9FAFE] dark:bg-[#252945]">
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-[350px] text-12 text-primary400dark-700  pt-8 pb-3">
                Item Name
              </TableHead>
              <TableHead className="text-12 text-primary400dark-700  pt-8 pb-3">
                QTY.
              </TableHead>
              <TableHead className="text-12 text-primary400dark-700  pt-8 pb-3">
                Price
              </TableHead>
              <TableHead className="text-right text-12 text-primary400dark-700  pt-8 pb-3">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoice.items.map((item: Item) => (
              <TableRow key={item.id || item.name} className="border-none">
                <TableCell className="font-medium dark:text-primary-100">
                  {item.name}
                </TableCell>
                <TableCell className="text-12 text-primary400dark-700 ">
                  {item.quantity}
                </TableCell>
                <TableCell className="text-12 text-primary400dark-700 ">
                  ${item.price}
                </TableCell>
                <TableCell className="text-right dark:text-primary-100">
                  ${item.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-[#373B53] dark:bg-[#0C0E16] border-none">
            <TableRow>
              <TableCell
                colSpan={3}
                className="text-primary-100 p-8 rounded-bl-lg"
              >
                Amount Due
              </TableCell>
              <TableCell className="text-right text-primary-100 font-bold text-[24px] rounded-br-lg ">
                ${invoice.total}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="sm:hidden bg-[#F9FAFE] dark:bg-[#252945] rounded-lg ">
        {invoice.items.map((item: Item) => (
          <div
            key={item.id || item.name}
            className="flex justify-between items-center p-6"
          >
            <div>
              <h3 className="font-medium dark:text-primary-100">{item.name}</h3>
              <span className="text-12 text-primary400dark-700 font-bold">
                {item.quantity} x ${item.price}
              </span>
            </div>

            <h3 className="text-right dark:text-primary-100 font-bold">
              ${" "}
              {item?.total?.toLocaleString("en-GB", {
                minimumFractionDigits: 2,
              })}
            </h3>
          </div>
        ))}
        <div className="bg-[#373B53] p-6 dark:bg-[#0C0E16] h-20  rounded-b-lg flex items-center justify-between">
          <span className="text-primary-100 rounded-bl-lg"> Grand Total</span>
          <span className="text-primary-100 font-bold text-[24px]">
            $
            {invoice?.total?.toLocaleString("en-GB", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
