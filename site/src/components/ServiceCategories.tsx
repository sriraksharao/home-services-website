import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Sparkles, 
  Zap, 
  Paintbrush, 
  Trees, 
  Car,
  Home,
  Hammer
} from "lucide-react";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import servicePlumbing from "@/assets/service-plumbing.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceHandyman from "@/assets/service-handyman.jpg";

const ServiceCategories = () => {
  const services = [
    {
      icon: Sparkles,
      title: "House Cleaning",
      description: "Professional deep cleaning and regular maintenance",
      image: serviceCleaning,
      color: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Repairs, installations, and emergency services",
      image: servicePlumbing,
      color: "text-cyan-600"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Wiring, lighting, and electrical installations",
      image: serviceElectrical,
      color: "text-yellow-600"
    },
    {
      icon: Hammer,
      title: "Handyman",
      description: "General repairs and home improvements",
      image: serviceHandyman,
      color: "text-orange-600"
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Interior and exterior painting services",
      image: serviceHandyman,
      color: "text-purple-600"
    },
    {
      icon: Trees,
      title: "Landscaping",
      description: "Garden maintenance and outdoor projects",
      image: serviceCleaning,
      color: "text-green-600"
    },
    {
      icon: Car,
      title: "Moving",
      description: "Packing, moving, and storage solutions",
      image: servicePlumbing,
      color: "text-red-600"
    },
    {
      icon: Home,
      title: "HVAC",
      description: "Heating, cooling, and ventilation services",
      image: serviceElectrical,
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popular Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our most requested home services and find the perfect professional for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
              <Card className="service-card group cursor-pointer">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-full bg-background/90 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="text-sm text-primary font-medium pt-2">
                  View Professionals →
                </div>
              </div>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;