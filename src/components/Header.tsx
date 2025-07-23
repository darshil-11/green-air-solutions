import { Button } from "@/components/ui/button";
import { Wind, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gradient-organic border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-accent p-2 rounded-lg shadow-accent">
              <Wind className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-raleway font-bold text-xl text-foreground">
                {/* Air Pollution Control Equipment */}
                Rudra Inc
              </h1>
              {/* <p className="font-work-sans text-sm text-muted-foreground">
                Design ⋅ Optimisation ⋅ Compliance
              </p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-work-sans text-foreground hover:text-accent transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </a>
            ))}
            <Button variant="accent" size="sm" className="font-work-sans">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-work-sans text-foreground hover:text-accent transition-colors duration-300 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="accent" size="sm" className="font-work-sans w-fit">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
