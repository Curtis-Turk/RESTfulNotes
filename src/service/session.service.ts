import SessionModel from "../models/session.models";

export async function createSession(userId: String) {
  const session = await SessionModel.create({ user: userId });

  return session.toJSON();
}
