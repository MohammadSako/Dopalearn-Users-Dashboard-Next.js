import { Metadata } from "next";
import Link from "next/link";

import { SignUpForm } from "@/components/form/signupform";
import GoogleAccount from "@/components/ui/google";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create an account",
};

export default function SignUp() {
  return (
    <>
      <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:px-0 my-5">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <SignUpForm />
            <GoogleAccount />
            <div className="text-center">
              <p>
                Already on Dopalearn?{" "}
                <Link href="/" className="text-dopalearnblue">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
