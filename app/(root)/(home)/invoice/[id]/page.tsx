import Button from "@/components/Button";
import Status from "@/components/Status";
import { findInvoiceById } from "@/lib/actions/invoices.action";
import React from "react";
import InvoiceButtons from "@/components/InvoiceButtons";
import Invoice from "@/components/Invoice";

interface UrlProps {
  params: { id: string };
}

const Page = async ({ params }: UrlProps) => {
  const result = await findInvoiceById({ id: params.id });

  return (
    <>
      <div className="flex-between background-light mt-8 py-3 px-5 rounded">
        <div className="flex items-center gap-3 justify-between w-full sm:w-auto">
          <span className="text-12 text-light300 dark:text-[#DFE3FA]">
            Status
          </span>
          <Status status={result?.status} />
        </div>
        <InvoiceButtons
          invoice={JSON.stringify(result)}
          invoiceId={params.id}
          containerClassNames="fixed bottom-0 left-0 right-0 w-full justify-evenly px-4 h-[91px] items-center z-10 bg-primary-100"
        />
      </div>
      <Invoice invoice={result} />
    </>
  );
};

export default Page;
