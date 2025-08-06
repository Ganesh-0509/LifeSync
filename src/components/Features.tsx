import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, BarChart3, Brain, Heart, Trophy, Zap, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Health Goals + Rewards",
      description: "Set personalized health targets and earn rewards for achieving milestones. Turn your fitness journey into an exciting game.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Shield,
      title: "Micro-Insurance Plans",
      description: "Affordable coverage that grows with your healthy habits. Pay less when you stay active and maintain good health.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: BarChart3,
      title: "Real-Time Health Tracking",
      description: "Connect your wearables and apps for comprehensive health monitoring. Get insights that help you improve daily.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Brain,
      title: "Mental Health & Stress Checks",
      description: "Monitor your mental wellbeing with mood tracking, stress assessments, and personalized mindfulness recommendations.",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const stats = [
    { icon: Heart, value: "98%", label: "User Satisfaction" },
    { icon: Trophy, value: "50K+", label: "Goals Achieved" },
    { icon: Zap, value: "2.5x", label: "Faster Results" },
    { icon: Users, value: "10K+", label: "Active Users" }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> transform your health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how LifeSync combines cutting-edge technology with gamification to make health insurance fun, affordable, and rewarding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-soft animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by thousands of health-conscious individuals
            </h3>
            <p className="text-muted-foreground text-lg">
              Join our growing community and see the difference LifeSync makes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;