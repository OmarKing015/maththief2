/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OTLInAObQgD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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

export default function Component() {
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
            <div className="grid grid-cols-3 gap-4">
             
            </div>
          </form>
        </div>
      </header>
      <h1 className="mx-10 font-extrabold text-5xl my-10 ">
        Welcome to the Math Thief where we steal Math Sessions 😘😍
      </h1>
<div className="text-center text-4xl gap-16 flex mx-auto">
  <Link href="/puremath" className="font-bold text-gray-400 hover:text-white">Pure Math</Link>
  <Link href="/appliedmath" className="font-bold text-gray-400 hover:text-white">Applied Math</Link>
</div>

      
    </div>
  );
}

