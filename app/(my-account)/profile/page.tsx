"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { fetchUserData } from "./fetchUserData";

const formSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(3).max(50),
    currentPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function MyAccountPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        setIsLoading(true);
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const response = await fetch(`${baseUrl}/api/user/get`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        console.log("Response from profile  is", response);

        // if (!response.ok) {
        //   const status = response.status;
        //   console.error(`Failed to fetch user data. Status ${status}`);
        //   return {
        //     status,
        //     data: null,
        //     error: `Request failed with status ${status}`,
        //   };
        // }
        const data = await response.json();
        console.log("user data from profile page is", data);
        if (!data || data.data === null || data.status !== 200) {
          return;
        }
        const userData = data.data;
        // Update form values with fetched data
        form.reset({
          email: userData.email,
          username: userData.username,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserInfo();
  }, [form]); // Only run once on mount

  if (isLoading) {
    return (
      <div className="pt-20 text-md">Loading your info, please wait...</div>
    );
  }
  if (!isLoading && !form.getValues("email")) {
    return (
      <div className="pt-20 text-md text-red-500">
        User info not found.Please try again!!
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col gap-6 pt-20">
      <h1 className="text-brandBg font-bold text-xl">Edit Your Profile</h1>
      <Form {...form}>
        <form className="grid lg:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-sm font-semibold">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Username"
                    className="w-80"
                    disabled={isLoading}
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
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-sm font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email"
                    className="w-80"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-sm font-semibold">
                  Current Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Current Password"
                    className="w-80"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-sm font-semibold">
                  New Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="New Password"
                    className="w-80"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-sm font-semibold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-80"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 self-end">
            <Button
              type="button"
              className="bg-white text-black border border-gray-400 rounded-md"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-brandBg text-white px-4 py-2 rounded-md cursor-pointer"
              disabled={isLoading}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
