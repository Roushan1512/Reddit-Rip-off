import { connectDB } from "@/db/database";
import Post from "@/models/post.model";

export const GET = async (req, { params }) => {
  try {
    const { my } = params;
    await connectDB();
    const myposts = await Post.find({ userid: my });
    return Response.json(myposts, { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Internal Server Error", { status: 500 });
  }
};
