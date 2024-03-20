import { Invoice } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import Status from "./Status";

interface Props {
  invoice: Invoice;
  containerClassNames: string;
}

const InvoiceCardMobile = ({ invoice, containerClassNames }: Props) => {
  return (
    <Link className={containerClassNames} href={`/invoice/${invoice.id}`}>
      <div className="background-light mb-4 h-[134px] p-6 rounded border border-transparent hover:border-primary-600 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="h3-12">
            <span className="text-primary400">#</span>
            {invoice.id}
          </h3>
          <p className="text-12 text-light-300 dark:text-primary-100">
            {invoice.clientName}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-12 text-light200 dark:text-[#DFE3FA] mb-2">
              <span className="text-primary400 dark:text-[#DFE3FA]"> Due</span>{" "}
              {format(invoice.paymentDue, "d MMM yyyy")}
            </p>
            <p className="h3-16">
              ${" "}
              {invoice?.total?.toLocaleString("en-GB", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <Status status={invoice.status} />
        </div>
      </div>
    </Link>
  );
};

export default InvoiceCardMobile;
