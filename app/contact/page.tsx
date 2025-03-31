import { MdAddCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex pt-20 gap-12">
      <div className="w-1/4 flex flex-col gap-8">
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
      <div className="relative w-3/4 flex flex-col gap-6">
        <div className="flex gap-12 items-center justify-between">
          <Input type="text" placeholder="Your Name*" />
          <Input type="email" placeholder="Your Email*" />
          <Input type="text" placeholder="Your Phone*" />
        </div>
        <Textarea placeholder="Type your message here." className="h-40" />
        <Button variant="destructive" className="self-end cursor-pointer">
          Send Message
        </Button>
      </div>
    </div>
  );
}
