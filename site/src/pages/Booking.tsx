import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Shield, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const { provider } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const providerData = {
    name: "Sarah Johnson",
    service: "House Cleaning",
    rating: 4.9,
    reviews: 127,
    experience: "5+ years",
    location: "Downtown",
    price: "From $80",
    verified: true,
    specialties: ["Deep Cleaning", "Eco-Friendly", "Move-in/out"],
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
  };

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div className="min-h-screen">
      <main className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Service</h1>
            <p className="text-xl text-muted-foreground">Schedule your appointment with {providerData.name}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Provider Info */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src={providerData.avatar}
                      alt={providerData.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {providerData.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-secondary text-secondary-foreground rounded-full p-1">
                        <Shield className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{providerData.name}</h3>
                    <div className="text-sm text-muted-foreground mb-2">{providerData.service}</div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{providerData.rating}</span>
                      <span className="text-muted-foreground">({providerData.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{providerData.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{providerData.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {providerData.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-2xl font-bold text-primary">{providerData.price}</div>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                
                <form className="space-y-8">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Email" type="email" />
                      <Input placeholder="Phone" type="tel" />
                    </div>
                    <Input placeholder="Service Address" />
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Select Date & Time</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-4">Available Times</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time, index) => (
                            <Button key={index} variant="outline" className="justify-center">
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Service Details</h3>
                    <Textarea 
                      placeholder="Describe your cleaning needs, home size, specific requirements, etc."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full h-12 text-lg">
                    Book Service - $80
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;