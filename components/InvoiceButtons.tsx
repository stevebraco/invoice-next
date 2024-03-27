"use client";
import React, { useEffect, useState } from "react";
import { useActiveForm } from "@/context/ActiveFormProvider";
import {
  UpdateInvoiceStatusPaid,
  deleteInvoiceById,
} from "@/lib/actions/invoices.action";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface PropsButtons {
  invoice: string;
  invoiceId: string;
  containerClassNames?: string;
}

const InvoiceButtons = ({
  invoice,
  invoiceId,
  containerClassNames,
}: PropsButtons) => {
  const { toast } = useToast();

  const { activeForm, setActiveForm } = useActiveForm();

  const pathname = usePathname();

  const data = JSON.parse(invoice);

  useEffect(() => {
    setActiveForm((prev) => ({ ...prev, active: false, formValue: data }));
  }, []);

  const handleActiveForm = () => {
    setActiveForm((prev) => ({ ...prev, formValue: data, active: true }));
  };

  function isEmpty(data: any) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const value = data[key];
        if (typeof value === "string" && value.trim() === "") {
          console.log(value);
          return true;
        }
        if (typeof value === "object" && isEmpty(value)) {
          console.log(value);

          return true;
        }
      }
    }
    return false;
  }

  const handleMarkAsPaid = async () => {
    if (isEmpty(data)) {
      setActiveForm((prevState) => ({
        ...prevState,
        formValue: data,
        active: true,
      }));
    } else {
      await UpdateInvoiceStatusPaid({ id: data._id, path: pathname });
      toast({
        title: "The invoice has been marked as paid.  🎉🎉🎉",
      });
    }
  };

  const handleDeleteInvoice = async () => {
    await deleteInvoiceById({ id: invoiceId });
    toast({
      title: "The invoice has been deleted.  🎉🎉🎉",
    });
  };

  return (
    <div
      className={`${containerClassNames} ${
        activeForm.active ? "-z-0" : "z-10"
      } sm:z-0 flex sm:space-x-3 sm:relative sm:justify-normal sm:w-auto`}
    >
      <Button
        onClick={handleActiveForm}
        disabled={data.status === "paid"}
        className="btn btn-light"
      >
        Edit
      </Button>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="btn btn-danger">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-primary-100 dark:bg-[#1E2139] w-[480px] h-[249px] border-none justify-center p-12">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[24px] dark:text-primary-100">
              Confirm Deletion
            </AlertDialogTitle>
            <AlertDialogDescription className="text-primary400dark-700 ">
              Are you sure you want to delete invoice #XM9141? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-bold btn btn-light border-none">
              Cancel
            </AlertDialogCancel>
            <Button onClick={handleDeleteInvoice} className="btn btn-danger">
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button
        className="btn btn-primary"
        size="lg"
        onClick={handleMarkAsPaid}
        disabled={data.status === "paid" || data.status === "draft"}
      >
        Mark as Paid
      </Button>
    </div>
  );
};

export default InvoiceButtons;
