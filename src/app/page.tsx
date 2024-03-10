"use client";

import Link from "next/link";
import { Select } from "@/components/ui/select";
import { dark } from "@clerk/themes";
import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  clerkClient,
  useOrganizationList,
  useSession,
} from "@clerk/nextjs";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Protect, useUser } from "@clerk/nextjs";
import {
  SignIn,
  SignOutButton,
  useAuth,
  useClerk,
  useSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useEffect } from "react";
import { OrganizationMembership } from "@clerk/clerk-sdk-node";
import { Organization } from "@clerk/clerk-sdk-node";
import { organizations } from "@clerk/nextjs/api";

export default function Component() {
  const { client } = useClerk();
  const { setActive, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const { user } = useUser();
  const userRole = user?.organizationMemberships[0].role;
  const { signOut } = useAuth();
  // useEffect(() => {
  //   signOut();
  // }, []);

  const { isLoaded, signIn } = useSignIn();
  const { session } = useSession(); //
  console.log();
  useEffect(() => {
    const slug = "org_2dMRi6JdXStJCjEgTmkuPiZErRN";

    return () => {
      clerkClient.organizations?.getOrganization({ slug });
    };
  }, [signIn]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center sm:gap-3 h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex sm:gap-40 gap-6 text-lg font-medium md:flex last:md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="/"
          >
            <span className="">The Dealer</span>
          </Link>
          <SignedIn>
            <span className="text-red-500 flex gap-16 absolute right-0 mr-8 ">
              {/* <OrganizationSwitcher /> */}
              <SignOutButton />
            </span>
          </SignedIn>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="grid grid-cols-3 gap-4"></div>
          </form>
        </div>
      </header>
      <h1 className="mx-10 font-extrabold text-center text-5xl my-10">
        Welcome to <strong> The Dealer </strong> where we steal all the Sessions. 😘😍
      </h1>
      <div className="text-center items-center text-4xl gap-16 flex mx-auto">
        {!isLoaded && (
          <div className="text-5xl mx-auto my-auto font-bold text-red-700">
            Loading...
          </div>
        )}
        <SignedOut>
          <SignIn
            appearance={{ elements: { footer: "hidden", internal: "hidden" } }}
          />
        </SignedOut>
        <SignedIn>
          <>
            <div className="mt-12 gap-10 flex flex-col">
              <h2 className="text-5xl font-bold text-center text-yellow-500 flex ">
                Choose a subject
              </h2>
              <Protect
                role="org:admin"
                fallback={
                  <Link
                    href="/chemistry"
                    className="font-bold text-gray-400 hover:text-white"
                  >
                    Chemistry
                  </Link>
                }
              >
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
                <Link
                  href="/chemistry"
                  className="font-bold text-gray-400 hover:text-white"
                >
                  Chemistry
                </Link>
              </Protect>
            </div>
          </>
        </SignedIn>
      </div>
    </div>
  );
}
