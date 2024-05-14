"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GoogleAccount from "../ui/google";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
});

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    router.push("dashboard");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-base leading-5 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                </FormControl>
                <FormDescription className="text-dopalearnblue">
                  <Link href="/forgot">Forgot password? </Link>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid">
            <Button type="submit" className="bg-dopalearnblue rounded-full">
              Sign in
            </Button>
          </div>
          <div>
            <p className="text-xs text-center text-muted-foreground">
              By clicking Continue to join or sign in, you agree to Dopalearn{" "}
              <Link
                href="/terms"
                className="text-dopalearnblue hover:text-primary"
              >
                User Agreement,
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-dopalearnblue hover:text-primary"
              >
                Privacy Policy,
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-dopalearnblue hover:text-primary"
              >
                and Cookie Policy.
              </Link>
            </p>
          </div>
          <GoogleAccount />
          <div>
            <Link href="/signup" className="grid">
              <Button type="submit" variant="outline" className="rounded-full">
                New to Dopalearn? Create an Account
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}
