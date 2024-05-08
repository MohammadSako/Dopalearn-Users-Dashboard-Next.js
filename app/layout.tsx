import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { NavBar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

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
          <div className="flex justify-center ">
            <NavBar />
          </div>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          {/* <Footer /> */}
          {/* </Providers> */}
        </Suspense>
      </body>
    </html>
  );
}
