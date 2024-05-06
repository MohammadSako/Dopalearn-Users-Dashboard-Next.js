import Link from "next/link";

export default function Privacy() {
  return (
    <div className="container flex min-h-screen flex-col items-center my-4">
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
  );
}
