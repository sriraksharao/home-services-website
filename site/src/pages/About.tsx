import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Shield, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Professionals", value: "50,000+" },
    { icon: Star, label: "Jobs Completed", value: "1M+" },
    { icon: Shield, label: "Background Checks", value: "100%" },
    { icon: Clock, label: "Average Response", value: "< 2 hours" }
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About HomeServices</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're transforming the home services industry by connecting homeowners 
              with trusted, verified professionals who deliver exceptional results.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-2xl bg-primary/10">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To make home maintenance simple, reliable, and stress-free by connecting 
                homeowners with skilled professionals who take pride in their work.
              </p>
              <Button size="lg" asChild>
                <Link to="/">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;