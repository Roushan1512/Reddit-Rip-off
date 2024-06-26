"use client";

import React from "react";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import axios from "axios";
import { Loader } from "lucide-react";

const Feed = () => {
  const [arr, setArr] = useState([]);
  var data;
  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get("/api/post/all")
        .then(async (res) => {
          data = await res.data;
          console.log("Data : ", data);
          setArr(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getPosts();
  }, []);

  return (
    <>
      {arr ? (
        <div className="h-fit w-[80%] grid grid-cols-3 gap-6 py-16">
          {arr.map((i, index) => (
            <Card
              key={index}
              username={i.username}
              userimg={i.userimg}
              post={i.post}
              tags={i.tags}
            />
          ))}
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <Loader size="50" className="animate-spin" />
        </div>
      )}
    </>
  );
};

export default Feed;
