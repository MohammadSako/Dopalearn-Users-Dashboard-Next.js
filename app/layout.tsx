import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dopalearn",
  description: "Dopalearn Videos Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          {/* <Providers session={session}> */}
            {/* <Navbar categories={categories} /> */}
            <Suspense fallback={<Loading />}>{children}</Suspense>
            {/* <Footer /> */}
          {/* </Providers> */}
        </Suspense>
      </body>
    </html>
  );
}
