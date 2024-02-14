import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Math Thief",
  description: "",
};

function CreateLayout({ children }: Props) { // Adjusted the props destructuring here
 return (
   <>{children}</>
 );
}

export { CreateLayout }; // Exporting CreateLayout 
