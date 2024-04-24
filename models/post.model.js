import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userid: {
    type: String,
  },
  username: {
    type: String,
  },
  userimg: {
    type: String,
  },
  post: {
    type: String,
  },
  tags: {
    type: Array,
  },
  answers: {
    type: Array,
  },
});

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;
