"use client"

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
  password: z.string().min(9).max(64),
  confirmPassword: z.string(),
});

export const NewPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Create password update action
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full h-full mt-5 justify-between"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-forest font-medium text-lg">
                Password
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-forest font-medium text-lg">
                Confirm Password
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
            <>Set New Password</>
          )}
        </Button>
      </form>
    </Form>
  );
};
