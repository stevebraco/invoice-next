import FilterInvoice from "@/components/FilterInvoice";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="px-3 pb-16">
      <div className="flex-between pt-14">
        <div>
          <h1 className="h1">Invoices</h1>
          <Skeleton className="h-3 w-full rounded" />
        </div>
        <FilterInvoice />
      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} className="h-[76px] w-full rounded " />
        ))}
      </div>
    </div>
  );
};

export default loading;
