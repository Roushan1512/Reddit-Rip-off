import { connectDB } from "@/db/database";
import Post from "@/models/post.model";

export const POST = async (req) => {
  try {
    await connectDB();
    const data = await req.json();
    const { userid, username, userimg, post, tags, answers } = data;
    const newPost = await Post.create({
      userid,
      username,
      userimg,
      post,
      tags,
      answers,
    });
    console.log(newPost);
    return new Response("Post Created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Error while posting", { status: 500 });
  }
};
