import { Schema, model, models, Document } from "mongoose";

export interface IInvoices extends Document {
  author: Schema.Types.ObjectId;
  id: String;
  createdAt: Date;
  paymentDue: Date;
  description: String;
  paymentTerms: Number;
  clientName: String;
  clientEmail: String;
  status: String;
  senderAddress: {
    street: String;
    city: String;
    postCode: String;
    country: String;
  };
  clientAddress: {
    street: String;
    city: String;
    postCode: String;
    country: String;
  };
  items: [{ name: String; quantity: Number; price: Number; total: Number }];
  total: Number;
}

const InvoicesSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  id: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  paymentDue: { type: Date },
  description: { type: String },
  paymentTerms: { type: Number },
  clientName: { type: String },
  clientEmail: { type: String },
  status: { type: String },
  senderAddress: {
    type: {
      street: { type: String },
      city: { type: String },
      postCode: { type: String },
      country: { type: String },
    },
  },
  clientAddress: {
    type: {
      street: { type: String },
      city: { type: String },
      postCode: { type: String },
      country: { type: String },
    },
  },
  items: {
    type: [
      {
        name: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        total: { type: Number },
      },
    ],
  },
  total: { type: Number, default: 0 },
});

const Invoices = models.Invoices || model("Invoices", InvoicesSchema);

export default Invoices;
