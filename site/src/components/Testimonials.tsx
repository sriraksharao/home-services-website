import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Williams",
      location: "San Francisco, CA",
      service: "House Cleaning",
      rating: 5,
      comment: "Absolutely amazing service! The cleaner was punctual, professional, and left my house spotless. I've already booked them for next month.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      location: "New York, NY",
      service: "Plumbing Repair",
      rating: 5,
      comment: "Quick response time and excellent work. Fixed my kitchen sink issue in under an hour. Very fair pricing and will definitely use again.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      location: "Austin, TX",
      service: "Electrical Work",
      rating: 5,
      comment: "Professional and knowledgeable electrician. Installed new lighting throughout my home and explained everything clearly. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Johnson",
      location: "Seattle, WA", 
      service: "Handyman Services",
      rating: 5,
      comment: "Great experience from start to finish. The handyman was skilled, friendly, and completed all my home repairs perfectly. Worth every penny!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect home service providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="service-card">
              <div className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-lg mb-8 text-foreground">
                  "{testimonial.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;