import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-[74px] w-full rounded mt-8" />
      <Skeleton className="h-[450px] w-full rounded mt-8" />
    </div>
  );
};

export default loading;
