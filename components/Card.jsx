import React from "react";

const Card = ({ username, userimg, post, tags }) => {
  return (
    <div className="bg-[#0000005b] h-32 w-[100%] border-[1px] border-amber-300 justify-self-center rounded-lg flex gap-5">
      <img
        src={userimg}
        alt="profile"
        className="h-10 aspect-square m-3 self-start rounded-full"
      />
      <div className="flex flex-col justify-center items-center w-full pr-4">
        <h1 className="text-wrap">{post}</h1>
        <div className="flex justify-center items-end gap-3">
          {tags.map((i, index) => (
            <span
              key={index}
              className="text-amber-300 mx-2 rounded-full cursor-pointer"
            >
              #{i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
