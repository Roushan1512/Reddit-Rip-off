import { connectDB } from "@/db/database.js";
import { Item } from "@/models/item.model.js";

export async function GET() {
  await connectDB();
  const data = await Item.find({});
  return Response.json(data);
}
