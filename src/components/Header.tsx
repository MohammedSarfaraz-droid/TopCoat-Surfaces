import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span
              className={`font-heading text-2xl lg:text-3xl font-bold tracking-[0.15em] transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              TOPCOAT
            </span>
            <span
              className={`text-[10px] lg:text-xs tracking-[0.3em] uppercase -mt-1 transition-colors duration-500 ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Surface Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-white"
                } ${location.pathname === link.to ? "opacity-70" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="rounded-full px-6 text-xs tracking-[0.1em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-lg transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-lg tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="rounded-full px-8 py-3 text-sm tracking-[0.1em] uppercase">
              Get Quote
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
