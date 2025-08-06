import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-dark">World's First Gamified Health Insurance</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Gamify Your Health.
                </span>
                <br />
                <span className="text-foreground">
                  Insure Your Life.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Join LifeSync — the revolutionary micro-insurance app that rewards your healthy habits and transforms wellness into an engaging journey.
              </p>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 h-12 bg-white/90 backdrop-blur-md border-white/20 shadow-soft"
                />
                <Button variant="hero" size="lg" className="h-12">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Free to start • No credit card required • 30-day trial
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-white" />
                </div>
                <span>1000+ happy users</span>
              </div>
              <div className="flex items-center gap-1">
                <span>⭐⭐⭐⭐⭐</span>
                <span>4.9/5 rating</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button variant="glass" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image & App Mockup */}
          <div className="relative animate-slide-in-right">
            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="People exercising and staying healthy with LifeSync"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating App Mockup */}
            <div className="absolute -bottom-8 -left-8 w-48 md:w-56 animate-float">
              <div className="bg-white p-4 rounded-2xl shadow-strong">
                <img
                  src={appMockup}
                  alt="LifeSync mobile app interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute top-8 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-medium animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹2,500</div>
                <div className="text-sm text-muted-foreground">Saved this month</div>
              </div>
            </div>

            <div className="absolute bottom-20 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-medium animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">12,847</div>
                <div className="text-sm text-muted-foreground">Steps today</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;