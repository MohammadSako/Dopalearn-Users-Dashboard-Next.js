import { ForgotPasswordForm } from "@/components/forgot";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Forgot your password",
  description: " Forgot your password",
};

export default function Forgot() {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:px-0 my-10">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Forgot your password
            </h1>
            <h2 className="text-gray-600 text-sm font-sans">
              Not to worry, we got you! Let's get you a new password. Please
              enter your email address or your Username.
            </h2>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
