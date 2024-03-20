import Link from "next/link";
import React from "react";
import Status from "./Status";
import { Invoice } from "@/types";
import Image from "next/image";
import { format } from "date-fns";

interface Props {
  invoice: Invoice;
  containerClassNames?: string;
}

const InvoiceCard = ({ invoice, containerClassNames }: Props) => {
  return (
    <Link className={containerClassNames} href={`/invoice/${invoice.id}`}>
      <div className="flex flex-col sm:flex-row justify-around gap-0 sm:gap-6 background-light mb-4 py-4 px-5 rounded border border-transparent hover:border-primary-600 shadow-md ">
        <div className="flex  gap-8 justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
            <h3 className="h3-12">
              <span className="text-primary400">#</span>
              {invoice.id}
            </h3>
            <p className="text-12 text-light200 dark:text-[#DFE3FA]">
              <span className="text-primary400 dark:text-[#DFE3FA]"> Due</span>{" "}
              {format(invoice.paymentDue, "d MMM yyyy")}
            </p>
          </div>
          <p className="text-12 text-light-300 dark:text-primary-100">
            {invoice.clientName}
          </p>
        </div>
        <div className="flex gap-8 justify-between items-center">
          <p className="h3-16">
            ${" "}
            {invoice?.total?.toLocaleString("en-GB", {
              minimumFractionDigits: 2,
            })}
          </p>
          <Status status={invoice.status} />
          <Image
            className="hidden sm:block"
            src="/assets/icon-arrow-right.svg"
            width={8}
            height={12}
            alt="icon right"
          />
        </div>
      </div>
    </Link>
  );
};

export default InvoiceCard;
