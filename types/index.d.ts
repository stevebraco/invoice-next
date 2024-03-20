type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Item = {
  id?: number | undefined;
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type Invoice = {
  _id?: string;
  id?: string | undefined;
  createdAt?: any;
  paymentDue: any;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};

export interface UrlQueryParams {
  params: string;
  key: string | null;
  value: string | null;
}

export interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export type FormValues = {
  billToAddress: string;
  billToCity: string;
  billToPostCode: string;
  billToCountry: string;
  billFromName: string;
  billFromEmail: string;
  billFromAddress: string;
  billFromCity: string;
  billFromPostCode: string;
  billFromCountry: string;
  description: string;
  paymentTerms: string;

  items: {
    name: string;
    price: number;
    quantity: number;
    total: number;
  }[];
  // total: number;
};

export type CreateParams = {
  invoice: Invoice;
  path: string;
};

export type UpdateParams = {
  id?: string | undefined;
  invoice: Invoice;
  path: string;
};

export type UpdateStatusPaidParams = {
  id: string;
  path: string;
};

export type IdParams = {
  id: string;
};

export type GetInvoiceParams = {
  filter: string | undefined;
  page?: number;
  pageSize?: number;
};

export interface CreateUserParams extends ClerkId {
  name: string;
  username: string;
  email: string;
  picture: string;
}

interface ClerkId {
  clerkId: string;
}

export interface DeleteUserParams extends ClerkId {}
