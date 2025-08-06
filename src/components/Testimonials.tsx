import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Tech Corp",
      image: testimonial1,
      rating: 5,
      quote: "LifeSync made insurance fun and engaging! I never thought I'd enjoy tracking my daily walks and workouts. The rewards system keeps me motivated every day.",
      highlight: "Increased my daily steps by 200%"
    },
    {
      name: "Rajesh Kumar",
      role: "Marketing Manager",
      company: "StartupXYZ",
      image: testimonial2,
      rating: 5,
      quote: "The micro-insurance concept is brilliant. I'm paying less for better coverage because I stay active. LifeSync has completely changed how I think about health and insurance.",
      highlight: "Saved ₹3,000 on insurance this year"
    },
    {
      name: "Dr. Anjali Patel",
      role: "Physician",
      company: "Metro Hospital",
      image: testimonial1,
      rating: 5,
      quote: "As a healthcare professional, I'm impressed by LifeSync's approach to preventive care. It's exactly what our industry needs to promote healthier lifestyles.",
      highlight: "Recommends to all patients"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What our users
            <span className="bg-gradient-primary bg-clip-text text-transparent"> love about LifeSync</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who have transformed their health and saved money with LifeSync.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-gradient-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-base leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 rounded-full mb-6">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-sm font-medium text-success">{testimonial.highlight}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-soft">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">99.5%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">₹50L+</div>
                <div className="text-sm text-muted-foreground">Claims Paid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;