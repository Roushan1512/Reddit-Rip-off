import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

export const Item =
  mongoose.models.items || mongoose.model("items", ItemSchema);
