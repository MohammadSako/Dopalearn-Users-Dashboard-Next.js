import React from "react";
import { GoSignOut } from "react-icons/go";
import Link from "next/link";

const SignOut = () => {
  return (
    <form
    // action={async () => {
    //   "use server";
    //   await signOut();
    // }}
    >
      <button className="flex w-full grow items-center justify-center gap-2 rounded-md p-2 text-lg font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <GoSignOut className="mr-4" />
        <Link href="/">
          <div className="hidden md:block">Sign Out</div>
        </Link>
      </button>
    </form>
  );
};

export default SignOut;
