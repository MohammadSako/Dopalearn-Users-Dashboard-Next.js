import Link from "next/link";
import { GoSignOut } from "react-icons/go";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 md:px-2 ">
      <Link
        className="mb-2 flex justify-center h-16 items-end mt-2 bg-blue-600 p-4 md:h-16"
        href="/dashboard/uploadpage"
      >
        <div className="w-32 text-white md:w-60 text-2xl text-center">
          Upload
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form
        // action={async () => {
        //   "use server";
        //   await signOut();
        // }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-lg font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <GoSignOut className="w-6" />
            <Link href="/">
              <div className="hidden md:block">Sign Out</div>
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
