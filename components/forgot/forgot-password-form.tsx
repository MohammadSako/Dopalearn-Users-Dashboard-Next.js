"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { RxReload } from "react-icons/rx";

const formSchema = z.object({
  email: z.string().email(),
});

export const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-10 w-full h-full mt-5 justify-between"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-forest font-medium text-lg">
                Email
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          // size="xl"
          className="w-full text-xl "
          type="submit"
          disabled={form.formState.isSubmitting || form.formState.isLoading}
        >
          {form.formState.isSubmitting || form.formState.isLoading ? (
            <RxReload className="animate-spin" />
          ) : (
            <>Reset Password</>
          )}
        </Button>
      </form>
    </Form>
  );
};
