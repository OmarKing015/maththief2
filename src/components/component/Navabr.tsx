import { useState } from "react"
import { Protect, useUser } from "@clerk/nextjs";

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState("/")
    return (
        <nav className="flex items-center justify-between w-full">
            <Link
                className="flex items-center gap-2 text-lg font-semibold"
                href="/"
            >
                <span>Home</span>
            </Link>
            <div className="flex items-center gap-4">
                <Protect role="org:admin" >
                <Link
                    className={`text-gray-500 dark:text-gray-400 ${currentPage === "/puremath" && "font-bold text-black dark:text-white"
                        }`}
                    href="/puremath"
                    onChange={setCurrentPage("/puremath")}
                >
                    Pure Math
                </Link>
                <Link className={`text-gray-500 dark:text-gray-400 ${currentPage === "/appliedmath" && "font-bold text-black dark:text-white"
                    }`}
                    onChange={setCurrentPage("/appliedmath")}
                     href="/appliedmath">
                    Applied Math
                </Link>
                </Protect>
                <Link
                     className={`text-gray-500 dark:text-gray-400 ${
                        currentPage === "/chemistry" && "font-bold text-black dark:text-white"
                      }`}
                   
                    onChange={setCurrentPage("/chemistry")}
                    href="/chemistry"
                >
                    Chemistry
                </Link>
                <div className="text-red-500">
                    <SignOutButton signOutCallback={() => signOut()} />
                </div>
            </div>
        </nav>
    )
}