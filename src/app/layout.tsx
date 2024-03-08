
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { dark } from "@clerk/themes";
import { ClerkProvider, useClerk } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Clerk } from "@clerk/nextjs/server";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Thief",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {children} <SpeedInsights /> <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
