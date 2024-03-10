import { useState } from "react"
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
  import Link from "next/link";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation'
export default function Navbar() {
    const pathname = usePathname()
    const [currentPage, setCurrentPage] = useState("/")
    const { signOut } = useClerk();
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
                    className={`text-gray-500 dark:text-gray-400 ${currentPage === "/puremath" === pathname && "font-bold text-black dark:text-white"
                        }`}
                    href="/puremath"
                    onClick={()=>setCurrentPage("/puremath")}
                >
                    Pure Math
                </Link>
                <Link className={`text-gray-500 dark:text-gray-400 ${currentPage === "/appliedmath" ===pathname && "font-bold text-black dark:text-white"
                    }`}
                    onClick={()=> setCurrentPage("/appliedmath")}
                     href="/appliedmath">
                    Applied Math
                </Link>
                </Protect>
                <Link
                     className={`text-gray-500 dark:text-gray-400 ${
                        currentPage === "/chemistry" === pathname && "font-bold text-black dark:text-white"
                      }`}
                   
                    onClick={()=>setCurrentPage("/chemistry")}
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