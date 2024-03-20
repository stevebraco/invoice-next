import * as z from "zod";

export const InvoiceValidations = () => {
  const message: string = "Can't be empty";

  return z.object({
    billToAddress: z.string().min(3, {
      message,
    }),
    billToCity: z.string().min(3, {
      message,
    }),
    billToPostCode: z.string().min(3, {
      message,
    }),
    billToCountry: z.string().min(3, {
      message,
    }),
    billFromName: z.string().min(3, {
      message,
    }),
    billFromEmail: z
      .string()
      .min(3, {
        message: "The email address must be at least 3 characters long.",
      })
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message,
      }),
    billFromAddress: z.string().min(3, {
      message,
    }),
    billFromCity: z.string().min(3, {
      message,
    }),
    billFromPostCode: z.string().min(3, {
      message,
    }),
    billFromCountry: z.string().min(3, {
      message,
    }),
    description: z.string().min(3, {
      message,
    }),
    paymentTerms: z.coerce.number(),
    items: z.array(
      z.object({
        name: z.string().min(3, {
          message,
        }),
        quantity: z.coerce.number(),
        price: z.coerce.number(),
      })
    ),
    // total: z.number(),
  });
};
