"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { useCartStore } from "@/store/cart-store";
// import Image from "next/image";
// import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { checkoutAction } from "./checkout-action";
import { useState } from "react";

const cartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  quantity: z.number(),
});
export const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long." }),
  address: z
    .string()
    .min(5, { message: "Street address must be at least 5 characters." }),
  apartment: z.string().optional(),
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\+?[0-9\s\-]{10,15}$/, {
      message: "Phone number format is invalid.",
    }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  items: z.array(cartItemSchema).nonempty("Cart cannot be empty."),
});
export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const { items, getTotalPrice } = useCartStore();
  const subTotal = getTotalPrice();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      apartment: "",
      city: "",
      phone: "",
      email: "",
      items: items,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.  console.log("Submitting form...");
    console.log("shadcn form values", values);
    console.log("Submitting form...");
    const formData = new FormData();

    // Append all fields
    formData.append("fullName", values.fullName);
    formData.append("address", values.address);
    if (values.apartment) formData.append("apartment", values.apartment);
    formData.append("city", values.city);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("items", JSON.stringify(values.items));
    await checkoutAction(formData);
    setLoading(false);
  }
  if (items.length === 0 || subTotal === 0) {
    return <div className="">No Item is found in your cart</div>;
  }
  return (
    <Form {...form}>
      <form
        action={checkoutAction}
        onSubmit={form.handleSubmit(onSubmit)}
        className="  gap-20 pt-20 px-20 "
      >
        <div className="w-full flex flex-col gap-16">
          <h1 className="text-2xl font-bold text-center ">
            Billing <span className="text-brandBg">Details</span>
          </h1>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Abdi Sileshi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="General Tadesse Biru Street"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apartment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apartment, floor, etc.</FormLabel>
                  <FormControl>
                    <Input placeholder="Ground" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Town/City</FormLabel>
                  <FormControl>
                    <Input placeholder="Adama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+251988734632" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="abdisileshi123@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <Button className="bg-gray-200 text-black py-2 mt-4 cursor-pointer hover:text-white">
              Back
            </Button>
            <Button
              type="submit"
              className="bg-brandBg  py-2 mt-4 cursor-pointer disabled:bg-blue-300 "
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to payment"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
