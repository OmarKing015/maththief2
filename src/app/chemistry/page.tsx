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
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center h-16 px-4 border-b shrink-0">
          <nav className="flex items-center justify-between w-full">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              href="/"
            >
              <span>Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link className="text-gray-500 dark:text-gray-400" href="/puremath">
                Pure Math
              </Link>
              <Link
                className="text-gray-500 dark:text-gray-400 "
                href="/appliedmath"
              >
                Applied Math
              </Link>
              <Link
                className=" font-bold "
                href="/chemistry"
              >
               Chemistry
              </Link>
              <div className="text-red-500">
                <SignOutButton signOutCallback={() => signOut()} />
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1 p-4">
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
                      className="flex flex-col text-center sm:flex-row gap-8 sm:gap-0"
                      key={session.session}
                    >
                      <TableCell className="font-medium text-center text-cyan-500">
                        {session.session}
                      </TableCell>
                      <div className="sm:w-full flex text-center flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between">
                        {session.lectures.map((lecture) => (
                          <TableCell key={lecture.name}>
                            <a href={lecture.link} className="w-full text-center">
                              {lecture.name}
                            </a>
                          </TableCell>
                        ))}
                      </div>
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
      <div className="items-center mx-auto my-auto justify-center align-middle flex mt-40">
        <SignIn
          afterSignInUrl={"/puremath"}
          appearance={{ elements: { footer: "hidden", internal: "hidden" } }}
        />{" "}
      </div>
    </SignedOut>
  </>
  );
};

export default Component;
