import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  TrendingUp, 
  Shield, 
  Zap, 
  FileCheck, 
  Wrench,
  ArrowRight
} from "lucide-react";
import complianceImage from "@/assets/compliance-illustration.jpg";
import designImage from "@/assets/design-optimization.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Design",
      description: "Tailored air pollution control systems designed to meet your specific industrial requirements and environmental standards.",
      features: ["Custom Engineering", "Site Assessment", "Performance Modeling"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "System Optimization",
      description: "Maximize efficiency and reduce operational costs through advanced optimization techniques and performance monitoring.",
      features: ["Performance Analysis", "Energy Efficiency", "Cost Reduction"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance Assurance",
      description: "Ensure full regulatory compliance with comprehensive monitoring and reporting solutions for all environmental standards.",
      features: ["Regulatory Compliance", "Monitoring Systems", "Documentation"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Efficiency",
      description: "Advanced energy-efficient solutions that reduce power consumption while maintaining optimal pollution control performance.",
      features: ["Smart Controls", "Energy Recovery", "Low Power Systems"]
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Environmental Auditing",
      description: "Comprehensive environmental assessments and auditing services to identify improvement opportunities and ensure compliance.",
      features: ["Impact Assessment", "Compliance Review", "Improvement Plans"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "24/7 maintenance and technical support services to ensure optimal system performance and minimal downtime.",
      features: ["Preventive Maintenance", "Emergency Support", "Parts & Service"]
    }
  ];

  return (
    <section id="services" className="py-8 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Compliance Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-raleway font-bold text-2xl lg:text-3xl text-foreground">
                Environmental Compliance Made Simple
              </h3>
              <p className="font-work-sans text-muted-foreground">
                Navigate complex environmental regulations with confidence. Our comprehensive 
                compliance solutions ensure your operations meet all requirements while 
                optimizing performance and reducing costs.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Real-time monitoring and reporting",
                "Automated compliance documentation",
                "Expert regulatory guidance",
                "Risk assessment and mitigation"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-accent text-accent-foreground p-1 rounded-full">
                    <FileCheck className="h-4 w-4" />
                  </div>
                  <span className="font-work-sans text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="accent" className="font-work-sans group">
              Learn About Compliance
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          <div className="relative">
            <img
              src={complianceImage}
              alt="Environmental compliance and monitoring systems"
              className="w-full h-auto rounded-2xl shadow-organic"
            />
          </div>
        </div>
        {/* Design & Optimization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative order-2 lg:order-1">
            <img
              src={designImage}
              alt="System design and optimization process"
              className="w-full h-auto rounded-2xl shadow-organic"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="font-raleway font-bold text-2xl lg:text-3xl text-foreground">
                Optimized Design for Maximum Efficiency
              </h3>
              <p className="font-work-sans text-muted-foreground">
                Our expert engineering team designs custom solutions that maximize 
                pollution control effectiveness while minimizing energy consumption 
                and operational costs.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Advanced computational modeling",
                "Energy-efficient system design",
                "Performance optimization algorithms",
                "Continuous improvement processes"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-secondary text-secondary-foreground p-1 rounded-full">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="font-work-sans text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="font-work-sans group">
              Explore Design Solutions
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
        {/* Section Header */}
        <div className="text-center mb-16 mt-16">
          <h2 className="font-raleway font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Comprehensive Air Quality Solutions
          </h2>
          <p className="font-work-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide end-to-end solutions 
            for all your air pollution control needs, ensuring environmental compliance 
            and operational excellence.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-organic transition-all duration-300 hover:scale-105 bg-card"
            >
              <CardHeader>
                <div className="bg-accent/10 text-accent p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-raleway font-semibold text-xl text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-work-sans text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 font-work-sans text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
