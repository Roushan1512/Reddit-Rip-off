import { connectDB } from "@/db/database";
import Post from "@/models/post.model";

export const GET = async () => {
  try {
    await connectDB();
    const data = await Post.find({});
    console.log({ Called: "/api/post/all" });
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return new Response("An error occurred", { status: 500 });
  }
};
