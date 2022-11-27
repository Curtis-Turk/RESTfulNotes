import SessionModel from "../models/session.models";

export async function createSession(userId: String, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
}
