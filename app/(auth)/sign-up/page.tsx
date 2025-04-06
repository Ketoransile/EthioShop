"use client";
import Image from "next/image";
// import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import sideImage from "../../../assets/sideImage.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { authClient } from "@/lib/auth-client"; //import the auth client
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import User from "@/models/User";
import { connectDB } from "@/lib/dbNative";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(50),
  password: z.string().min(8),
});
export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const { data, error } = await authClient.signUp.email(
        {
          email: values.email,
          password: values.password,
          name: values.username,
          callbackURL: "/",
        },
        {
          onRequest: () => {
            toast.success("Processing your signup...");
          },
          onSuccess: () => {
            router.push("/");
            toast.success("Account created successfully! Redirecting...");
          },
          onError: (ctx) => {
            console.log("Full error context:", ctx);

            const errorMessage =
              ctx.error?.message ||
              ctx.error?.toString() ||
              "Signup failed. Please try again.";

            toast.error(errorMessage);
          },
        }
      );

      if (error) {
        throw new Error(error.message || "Signup failed");
      }
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred");
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };
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
          className=""
          alt="sideImage"
        />
        <div className="flex flex-col gap-6 w-1/4 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm">Enter your details below</p>
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
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
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2">
            {/* <button className="bg-red-500 py-2  text-white rounded-md">
            Create Account
          </button> */}
            <Button
              type="submit"
              className="bg-brandBg cursor-pointer disabled:bg-blue-400"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "Create Account"}
            </Button>
            <Button variant="outline">
              <div className="flex items-center gap-2 justify-center">
                <FcGoogle size={24} />
                <p>Sign Up with Google</p>
              </div>
            </Button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link href="login" className="border-b-2 border-b-gray-600">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
