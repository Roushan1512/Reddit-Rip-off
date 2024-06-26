"use client";

import React, { useEffect } from "react";
import { Snail, Squirrel } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import axios from "axios";

const Nav = () => {
  const { user } = useUser();

  useEffect(() => {
    const postUser = async () => {
      if (user) {
        console.log(user.name);
        await axios
          .post("/api/newuser", user)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    postUser();
  }, [user]);

  return (
    <div className="w-full text-center h-20 p-3 flex justify-center items-center relative mb-4">
      <div className="absolute left-3 flex justify-center items-center gap-16">
        <div className="bg-black h-fit w-fit p-3 rounded-full border-2 text-amber-200">
          <a href="/">
            <Squirrel size={32} strokeWidth={1.5} />
          </a>
        </div>
        <h1 className="text-4xl font-mono font-extrabold bg-clip-text bg-gradient-to-r from-white via-amber-300 to-white text-transparent">
          Reddit Rip-off
        </h1>
      </div>
      <div className="absolute right-3 flex justify-center items-center">
        {user ? (
          <div className="flex justify-center items-center gap-8 px-4">
            <button
              type="button"
              className="py-2 px-6 rounded-full border-2 border-black bg-amber-300 font-bold text-black hover:text-amber-300 hover:bg-black hover:border-amber-200 transition-colors"
            >
              <a href="/newpost">New Post</a>
            </button>
            <button
              type="button"
              className="py-2 px-6 rounded-full border-2 border-black bg-amber-300 font-bold text-black hover:text-amber-300 hover:bg-black hover:border-amber-200 transition-colors"
            >
              <a href="/api/auth/logout">Logout</a>
            </button>
            <Link href="/profile">
              <img
                src={user.picture}
                alt={user.name}
                className="h-16 aspect-square rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-8 px-4">
            <button
              type="button"
              className="py-2 px-6 rounded-full border-2 border-black bg-amber-300 font-bold text-black hover:text-amber-300 hover:bg-black hover:border-amber-200 transition-colors"
            >
              <a href="/api/auth/login">Login</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
