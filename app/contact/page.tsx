import { MdAddCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="flex max-lg:flex-col pt-20 gap-12">
      <div className="lg:w-1/4 flex lg:flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center justify-items-start">
            <MdAddCall size={24} />
            <p className="font-bold text-md">Call To Us</p>
          </div>
          <p className="text-sm ">We are available 24/7, 7 days a week.</p>
          <p>Phone: +251988734632</p>
          <div className="border-b-2 border-slate-500"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center justify-items-start">
            <MdMail size={24} />
            <p className="font-bold text-md">Write To Us</p>
          </div>
          <p className="text-sm ">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm ">Emails: abdisileshi123@gmail.com</p>
        </div>
      </div>
      <div className="relative lg:w-3/4 flex flex-col gap-6 max-lg:text-xs">
        <div className="flex max-lg:flex-col gap-2 lg:gap-12 items-center justify-between">
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name*" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email*" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input type="text" id="phone" placeholder="Your Phone*" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            className="h-40"
          />
        </div>
        <Button className="self-end cursor-pointer bg-brandBg">
          Send Message
        </Button>
      </div>
    </div>
  );
}
