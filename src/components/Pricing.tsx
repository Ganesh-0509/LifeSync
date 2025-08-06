import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Tier",
      description: "Perfect for getting started with health tracking",
      price: "₹0",
      period: "forever",
      icon: Star,
      color: "text-muted-foreground",
      bgColor: "bg-muted/10",
      buttonVariant: "outline" as const,
      buttonText: "Get Started",
      features: [
        "Basic health tracking",
        "Daily step counter",
        "Weekly reports",
        "Basic insurance info",
        "Community access",
        "Mobile app access"
      ]
    },
    {
      name: "Premium",
      description: "Full coverage with amazing rewards and benefits",
      price: "₹99",
      period: "per month",
      icon: Crown,
      color: "text-primary",
      bgColor: "bg-primary/10",
      buttonVariant: "hero" as const,
      buttonText: "Start Premium",
      popular: true,
      features: [
        "Everything in Free",
        "Full health coverage",
        "Micro-insurance benefits",
        "Gamified rewards system",
        "Premium app features",
        "24/7 customer support",
        "Advanced analytics",
        "Wearable integrations",
        "Personalized health plans",
        "Priority claim processing"
      ]
    },
    {
      name: "Enterprise",
      description: "Custom solutions for organizations and teams",
      price: "Custom",
      period: "contact us",
      icon: Zap,
      color: "text-accent",
      bgColor: "bg-accent/10",
      buttonVariant: "accent" as const,
      buttonText: "Contact Sales",
      features: [
        "Everything in Premium",
        "Team management",
        "Bulk pricing discounts",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced reporting",
        "API access",
        "White-label options",
        "Custom wellness programs",
        "Enterprise-grade security"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Crown className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose the perfect plan
            <span className="bg-gradient-primary bg-clip-text text-transparent"> for your health journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as you go. All plans include our core health tracking features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-fade-in ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${plan.bgColor} rounded-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className={`w-8 h-8 ${plan.color}`} />
                </div>

                {/* Plan Name */}
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>

                {/* Price */}
                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full group"
                  size="lg"
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {/* Money Back Guarantee */}
          <Card className="border-0 shadow-soft bg-gradient-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-2">30-Day Money Back Guarantee</h3>
              <p className="text-muted-foreground">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </CardContent>
          </Card>

          {/* Flexible Billing */}
          <Card className="border-0 shadow-soft bg-gradient-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Billing</h3>
              <p className="text-muted-foreground">
                Cancel anytime, upgrade or downgrade your plan, and pay monthly or annually.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h4 className="font-semibold">Can I switch plans anytime?</h4>
              <p className="text-muted-foreground text-sm">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Is there a setup fee?</h4>
              <p className="text-muted-foreground text-sm">No setup fees ever. What you see is what you pay, with no hidden costs.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">What payment methods do you accept?</h4>
              <p className="text-muted-foreground text-sm">We accept all major credit cards, debit cards, UPI, and net banking.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Do you offer discounts for annual plans?</h4>
              <p className="text-muted-foreground text-sm">Yes! Save up to 20% when you choose annual billing on any premium plan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;