import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  const benefits = [
    "Environmental Compliance",
    "Energy Efficiency",
    "Cost Optimization",
    "Sustainable Solutions"
  ];

  return (
    <section className="bg-gradient-organic py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-work-sans">
                <Leaf className="h-4 w-4 mr-2" />
                Sustainable Air Quality Solutions
              </div>
              
              <h1 className="font-raleway font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
                Clean Air Through
                <span className="text-accent block">
                  Smart Technology
                </span>
              </h1>
              
              <p className="font-work-sans text-lg text-muted-foreground leading-relaxed max-w-xl">
                Leading provider of innovative air pollution control equipment. 
                We specialize in design, optimization, and compliance solutions 
                that protect the environment while maximizing operational efficiency.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-work-sans text-foreground text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="organic" 
                size="lg" 
                className="font-work-sans group"
              >
                Get Started Today
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-work-sans border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="font-raleway font-bold text-2xl text-accent">500+</div>
                <div className="font-work-sans text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-raleway font-bold text-2xl text-accent">25+</div>
                <div className="font-work-sans text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-raleway font-bold text-2xl text-accent">99%</div>
                <div className="font-work-sans text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Air pollution control equipment and environmental solutions"
                className="w-full h-auto rounded-2xl shadow-organic hover:shadow-xl transition-shadow duration-500"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;