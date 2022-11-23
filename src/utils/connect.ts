import mongoose from "mongoose";
import config from "config";

export default async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Could not connect to DB");
    process.exit(1);
  }
}
