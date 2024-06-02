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
      <button className="flex w-full grow md:mr-4 items-center justify-center gap-2 rounded-md text-lg font-medium hover:bg-red-100 hover:text-dopalearnred md:flex-none md:justify-start md:p-2 md:px-4">
        <GoSignOut className="block md:hidden mt-4" color="red"/>
        <Link href="/">
          <div className="hidden md:block">Sign Out</div>
        </Link>
      </button>
    </form>
  );
};

export default SignOut;
