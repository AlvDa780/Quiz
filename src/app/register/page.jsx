"use client";
import React, { useState } from "react";
import {
  AtSign,
  LockKeyhole,
  User,
  MoveLeft,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "../../utils/supabase";
import { useForm } from "react-hook-form";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // const submit = async () => {

  //   const user =  {
  //     email: email,
  //     password: password,
  //     username: username,
  //   };
  //   console.log("🚀 ~ submit ~ user:", user);

  //   // await supabase.from("users").insert(user);
  // };

  return (
    <div className="mx-auto h-screen container flex flex-col space-y-3 justify-center items-center ">
      <div className="flex justify-start w-80">
        <Link className="flex items-center " href="/home">
          <MoveLeft className="pr-2" size={32} />
          Home
        </Link>
      </div>
      <h1 className="flex justify-center text-3xl">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <label className="w-80 flex items-center border border-white pl-2 ">
            <User size={18} />
            <input
              className=" ml-1 pl-2 pt-1 pb-1 bg-black shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              {...register("username", { required: true, maxLength: 20 })}
              value={username}
              placeholder="Enter your Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <div className=" w-full justify-center flex ">
            {errors?.username?.type === "required" && (
              <p className=" flex items-center justify-center text-red-400">
                <TriangleAlert size={18} />
                This field is required
              </p>
            )}
          </div>

          <label className="w-80 flex items-center  border border-white pl-2 ">
            <AtSign size={18} />
            <input
              className=" ml-1 pl-2 pt-1 pb-1 bg-black shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              {...register("Email")}
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <div className=" w-full justify-center flex ">
            {errors?.username?.type === "required" && (
              <p className=" flex items-center justify-center text-red-400">
                <TriangleAlert size={18} />
                This field is required
              </p>
            )}
          </div>

          <label className="w-80 flex items-center  border border-white pl-2 ">
            <LockKeyhole size={18} />

            <input
              className="ml-1 pl-2 pt-1 pb-1 bg-black shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register("Password")}
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className=" w-full justify-center flex ">
            {errors?.username?.type === "required" && (
              <p className=" flex items-center justify-center text-red-400">
                <TriangleAlert size={18} />
                This field is required
              </p>
            )}
          </div>

          <label className="w-80 flex items-center border border-white pl-2 ">
            <LockKeyhole size={18} />

            <input
              className="ml-1 pl-2 pt-1 pb-1 bg-black shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={confPassword}
              placeholder="Confirm your Password"
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </label>

          <div className=" w-full justify-center flex ">
            {errors?.username?.type === "required" && (
              <p className=" flex items-center justify-center text-red-400">
                <TriangleAlert size={18} />
                This field is required
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              className="w-80 bg-green-400 pl-1 pr-1 pt-1 pb-1 "
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
