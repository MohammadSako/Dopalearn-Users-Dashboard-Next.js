import Link from "next/link";
import Login from "./login/page";
import SignUp from "./signup/page";
import UploadPage from "../components/uploadPage/uploadPage";
import Logo from "@/components/ui/logo";
import Privacy from "@/components/ui/Privacy";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center my-8">
      <Logo />
      <Login />
      <Privacy />
    </main>
  );
}
