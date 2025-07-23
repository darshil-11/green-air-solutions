import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf } from "lucide-react";
import airPurifierBanner from "@/assets/air-purifier-banner.webp";
import { ArrowDownRight } from "lucide-react";


const HeroSection = () => {
  const benefits = [
    "Environmental Compliance",
    "Energy Efficiency",
    "Cost Optimization",
    "Sustainable Solutions"
  ];

  return (
    <section className="relative bg-gradient-organic py-16 lg:py-24 overflow-hidden min-h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src={airPurifierBanner}
        alt=""
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in flex flex-col justify-center items-center h-full min-h-screen">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-work-sans">
                <Leaf className="h-4 w-4 mr-2" />
                Sustainable Air Quality Solutions
              </div>

              <h1 className="font-raleway font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
                Air Pollution
                <span className="text-accent block">Control Equipment</span>
              </h1>
              <p className="font-work-sans text-lg text-muted-foreground leading-relaxed max-w-xl">
                Design ⋅ Optimisation ⋅ Compliance
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

            {/* Stats */}
            <div className="grid grid-cols-3">
              <div className="text-left">
                <div className="font-raleway font-bold text-2xl text-accent">
                  500+
                </div>
                <div className="font-work-sans text-sm text-muted-foreground">
                  Projects
                </div>
              </div>
              <div className="text-left">
                <div className="font-raleway font-bold text-2xl text-accent">
                  25+
                </div>
                <div className="font-work-sans text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-left">
                <div className="font-raleway font-bold text-2xl text-accent">
                  99%
                </div>
                <div className="font-work-sans text-sm text-muted-foreground">
                  Compliance Rate
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row">
              <Button variant="organic" size="lg" className="font-work-sans">
                Explore
                <ArrowDownRight className="transition-transform duration-100 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;