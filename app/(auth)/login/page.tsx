"use client";
import { FcGoogle } from "react-icons/fc";
import sideImage from "../../../assets/sideImage.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      console.log("Auth base URL:", process.env.NEXT_PUBLIC_BETTER_AUTH_URL);

      const { error } = await authClient.signIn.email(
        {
          email: values.email,

          password: values.password,

          callbackURL: "/",
          /**
           * remember the user session after the browser is closed.
          @default true
           */
          rememberMe: false,
        },
        {
          //callbacks
        }
      );
      if (error) {
        toast.error(error.message || "Sign in Failed. Please try again.");
        return;
      }
      toast.success("Signed in successfully. Redirecting....");
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex pt-12  gap-32 items-center"
      >
        <Image
          src={sideImage}
          width={500}
          height={500}
          className="max-lg:hidden"
          alt="sideImage"
        />
        <div className="w-full px-6 flex flex-col gap-6 lg:w-1/3 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold max-lg:text-center">
              Login to Ethio<span className="text-blue-600">Shop</span>
            </h1>
            <p className="text-sm text-gray-400 max-lg:text-center">
              Enter your details below
            </p>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2">
            {/* <button className="bg-red-500 py-2  text-white rounded-md">
            Login
            </button> */}

            <Button
              type="submit"
              className="bg-brandBg cursor-pointer disabled:bg-blue-400"
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Login"}
            </Button>
            <Button variant="outline">
              <div className="flex items-center gap-2 justify-center">
                <FcGoogle size={24} />
                <p>Sign In with Google</p>
              </div>
            </Button>
          </div>
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="sign-up" className="border-b-2 border-b-gray-600">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
