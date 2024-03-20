export const invoiceMethod = (date: any, methods: any) => {
  return {
    paymentDue: new Date(date).toISOString(),
    description: methods.description,
    paymentTerms: methods.paymentTerms,
    clientName: methods.billFromName,
    clientEmail: methods.billFromEmail,
    senderAddress: {
      street: methods.billToAddress,
      city: methods.billToCity,
      postCode: methods.billToPostCode,
      country: methods.billToCountry,
    },
    clientAddress: {
      street: methods.billFromAddress,
      city: methods.billFromCity,
      postCode: methods.billFromPostCode,
      country: methods.billFromCountry,
    },
  };
};

export const invoiceSet = (methods: any, activeForm: any, setDate: any) => {
  methods.setValue("billToAddress", activeForm.formValue.senderAddress?.street);
  methods.setValue("billToCity", activeForm.formValue.senderAddress?.city);
  methods.setValue(
    "billToPostCode",
    activeForm.formValue.senderAddress?.postCode
  );
  methods.setValue(
    "billToCountry",
    activeForm.formValue.senderAddress?.country
  );
  methods.setValue("billFromName", activeForm.formValue.clientName);
  methods.setValue("billFromEmail", activeForm.formValue.clientEmail);
  methods.setValue(
    "billFromAddress",
    activeForm.formValue.clientAddress?.street
  );
  methods.setValue("billFromCity", activeForm.formValue.clientAddress?.city);
  methods.setValue(
    "billFromPostCode",
    activeForm.formValue.clientAddress?.postCode
  );
  methods.setValue(
    "billFromCountry",
    activeForm.formValue.clientAddress?.country
  );
  methods.setValue("paymentTerms", activeForm.formValue.paymentTerms);
  methods.setValue("description", activeForm.formValue.description);

  setDate(new Date(activeForm?.formValue?.paymentDue));
  methods.setValue("items", activeForm.formValue.items);
};
