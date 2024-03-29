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
  Protect,
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
import Navbar from "@/components/component/Navabr";
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
      <Protect
        role="org:admin"
        fallback={
          <>
            <h1 className="text-7xl text-center my-auto font-bold mx-auto">
              Sorry you're not allowed here
            </h1>{" "}
            <h2 className="text-7xl text-center font-bold my-auto mx-auto">
              Contact Omar Osama <br/>
              <Link
              href="/"
              className="font-bold my-auto items-center p text-4xl mx-auto text-center text-gray-400 hover:text-white"
            >
             Home
            </Link>
            </h2>{" "}
            
          </>
        }
      >
        <SignedIn>
          <div className="flex flex-col min-h-screen">
            <header className="flex items-center h-16 px-4 border-b shrink-0">
              <Navbar/>
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
                                <a
                                  href={lecture.link}
                                  className="w-full text-center"
                                >
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
              afterSignInUrl={"/appliedmath"}
              appearance={{
                elements: { footer: "hidden", internal: "hidden" },
              }}
            />{" "}
          </div>
        </SignedOut>
      </Protect>
    </>
  );
};

export default Component;
