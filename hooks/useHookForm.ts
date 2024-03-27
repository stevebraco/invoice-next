import React, { useEffect, useState } from "react";
import { useActiveForm } from "@/context/ActiveFormProvider";
import { InvoiceValidations } from "@/lib/validations";
import { FormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { generateID } from "@/lib/utils";
import { UpdateInvoice, createInvoice } from "@/lib/actions/invoices.action";
import { usePathname } from "next/navigation";
import { invoiceMethod, invoiceSet } from "@/constants/utils";
import { useToast } from "@/components/ui/use-toast";

const useHookForm = (id?: string | undefined) => {
  const [date, setDate] = useState<Date>(new Date());
  const pathname = usePathname();
  const { activeForm, setActiveForm } = useActiveForm();
  const { toast } = useToast();

  const onSubmit = async (data: FormValues) => {
    if (id) {
      const itemTotal = methods.getValues().items.map((item) => ({
        ...item,
        total: item.quantity * item.price,
      }));
      const total = methods
        .getValues()
        .items.reduce(
          (acc, current) =>
            acc + (current.price || 0) * (current.quantity || 0),
          0
        );
      const invoice = {
        ...activeForm.formValue,
        status: "pending",
        ...invoiceMethod(date, methods.getValues()),
        items: itemTotal,
        total,
      };
      await UpdateInvoice({ id, invoice, path: pathname });
      toast({
        title: "The changes have been modified.  🎉🎉🎉",
      });
      setActiveForm((prevState) => ({ ...prevState, active: false }));
      return;
    }
    const itemTotal = data.items.map((item) => ({
      ...item,
      total: item.quantity * item.price,
    }));
    const total = data.items.reduce(
      (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
      0
    );

    const invoice = {
      id: generateID(),
      status: "pending",
      ...invoiceMethod(date, data),
      items: itemTotal,
      total,
      author: activeForm.userId,
    };

    await createInvoice({ invoice, path: pathname });
    toast({
      title: "The invoice has been successfully created.  🎉🎉🎉",
    });
    setActiveForm((prev) => ({ ...prev, active: false, formValue: {} }));
  };

  const handleDraft = async () => {
    const itemTotal = methods.getValues().items.map((item) => ({
      ...item,
      total: item.quantity * item.price,
    }));
    const total = methods
      .getValues()
      .items.reduce(
        (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
        0
      );
    const invoice = {
      id: generateID(),
      status: "draft",
      ...invoiceMethod(date, methods.getValues()),
      items: itemTotal,
      total,
      author: activeForm.userId,
    };
    await createInvoice({ invoice, path: pathname });
    toast({
      title: "The draft has been successfully saved.  🎉🎉🎉",
    });
    setActiveForm((prev) => ({ ...prev, active: false, formValue: {} }));
  };

  const handleDiscard = () => {
    methods.reset();
  };

  const handleCancel = async () => {
    invoiceSet(methods, activeForm, setDate);
  };

  useEffect(() => {
    if (activeForm.active && id) {
      invoiceSet(methods, activeForm, setDate);
    } else {
      methods.reset();
      setDate(new Date());
    }
  }, [activeForm.active, id]);

  const methods = useForm<FormValues>({
    resolver: zodResolver(InvoiceValidations()),
    defaultValues: {
      billToAddress: "",
      billToCity: "",
      billToPostCode: " ",
      billToCountry: "",
      billFromName: "",
      billFromEmail: "",
      billFromAddress: "",
      billFromCity: "",
      billFromPostCode: "",
      billFromCountry: "",
      description: "",
      paymentTerms: "30",
      items: [],
      // total: undefined,
    },
    mode: "onBlur",
  });

  return {
    onSubmit,
    handleDraft,
    handleDiscard,
    methods,
    date,
    setDate,
    handleCancel,
  };
};

export default useHookForm;
