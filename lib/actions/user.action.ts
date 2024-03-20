import Invoices from "@/database/invoice.model";
import User from "@/database/user.model";
import { CreateUserParams, DeleteUserParams } from "@/types/index";
import { connectToDatabase } from "../mongoose";

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // get user question ids
    const userQuestionIds = await Invoices.find({ author: user._id }).distinct(
      "_id"
    );

    console.log(userQuestionIds);

    // delete user questions
    await Invoices.deleteMany({ author: user._id });

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}