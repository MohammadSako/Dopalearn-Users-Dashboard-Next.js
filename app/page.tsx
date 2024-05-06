import Link from "next/link";
import Login from "./login/page";
import SignUp from "./signup/page";
import UploadPage from "../components/uploadPage/uploadPage";
import Logo from "@/components/ui/logo";
import Privacy from "@/components/ui/Privacy";

export default function Home() {
  return (
    <main className="container flex flex-col items-center my-20 ">
      <Logo />
      <Login />
      <div>
        <p className="my-8 text-gray-500">
          <Link href="#dopalearn">
            <span>© Dopalearn</span> ·
          </Link>

          <Link href="#contact">
            <span> Contact</span> ·
          </Link>
          <Link href="#Privacy">
            <span> Privacy & terms</span>{" "}
          </Link>
        </p>
      </div>
    </main>
  );
}
