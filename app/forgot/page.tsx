import { ForgotPasswordForm } from "@/components/forgot";
import Image from "next/image";

export default function Forgot() {
  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center bg-[#FFFCFC]">
      <div className="flex flex-col max-w-[25vw] h-auto bg-white rounded-md p-8 items-center shadow-lg">
        <div className="flex flex-col w-full h-full gap-3 text-start items-start">
          <Image
            src="/dopalearn.jpg"
            alt="dopalearn logo"
            width={100}
            height={50}
            className=""
          />
          <h1 className="text-4xl font-medium font-display text-forest">
            Forgot your password
          </h1>
          <h2 className="text-gray-600 text-sm font-sans">
            Not to worry, we got you! Let's get you a new password. Please enter
            your email address or your Username.
          </h2>
          <ForgotPasswordForm />
        </div>
      </div>
    </section>
  );
}
