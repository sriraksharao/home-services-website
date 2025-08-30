import { Card } from "@/components/ui/card";
import { Search, UserCheck, Calendar, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Services",
      description: "Search for the service you need in your area. Browse verified professionals with reviews and ratings.",
      step: "01"
    },
    {
      icon: UserCheck,
      title: "Choose Provider",
      description: "Compare profiles, read reviews, and select the perfect professional for your project.",
      step: "02"
    },
    {
      icon: Calendar,
      title: "Book & Pay",
      description: "Schedule your appointment at a convenient time and pay securely through our platform.",
      step: "03"
    },
    {
      icon: Star,
      title: "Get It Done",
      description: "Your professional arrives on time and completes the job. Rate your experience when finished.",
      step: "04"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your home services done is simple with our streamlined process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="service-card text-center h-full">
                <div className="p-8">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-2xl bg-primary/10">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;