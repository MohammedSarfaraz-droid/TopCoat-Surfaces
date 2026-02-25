import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-[0.1em] mb-6">TOPCOAT</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Premium flooring and surface solutions with over 20 years of craftsmanship excellence.
            </p>
            <p className="text-primary-foreground/40 text-xs tracking-wider">
              © {new Date().getFullYear()} Topcoat LLC. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">Services</h4>
            <ul className="space-y-3">
              {["Epoxy Flooring", "Terrazzo Flooring", "Stamped Concrete", "Garage Floors", "Building Facades", "Decorative Concrete"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", to: "/about" },
                { label: "Projects", to: "/projects" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>123 Surface Avenue</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">info@topcoatllc.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
