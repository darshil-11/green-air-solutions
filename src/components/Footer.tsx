import { Wind, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent-foreground/10 p-2 rounded-lg">
                <Wind className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-raleway font-bold text-lg text-accent-foreground">
                  Air Pollution Control Equipment
                </h3>
                <p className="font-work-sans text-sm text-accent-foreground/80">
                  Design ⋅ Optimisation ⋅ Compliance
                </p>
              </div>
            </div>
            <p className="font-work-sans text-accent-foreground/80 mb-4 max-w-md">
              Leading provider of sustainable air pollution control solutions, 
              helping industries achieve environmental compliance through innovative 
              design and optimization.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-raleway font-semibold text-accent-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Services", "Solutions", "Industries", "Case Studies", "Resources"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-work-sans text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-raleway font-semibold text-accent-foreground mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-foreground/60" />
                <span className="font-work-sans text-accent-foreground/80">
                  info@airpollutioncontrol.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-foreground/60" />
                <span className="font-work-sans text-accent-foreground/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-foreground/60" />
                <span className="font-work-sans text-accent-foreground/80">
                  123 Green Industry Blvd<br />
                  Environmental City, EC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-work-sans text-accent-foreground/60 text-sm">
              © 2024 Air Pollution Control Equipment. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-work-sans text-accent-foreground/60 hover:text-accent-foreground text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-work-sans text-accent-foreground/60 hover:text-accent-foreground text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;