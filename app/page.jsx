"use client";

import Feed from "@/components/Feed";
import Search from "@/components/Search";
import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("/api/getdata")
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div>Big Ass Title</div>
      <Search />
      <Feed />
    </div>
  );
};

export default Home;
