import { connect } from "mongoose";
import { envs } from "./envs.js";

export const connectDB = async () => {
  const { DB_URI } = envs;

  try {
    await connect(DB_URI);
    console.log(`Connected to the database MongoDB 🚀`);
  } catch (error) {
    throw new Error("Error connecting to the database", { cause: error });
  }
};
