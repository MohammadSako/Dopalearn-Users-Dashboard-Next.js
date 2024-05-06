import React from "react";
import Link from "next/link";
import { SignUpForm } from "@/components/form/signupform";

function SignUp() {
  return (
    <div className="rounded-lg border-2 shadow-lg p-5 mt-10 w-96">
      <h2 className="font-medium text-lg">Create your Dopalearn account</h2>

      <div className="mt-5">
        <SignUpForm />
        <div>
          <p className="mt-5 text-sm">
            Have an account?
            <Link href="/">
              <span className="text-dopalearnblue"> Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
