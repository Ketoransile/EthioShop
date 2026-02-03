import { MdAddCall, MdMail } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 pt-10 pb-20">

      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">Contact Us</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Contact Info Sidebar */}
        <Card className="lg:col-span-1 h-fit border-border/50 shadow-sm">
          <CardContent className="flex flex-col gap-8 p-8">
            {/* Call Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MdAddCall size={24} />
                </div>
                <h3 className="font-bold text-lg">Call To Us</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground pl-12">
                <p>We are available 24/7, 7 days a week.</p>
                <p className="font-medium text-foreground">Phone: +251-988-734-632</p>
              </div>
            </div>

            <Separator />

            {/* Email Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MdMail size={24} />
                </div>
                <h3 className="font-bold text-lg">Write To Us</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground pl-12">
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p className="font-medium text-foreground">Emails: support@ethioshop.com</p>
                <p className="font-medium text-foreground">Emails: abdisileshi123@gmail.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="lg:col-span-2 border-border/50 shadow-sm">
          <CardContent className="p-8">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Your Phone" className="bg-muted/30" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[200px] bg-muted/30 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <Button size="lg" className="px-8 font-semibold">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
