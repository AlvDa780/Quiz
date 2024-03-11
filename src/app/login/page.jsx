"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AtSign, LockKeyhole, MoveLeft } from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = () => {
    console.log("Hello");
  };
  const user = {
    email: email,
    password: password,
  };

  return (
    <div className="mx-auto h-screen  container flex flex-col   space-y-5 justify-center items-center pt-8 ">
      <h1 className="flex justify-center text-3xl">Login</h1>

      <div className="flex flex-col space-y-5 items-center justify-center">
        <div className="w-80 flex items-center  border border-white pl-2 ">
          <AtSign size={18} />
          <input
            className=" ml-1 pl-2 pt-1 pb-1 bg-black shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="Email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-80 flex items-center  border border-white pl-2 ">
          <LockKeyhole size={18} />
          <input
            className="ml-1 pl-2 pt-1 pb-1 bg-black shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="Password"
            value={password}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="w-80 bg-green-400 pl-1 pr-1 pt-1 pb-1 "
          type="submit"
          onClick={submit}
        >
          Login
        </button>
      </div>

      <div className="flex justify-end w-80 ">
        <Link href="/Home">
          <MoveLeft size={26} />
        </Link>
      </div>
    </div>
  );
}
