import { invoices } from "@/constants/invoices";
import { Invoice } from "@/types";
import React from "react";
import InvoiceCardMobile from "./InvoiceCardMobile";
import NoResult from "./NoResult";

const InvoiceListMobile = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <div className="mt-10">
      {invoices.length > 0 ? (
        invoices.map((invoice: Invoice) => (
          <InvoiceCardMobile
            containerClassNames={"sm:hidden"}
            key={invoice.id}
            invoice={invoice}
          />
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default InvoiceListMobile;
