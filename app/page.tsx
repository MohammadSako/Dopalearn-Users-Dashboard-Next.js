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
    </main>
  );
}
