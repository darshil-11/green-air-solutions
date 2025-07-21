import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Send
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "info@airpollutioncontrol.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak with our experts",
      contact: "+1 (555) 123-4567",
      subtext: "Mon-Fri: 8AM-6PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Our main office",
      contact: "123 Green Industry Blvd",
      subtext: "Environmental City, EC 12345"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      description: "When we're available",
      contact: "Monday - Friday",
      subtext: "8:00 AM - 6:00 PM EST"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-organic">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-work-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact our experts today to discuss your air pollution control needs 
            and discover how we can help you achieve environmental compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-raleway font-semibold text-2xl text-foreground">
                Get in Touch
              </h3>
              <p className="font-work-sans text-muted-foreground">
                Our team of environmental experts is ready to help you find the 
                perfect air pollution control solution for your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-organic transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="bg-accent/10 text-accent p-2 rounded-lg w-fit mb-2">
                      {info.icon}
                    </div>
                    <CardTitle className="font-raleway font-semibold text-lg text-foreground">
                      {info.title}
                    </CardTitle>
                    <CardDescription className="font-work-sans text-muted-foreground text-sm">
                      {info.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <div className="font-work-sans font-medium text-foreground">
                        {info.contact}
                      </div>
                      <div className="font-work-sans text-sm text-muted-foreground">
                        {info.subtext}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
              <h4 className="font-raleway font-semibold text-foreground mb-3">
                Emergency Support Available
              </h4>
              <p className="font-work-sans text-muted-foreground text-sm mb-4">
                For urgent environmental compliance issues or equipment failures, 
                our emergency response team is available 24/7.
              </p>
              <Button variant="accent" size="sm" className="font-work-sans">
                Emergency Contact
                <Phone className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border bg-card shadow-organic">
            <CardHeader>
              <CardTitle className="font-raleway font-semibold text-xl text-foreground">
                Request a Consultation
              </CardTitle>
              <CardDescription className="font-work-sans text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-work-sans text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="border-border focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-work-sans text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="border-border focus:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-work-sans text-sm font-medium text-foreground">
                  Company
                </label>
                <Input 
                  placeholder="Your Company Name"
                  className="border-border focus:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="font-work-sans text-sm font-medium text-foreground">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john@company.com"
                  className="border-border focus:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="font-work-sans text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input 
                  placeholder="+1 (555) 123-4567"
                  className="border-border focus:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="font-work-sans text-sm font-medium text-foreground">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your air pollution control needs, project requirements, and any specific challenges you're facing..."
                  className="border-border focus:ring-accent min-h-[120px]"
                />
              </div>

              <Button variant="organic" className="w-full font-work-sans group">
                Send Message
                <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <p className="font-work-sans text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;