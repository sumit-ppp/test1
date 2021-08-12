import logger from "../shared/logger";
import mongoose from "mongoose";
import { error } from "winston";

export class Database {
  getConnectionToDB() {
      const url =
        "mongodb+srv://duser:K@m123456@sami.ijkpq.mongodb.net?retryWrites=true&w=majority";
    const oprions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    };
    mongoose.connect(url, oprions).catch((error: Error) => {
      logger.error(error);
      process.exit(1);
    });
    const db = mongoose.connection;
    db.on("connected", (err: Error) => {
      if (err) {
        console.log(err);
      }
      logger.info("connection success");
    });
    db.on("error", (err: Error) => {
      logger.error(err);
      process.exit(1);
    });
    db.on("disconnected", () => {
      logger.error("database disconnected");
    });
    process.on("SIGINT", () => {
      logger.info("application terminated");
      process.exit(0);
    });
  }
}
