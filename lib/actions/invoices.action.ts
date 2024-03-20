"use server";

import Invoices from "@/database/invoice.model";
import { connectToDatabase } from "../mongoose";
import { FilterQuery } from "mongoose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  CreateParams,
  GetInvoiceParams,
  IdParams,
  UpdateParams,
  UpdateStatusPaidParams,
} from "@/types";
import { invoices } from "@/constants/invoices";

export async function getInvoices(params: GetInvoiceParams) {
  try {
    connectToDatabase();

    const query: FilterQuery<typeof Invoices> = {};

    const { page = 1, pageSize = 10, filter } = params;

    const skipAmount = (page - 1) * pageSize;

    let sortOptions = {};

    switch (filter) {
      case "draft":
        sortOptions = { status: "draft" };
        break;
      case "paid":
        sortOptions = { status: "paid" };
        break;
      case "pending":
        sortOptions = { status: "pending" };
        break;
      default:
        break;
    }

    const results = await Invoices.find(sortOptions)
      // .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    const totalInvoices = await Invoices.countDocuments(query);

    const isNext = totalInvoices > skipAmount + results.length;

    const invoices = JSON.stringify(results);

    return { invoices, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createInvoice(params: CreateParams) {
  const { invoice, path } = params;

  try {
    connectToDatabase();
    await Invoices.create({
      ...invoice,
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findInvoiceById(params: IdParams) {
  try {
    connectToDatabase();

    const { id } = params;

    const invoice = await Invoices.findOne({ id });

    return invoice;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteInvoiceById(params: IdParams) {
  try {
    connectToDatabase();

    const { id } = params;

    const invoice = await Invoices.deleteOne({ id });

    redirect("/");

    return invoice;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function UpdateInvoiceStatusPaid(params: UpdateStatusPaidParams) {
  try {
    connectToDatabase();

    const { id, path } = params;

    await Invoices.findByIdAndUpdate({ _id: id }, { $set: { status: "paid" } });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function UpdateInvoice(params: UpdateParams) {
  try {
    connectToDatabase();

    const { invoice, path } = params;

    await Invoices.findByIdAndUpdate(
      { _id: invoice._id },
      { ...invoice },
      { new: true }
    );

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function insertManyInvoice(params: any) {
  try {
    const { path } = params;
    connectToDatabase();

    await Invoices.insertMany(invoices);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
