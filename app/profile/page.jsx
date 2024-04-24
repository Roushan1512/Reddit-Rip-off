"use client";

import MyFeed from "@/components/MyFeed";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex flex-col w-full h-fit justify-center items-center">
        <div className="mt-8 py-8 border-[1px] border-amber-300 h-fit w-3/4 flex justify-center items-center gap-4 rounded-3xl bg-[#ffffff0a]">
          <img
            src={user.picture}
            alt={user.name}
            className="h-32 aspect-square mx-8 rounded-full"
          />
          <div className="flex flex-col justify-center items-center w-full gap-8">
            <h2 className="text-amber-300 font-semibold text-6xl font-serif">
              {user.name}
            </h2>
            <p className="text-lg font-medium">{user.email}</p>
          </div>
        </div>
        <MyFeed userid={user.email} />
      </div>
    )
  );
}
