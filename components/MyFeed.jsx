import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";

const MyFeed = ({ userid }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const getmyPosts = async () => {
      await axios
        .get(`/api/post/${userid}`)
        .then(async (res) => {
          setArr(await res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getmyPosts();
  }, []);
  return (
    <>
      {arr ? (
        <div className="h-fit w-[80%] grid grid-cols-2 gap-6 py-16">
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

export default MyFeed;
