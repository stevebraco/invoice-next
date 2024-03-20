"use client";
import LeftSideBar from "@/components/LeftSideBar";
import { useActiveForm } from "@/context/ActiveFormProvider";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { activeForm } = useActiveForm();
  return (
    <main className="h-full">
      <div
        className={`flex flex-col md:flex-row background-main relative h-full  ${
          activeForm.active ? "overflow-hidden" : ""
        }  `}
      >
        <LeftSideBar />
        <div className="mx-auto w-fullmx-auto w-full max-w-2xl pb-20 px-3">
          {children}
        </div>
        <Toaster />
      </div>
    </main>
  );
};

export default layout;
