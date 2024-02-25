"use client";
import Link from "next/link";
import { Select } from "@/components/ui/select";
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
import { myData } from "./data/data";
import {
  SignIn,
  SignOutButton,
  SignedIn,
  SignedOut,
  useAuth,
  useClerk,
  useSignIn,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
const Component = () => {
  const { isLoaded, signIn } = useSignIn();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  if (!isLoaded) {
    return (
      <div className="text-7xl text-center font-bold my-auto mx-auto">
        Loading...
      </div>
    );
  }

  return (
    <>
      <SignedIn>
        <div className="flex flex-col w-full min-h-screen">
          <header className="flex items-center sm:gap-3 h-16 px-4 border-b shrink-0 md:px-6">
            <nav className="flex sm:gap-40 gap-6 text-lg font-medium md:flex last:md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
                href="/"
              >
                <span className="">Home</span>
              </Link>
              <Link className="font-bold" href="/puremath">
                Pure Math
              </Link>
              <Link
                className="text-gray-500 dark:text-gray-400 "
                href="/appliedmath"
              >
                Applied Math
              </Link>
              <div className="text-red-500 absolute right-0 mr-8">
                <SignOutButton signOutCallback={() => signOut()} />
              </div>
            </nav>
            <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form className="flex-1 ml-auto sm:flex-initial">
                <div className="gridd grid-cols-3 gap-4"></div>
              </form>
            </div>
          </header>
          <main className="flex sm:flex-nowrap sm:flex-col  sm:text-center flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
            <div className="grid gap-16">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="">Sessions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {myData.Sessions.map((session) => (
                      <div
                        className="flex lg:flex-row sm:flex-col sm:flex-nowrap "
                        key={session.session}
                      >
                        <TableCell className="font-medium sm:text-center">
                          {session.session}
                        </TableCell>
                        {session.lectures.map((lecture) => (
                          <TableCell className="ml-[10rem] sm:m-auto w-16 gap-10">
                            <a href={lecture.link} className="w-16">
                              {lecture.name}
                            </a>
                          </TableCell>
                        ))}
                      </div>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </main>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="items-center mx-auto my-auto justify-center align-middle flex mt-40 ">
          <SignIn afterSignInUrl={"/puremath"}
            appearance={{ elements: { footer: "hidden", internal: "hidden" } }}
          />{" "}
        </div>
      </SignedOut>
    </>
  );
};

export default Component;
