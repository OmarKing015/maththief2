"use client";

import Link from "next/link";
import { Select } from "@/components/ui/select";
import { dark } from "@clerk/themes";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { SignIn, useAuth, useSignIn } from "@clerk/nextjs";

export default function Component() {
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn } = useSignIn();

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center sm:gap-3 h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex sm:gap-40 gap-6 text-lg font-medium md:flex last:md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="/"
          >
            <span className="">Math Thief</span>{" "}
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="grid grid-cols-3 gap-4"></div>
          </form>
        </div>
      </header>
      <h1 className="mx-10 font-extrabold text-center text-5xl my-10 ">
        Welcome to the Math Thief where we steal Math Sessions 😘😍
     
      </h1>
      <div className="text-center items-center text-4xl gap-16 flex mx-auto">
     
        {!isLoaded && (
          <div className="text-5xl mx-auto my-auto font-bold text-red-700">
            Loading...
          </div>
        )}
        
        <SignIn
          appearance={{ elements: { footer: "hidden", internal: "hidden" } }}
        />
        {isSignedIn && (
          <>
            <div className="mt-12 gap-10 flex flex-col">
            <h2 className="text-5xl font-bold text-center text-yellow-500 flex ">
            Choose a branch
          </h2>
              <Link
                href="/puremath"
                className="font-bold text-gray-400 hover:text-white"
              >
                Pure Math
              </Link>
              <Link
                href="/appliedmath"
                className="font-bold text-gray-400 hover:text-white"
              >
                Applied Math
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
