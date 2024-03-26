"use client";
import React from "react";
import InvoiceCard from "./InvoiceCard";
import { Invoice } from "@/types";
import NoResult from "./NoResult";

const InvoiceList = ({
  invoices,
  mongoUserId,
}: {
  invoices: Invoice[];
  mongoUserId: string;
}) => {
  return (
    <div className="mt-10">
      {invoices.length > 0 ? (
        invoices.map((invoice: Invoice) => (
          <InvoiceCard
            // containerClassNames="hidden sm:block"
            key={invoice.id}
            invoice={invoice}
          />
        ))
      ) : (
        <NoResult mongoUserId={mongoUserId} />
      )}
    </div>
  );
};

export default InvoiceList;
