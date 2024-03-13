"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Links() {
  const pathname = usePathname();

  return (
    <div className="mx-auto h-screen container flex flex-col space-y-5 justify-center items-center pt-8">
      <h1 className="text-3xl">WELCOME TO MY QUIZZ</h1>
      <nav>
        <ul className="flex">
          <li className="bg-green-400 border border-white pl-2 pr-2 pb-1 pt-1">
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/login"
            >
              Login
            </Link>
          </li>
          <li className="bg-blue-500 border border-white pl-2 pr-2 pb-1 pt-1">
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/register"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
