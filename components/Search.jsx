"use client";

import { Squirrel } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="w-1/2 h-fit flex justify-center items-center py-3 bg-black rounded-full gap-6">
      <div className="bg-black h-fit w-fit p-2 rounded-full border-2 text-amber-200">
        <Squirrel strokeWidth={1.2} />
      </div>
      <input
        type="text"
        placeholder="Search for ideas..."
        className="bg-black border-b-2 border-b-amber-200 py-3 mx-4 w-[60%] px-4 text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-none"
      />
      <button
        type="button"
        className="py-2 px-6 rounded-full border-2 border-black bg-amber-300 font-bold text-black hover:text-amber-300 hover:bg-black hover:border-amber-200 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
