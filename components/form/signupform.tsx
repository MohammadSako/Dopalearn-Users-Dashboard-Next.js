"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  email: z.string().min(8, {
    message: "email must be at least 8 characters.",
  }),
  fullname: z.string().min(5, {
    message: "fullname must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters.",
  }),
  confirmpassword: z.string().min(8, {
    message: "password not identical!",
  }),
});

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      confirmpassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm your Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription className="px-8 text-center text-xs text-muted-foreground">
                By clicking Create account, you agree to our{" "}
                <Link
                  href="/terms"
                  className="text-dopalearnblue hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-dopalearnblue hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid">
          <Button type="submit" className="bg-dopalearnblue">
            Create account
          </Button>
        </div>
      </form>
    </Form>
  );
}
