"use client";

import Feed from "@/components/Feed";
import Search from "@/components/Search";
import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className=" w-full h-fit flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl font-bold font-mono bg-clip-text bg-gradient-to-r from-amber-400 via-amber-100 to-amber-200 text-transparent">
          Discover & Share
        </h1>
        <h1 className="text-5xl font-bold font-mono bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-400 text-transparent">
          New Ideas Everyday
        </h1>
        <p className="text-xl font-mono text-amber-100 mt-4 mb-12">
          A place to share your thoughts and solve problems
        </p>
      </div>
      <Search />
      <Feed />
    </div>
  );
};

export default Home;
