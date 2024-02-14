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

interface Lecture {
  name: string;
  link: string;
}

interface Session {
  session: string;
  lectures: Lecture[];
}

interface Props {
  sessions: Session[];
}

const Component: React.FC<Props> = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only"></span>
          </Link>
          <Link className=" text-gray-500 dark:text-gray-400" href="/puremath">
            Pure Math
          </Link>
          <Link className="font-bold " href="/appliedmath">
            Applied Math
          </Link>
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
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
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
                  <div className="flex" key={session.session}>
                    <TableCell className="font-medium">
                      {session.session}
                    </TableCell>
                    {session.lectures.map((lecture) => (
                      <TableCell className="ml-[10rem] w-16 gap-10">
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
  );
};
export default Component;

function Package2Icon(props: React.ComponentProps<"svg">) {
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
