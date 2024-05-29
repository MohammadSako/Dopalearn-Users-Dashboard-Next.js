"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";

const formSchema = z.object({
  feedback: z.string().min(5, {
    message: "feedback must not be less then 100 words.",
  }),
  email: z.string().min(8, {
    message: "email must be at least 8 characters.",
  }),
  tellusmore: z.string().min(8, {
    message: "email must be at least 8 characters.",
  }),
  screenshot: z.string().min(8, {
    message: "email must be at least 8 characters.",
  }),
});

function Feedback() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: "",
      email: "",
      tellusmore: "",
      screenshot: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="container p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between ">
          <p className="text-2xl font-bold mt-4">Share your feedback</p>
        </div>

        <div className="flex flex-row">
          <div className="lg:w-[500px] w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">
                        Feedback summary *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="0/100"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your email</FormLabel>
                      <FormDescription>
                        Please leave your email in case we need ro respond.
                        Information shared will only be used to respond to your
                        report.
                      </FormDescription>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tellusmore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Tell us more </FormLabel>
                      <FormDescription>
                        Please provide as many details as possible.
                      </FormDescription>
                      <FormControl>
                        <Textarea
                          placeholder="0/1000"
                          className="resize-none min-h-[140px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="screenshot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">
                        Attach a screenshot
                      </FormLabel>
                      <FormDescription>
                        You can upload a screenshots related to your feedback.
                        Supported file types: JPEG, PNG, WEBP, GIF, TIFF and
                        HEIC
                      </FormDescription>
                      <Input type="file" />
                    </FormItem>
                  )}
                />
                <Button
                  disabled
                  type="submit"
                  className="bg-dopalearnblue w-40"
                >
                  {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
