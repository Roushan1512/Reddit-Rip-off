"use server";

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connInstance = await mongoose.connect(process.env.Mongo_URI, {
      dbName: "fakeReddit",
    });
    console.log("Mongo DB Connected : " + connInstance.connection.host);
  } catch (error) {
    console.log("Mongo DB Connection Failed : " + error.message);
  }
};
