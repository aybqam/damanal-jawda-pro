import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "معرض الأعمال" },
  { href: "#contact", label: "اتصل بنا" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
            <span className="text-primary-foreground font-heading font-bold text-xl">ض</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-heading text-lg font-semibold text-foreground">ضمان الجودة</h1>
            <p className="text-xs text-muted-foreground">منذ 2018</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:0912124336" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm">0912124336</span>
          </a>
          <Button variant="gold" size="default">
            احصل على عرض سعر
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 left-0 bg-background/98 backdrop-blur-lg shadow-medium animate-fade-up">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="gold" size="lg" className="mt-4">
              احصل على عرض سعر
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
