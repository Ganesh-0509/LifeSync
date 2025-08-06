import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Smartphone, Gift, ArrowRight, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in just 2 minutes. No complex forms or lengthy processes required.",
      features: ["Quick registration", "Email verification", "Profile setup"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      step: 2,
      icon: Smartphone,
      title: "Sync Your Health",
      description: "Connect your favorite wearables and health apps for seamless tracking and monitoring.",
      features: ["Fitbit integration", "Google Fit sync", "Apple Health support"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      step: 3,
      icon: Gift,
      title: "Stay Active, Earn Rewards",
      description: "Gamify your life, achieve health goals, and unlock amazing benefits and coverage.",
      features: ["Daily challenges", "Milestone rewards", "Premium discounts"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How LifeSync
            <span className="bg-gradient-primary bg-clip-text text-transparent"> works for you</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with LifeSync in three simple steps and transform your health journey into a rewarding experience.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 transform -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardContent className="relative p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 ${step.bgColor} ${step.color} rounded-full flex items-center justify-center text-sm font-bold border-4 border-white shadow-medium`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${step.bgColor} rounded-3xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 ${step.color}`} />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center shadow-medium`}>
                        <ArrowRight className={`w-4 h-4 ${step.color}`} />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start your health journey?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already transformed their lives with LifeSync. Your healthier, more rewarding future starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;