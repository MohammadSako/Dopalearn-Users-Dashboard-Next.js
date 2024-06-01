import SignOut from "../ui/sign-out";
import NavLinks from "../ui/nav-links";
import UploadButton from "../ui/upload-button";
import { Separator } from "../ui/separator";

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 md:px-2 ">
      <UploadButton />
      <Separator />
      <div className="m-2 flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0">
        <NavLinks />
        <SignOut />
      </div>
    </div>
  );
}
