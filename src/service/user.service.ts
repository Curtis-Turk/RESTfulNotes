import { omit } from "lodash";
import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword(email: String, password: String) {
  const user = await UserModel.findOne({ email });

  if (!user) return false;

  const isValid = user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}
