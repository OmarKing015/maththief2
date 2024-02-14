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
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <h2 className="font-bold font-xl">Math Thief</h2>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <Select className="w-full" placeholder="Course" />
              </div>
              <div className="relative">
                <Select className="w-full" placeholder="Instructor" />
              </div>
              <div className="relative">
                <Select className="w-full" placeholder="Date" />
              </div>
            </div>
          </form>
        </div>
      </header>
      <h1 className="mx-auto my-16 font-extrabold text-7xl text-center">
        Welcome to the Math Thief where we steal Math Sessions 😘😍
      </h1>
<div className="text-center text-4xl gap-16 flex mx-auto">
  <Link href="/puremath" className="font-bold text-gray-400 hover:text-white">Pure Math</Link>
  <Link href="/appliedmath" className="font-bold text-gray-400 hover:text-white">Applied Math</Link>
</div>

      
    </div>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
