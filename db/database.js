import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connInstance = await mongoose.connect("mongodb://localhost:27017", {
      dbName: "school",
    });
    console.log("MongoDB Connected : " + connInstance.connection.host);
  } catch (error) {
    console.log("MongoDB Connection Failed : " + error);
  }
};
