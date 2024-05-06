import { LoginForm } from "@/components/form/loginform";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="rounded-lg border-2 shadow-lg p-5 mt-10 w-96">
      <h2 className="font-medium text-lg">Sign in to your Account</h2>

      <div className="mt-5">
        <LoginForm />
        <div>
          <p className="mt-5 text-sm">
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="text-dopalearnblue">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
