import GoBack from "@/components/GoBack";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pb-5">
      <GoBack link="/" />
      <>{children}</>
    </div>
  );
};

export default layout;
