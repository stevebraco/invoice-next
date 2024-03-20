"use client";
import React from "react";
import InvoiceCard from "./InvoiceCard";
import { Invoice } from "@/types";
import NoResult from "./NoResult";
import InvoiceCardMobile from "./InvoiceCardMobile";

const InvoiceList = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <div className="mt-10">
      {invoices.length > 0 ? (
        invoices.map((invoice: Invoice) => (
          <>
            <InvoiceCard
              // containerClassNames="hidden sm:block"
              key={invoice.id}
              invoice={invoice}
            />
            {/* <InvoiceCardMobile
              containerClassNames={"sm:hidden"}
              key={invoice.id}
              invoice={invoice}
            /> */}
          </>
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default InvoiceList;
