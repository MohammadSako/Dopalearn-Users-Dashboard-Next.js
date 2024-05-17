import Link from "next/link";
import React from "react";

function UserAccount() {
  return (
    <div className=" h-32 p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-5">
        <div className="flex flex-row space-x-3 ">
          <Link href="#">
            <p className="text-xl font-bold">@user.account</p>
          </Link>
        </div>
        <div className="flex flex-row justify-between columns-3 ">
          <div>
            <p className="text-sm text-dopalearngray ">Following</p>
            <p className="text-md font-bold text-center">0</p>
          </div>
          <div>
            <p className="text-sm text-dopalearngray ">Followers</p>
            <p className="text-md font-bold text-center">0</p>
          </div>
          <div>
            <p className="text-sm text-dopalearngray ">Likes</p>
            <p className="text-md font-bold text-center">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
