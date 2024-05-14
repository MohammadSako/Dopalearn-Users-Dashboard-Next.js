import { LoginForm } from "@/components/form/loginform";
import WelcomeScreen from "@/components/ui/welcome-screen";
import React from "react";

function Login() {
  return (
    <div className="flex flex-row">
      <div className="p-5">
        <h2 className="font-extralight text-5xl font-sans">
          Welcome to Dopalearn world
        </h2>

        <div className="mt-5 grid gap-2">
          <LoginForm />
        </div>
      </div>

      <div>
        <WelcomeScreen />
      </div>
    </div>
  );
}

export default Login;
