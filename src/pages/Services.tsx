import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const { category } = useParams();
  
  const serviceProviders = [
    {
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
    },
    {
      name: "Mike Rodriguez", 
      service: "Plumbing",
      rating: 4.8,
      reviews: 89,
      experience: "8+ years",
      location: "Midtown",
      price: "From $120",
      verified: true,
      specialties: ["Emergency Service", "Pipe Repair", "Installation"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      service: "Electrical",
      rating: 5.0,
      reviews: 156,
      experience: "6+ years", 
      location: "Uptown",
      price: "From $95",
      verified: true,
      specialties: ["Lighting", "Smart Home", "Safety Inspection"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const categoryTitle = category?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'All Services';

  return (
    <div className="min-h-screen">
      <main className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryTitle} Professionals</h1>
            <p className="text-xl text-muted-foreground">Find verified professionals in your area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProviders.map((provider, index) => (
              <Card key={index} className="provider-card">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <img 
                        src={provider.avatar}
                        alt={provider.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {provider.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-secondary text-secondary-foreground rounded-full p-1">
                          <Shield className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{provider.name}</h3>
                        <div className="text-lg font-bold text-primary">{provider.price}</div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{provider.service}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{provider.rating}</span>
                          <span>({provider.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{provider.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{provider.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/provider/${provider.name.toLowerCase().replace(' ', '-')}`}>
                        View Profile
                      </Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link to={`/booking/${provider.name.toLowerCase().replace(' ', '-')}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;