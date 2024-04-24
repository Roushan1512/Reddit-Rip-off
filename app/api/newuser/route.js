import { connectDB } from "@/db/database";
import User from "@/models/user.model";

export const POST = async (req, res) => {
  try {
    await connectDB();
    const data = await req.json();
    const email = data.email;
    const name = data.name;
    const userexists = await User.findOne({ email });
    if (userexists) {
      return new Response("User Already Exists");
    } else {
      await User.create({ email, name });
      return new Response("User Created", { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return new Response("User Not Created", { status: 500 });
  }
};
