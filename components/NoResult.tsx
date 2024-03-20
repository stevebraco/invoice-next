"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { insertManyInvoice } from "@/lib/actions/invoices.action";
import { useActiveForm } from "@/context/ActiveFormProvider";

const NoResult = () => {
  const path = usePathname();
  const handleCreateInvoices = async () => {
    await insertManyInvoice({ path });
  };
  const { setActiveForm } = useActiveForm();
  return (
    <div className="flex-center flex-col w-full">
      <Image
        src="./assets/illustration-empty.svg"
        alt="no result"
        width={300}
        height={300}
      />
      <p className="h2 mt-8 dark:text-primary-100">There is nothing here</p>
      <p className="text-primary-400 mt-8 w-[240px] text-center dark:text-primary-100">
        Create an invoice by clicking the{" "}
        <span
          onClick={() => setActiveForm((prev) => ({ ...prev, active: true }))}
          className="font-bold cursor-pointer"
        >
          New Invoice
        </span>{" "}
        button and get started
      </p>
      <p className="text-primary-400 mt-8 w-[240px] text-center dark:text-primary-100">
        You can create invoices automatically by clicking here.
        <Button className="btn btn-primary mt-5" onClick={handleCreateInvoices}>
          Create Invoices
        </Button>
      </p>
    </div>
  );
};

export default NoResult;
