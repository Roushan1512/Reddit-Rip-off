"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import "@/styles/globals.css";

const NewPost = () => {
  const { user } = useUser();
  const [post, setPost] = useState("");
  const [tags, setTags] = useState([]);
  const [eachTag, setEachTag] = useState("");
  const answers = [];

  const addpost = async () => {
    if (post) {
      const data = {
        userid: user.email,
        username: user.name,
        userimg: user.picture,
        post: post,
        tags: tags,
        answers: answers,
      };
      await axios
        .post("/api/post/new", data)
        .then((res) => {
          console.log(res.data);
          setPost("");
          setTags([]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPost("Please write something to post");
      setTimeout(() => {
        setPost("");
      }, 2000);
    }
  };

  return (
    <div className="w-full flex flex-col justify-start items-center gap-4">
      <h1 className="text-6xl font-bold font-mono bg-clip-text bg-gradient-to-r from-amber-400 via-amber-100 to-amber-200 text-transparent">
        New Post
      </h1>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold font-mono bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-400 text-transparent">
          Welcome
        </h1>
        <h1 className="ml-4 text-4xl font-bold font-mono bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-transparent">
          {user ? user.given_name : ". . . ."}
        </h1>
      </div>
      <h2 className="text-4xl font-bold font-mono bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-400 text-transparent">
        What's on your mind?
      </h2>
      <div className="w-[60%] h-fit rounded-xl flex flex-col justify-center items-center mt-8">
        <div className="w-[100%] flex justify-center items-start mb-4">
          {user ? (
            <img
              src={user.picture}
              alt={user.name}
              className="h-16 aspect-square rounded-full"
            />
          ) : (
            <div className="h-16 aspect-square rounded-full flex justify-center items-center animate-spin">
              <Loader2 />
            </div>
          )}
          <textarea
            placeholder="What are you thinking today . . ."
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="min-w-[90%] mx-6 min-h-36 bg-black p-4 rounded-3xl focus:outline-none border-2 border-amber-300"
          ></textarea>
        </div>
        <div className="w-[100%] flex justify-start items-center px-16 mt-6">
          <input
            type="text"
            placeholder="Tags"
            value={eachTag}
            onChange={(e) => setEachTag(e.target.value)}
            className="w-32 py-2 px-6 ml-4 rounded-l-full bg-black text-white focus:outline-none"
          />
          <button
            type="button"
            onClick={() => {
              setTags([...tags, eachTag]);
              setEachTag("");
            }}
            className="py-2 px-4 mr-4 rounded-r-full bg-amber-300 text-black font-bold border-l-2 border-l-amber-300 hover:bg-black hover:text-amber-300 transition-colors"
          >
            Add
          </button>
          {tags.map((i, index) => (
            <span
              key={index}
              onClick={() => setTags(tags.filter((j) => j != i))}
              className="bg-amber-300 text-black py-1 px-4 mx-2 rounded-full cursor-pointer"
            >
              {i}
            </span>
          ))}
        </div>
        <div className="w-[100%] flex justify-end items-center px-8">
          <button
            type="button"
            onClick={addpost}
            className="py-2 px-8 text-lg rounded-full border-2 border-black bg-amber-300 font-bold text-black hover:text-amber-300 hover:bg-black hover:border-amber-200 transition-colors"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
