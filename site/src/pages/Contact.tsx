import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <main className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Email Address" type="email" />
                </div>
                <div>
                  <Input placeholder="Phone Number" type="tel" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">support@homeservices.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">1-800-HOME-FIX</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Service Street<br />
                      Suite 456<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8AM - 8PM<br />
                      Saturday: 9AM - 6PM<br />
                      Sunday: 10AM - 4PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;