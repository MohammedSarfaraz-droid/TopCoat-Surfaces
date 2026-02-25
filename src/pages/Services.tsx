import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

import serviceTerr from "@/assets/service-terrazzo.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceStamp from "@/assets/service-stamped.jpg";
import serviceGarage from "@/assets/service-garage.jpg";
import serviceFacade from "@/assets/service-facade.jpg";
import serviceDeco from "@/assets/service-decorative.jpg";

const services = [
  {
    title: "Epoxy Flooring",
    description: "Transform any surface with our premium metallic, solid-color, and flake epoxy systems. Ideal for commercial, industrial, and residential spaces seeking a seamless, high-gloss finish that's both stunning and incredibly durable.",
    img: serviceEpoxy,
  },
  {
    title: "Terrazzo Flooring",
    description: "Classic elegance meets modern craftsmanship. Our terrazzo installations feature premium aggregates and precision polishing, creating timeless floors for lobbies, galleries, and luxury residences.",
    img: serviceTerr,
  },
  {
    title: "Stamped Concrete",
    description: "Achieve the look of natural stone, brick, or slate with our expert stamped concrete applications. Perfect for patios, driveways, pool decks, and walkways with lasting beauty and minimal maintenance.",
    img: serviceStamp,
  },
  {
    title: "Garage Floors",
    description: "Elevate your garage to showroom quality with our premium polyaspartic and epoxy coatings. Chip-resistant, chemical-resistant, and beautifully finished to protect and impress.",
    img: serviceGarage,
  },
  {
    title: "Building Facades",
    description: "Architectural surface treatments for exterior walls and facades. Our decorative concrete and polymer applications create striking visual statements that withstand the elements.",
    img: serviceFacade,
  },
  {
    title: "Decorative & Polymer Concrete",
    description: "Artistic concrete applications including polymer overlays, vertical concrete, and custom decorative finishes. We push the boundaries of what concrete can become.",
    img: serviceDeco,
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] overflow-hidden">
      <img src={serviceTerr} alt="Luxury terrazzo lobby" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-4">What We Do</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold">Our Services</h1>
        </div>
      </div>
    </section>

    {/* Service Sections */}
    {services.map((s, i) => (
      <section key={s.title} className={`py-24 lg:py-32 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            <ScrollReveal className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-sm">
                <img src={s.img} alt={s.title} className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Service</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-8">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">{s.description}</p>
              <Link to="/contact">
                <Button variant="outline" className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300 group">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Services;
