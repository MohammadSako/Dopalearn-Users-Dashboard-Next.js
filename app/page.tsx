// import Link from "next/link";
import Login from "./login/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dopalearn",
  description:
    "TURN SCREEN TIME INTO LEARNING TIME.",
};


export default function Home() {
  return (
    <main className="container flex flex-col items-center">
      <Login />
      {/* <div>
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
      </div> */}
    </main>
  );
}
