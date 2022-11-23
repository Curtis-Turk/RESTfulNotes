import mongoose from "mongoose";
import config from "config";
import log from "./logger";

export default async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    log.info("Connected to DB");
  } catch (err) {
    log.error("Could not connect to DB");
    process.exit(1);
  }
}
