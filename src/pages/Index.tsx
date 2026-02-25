import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Star } from "lucide-react";

import heroImg from "@/assets/hero-epoxy.jpg";
import teamImg from "@/assets/team-installing.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceTerr from "@/assets/service-terrazzo.jpg";
import serviceStamp from "@/assets/service-stamped.jpg";
import serviceGarage from "@/assets/service-garage.jpg";
import serviceFacade from "@/assets/service-facade.jpg";
import serviceDeco from "@/assets/service-decorative.jpg";
import projCommercial from "@/assets/project-commercial-1.jpg";
import projResidential from "@/assets/project-residential-1.jpg";
import projIndustrial from "@/assets/project-industrial-1.jpg";
import expBanner from "@/assets/experience-banner.jpg";

const services = [
  { title: "Epoxy Flooring", img: serviceEpoxy },
  { title: "Terrazzo Flooring", img: serviceTerr },
  { title: "Stamped Concrete", img: serviceStamp },
  { title: "Garage Floors", img: serviceGarage },
  { title: "Building Facades", img: serviceFacade },
  { title: "Decorative Concrete", img: serviceDeco },
];

const projects = [
  { title: "The Grand Hotel Lobby", location: "Manhattan, NY", img: projCommercial, category: "Commercial" },
  { title: "Modern Estate Residence", location: "Greenwich, CT", img: projResidential, category: "Residential" },
  { title: "Atlas Distribution Center", location: "Newark, NJ", img: projIndustrial, category: "Industrial" },
];

const testimonials = [
  { name: "James Richardson", role: "Property Developer", text: "Topcoat transformed our commercial lobby into a work of art. The metallic epoxy finish exceeded every expectation." },
  { name: "Sarah Chen", role: "Architect, Chen & Associates", text: "Their terrazzo work is museum-quality. Precise, elegant, and delivered on schedule. A true luxury partner." },
  { name: "Michael Torres", role: "Homeowner", text: "Our garage floor looks like it belongs in a showroom. The attention to detail and craftsmanship is remarkable." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury metallic epoxy flooring in modern penthouse" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative h-full container mx-auto px-6 lg:px-12 flex items-end pb-20 lg:pb-28">
          <div className="max-w-2xl">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-4 animate-fade-up">Est. 2003</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[0.95] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              TOPCOAT LLC
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light mb-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Artisan Flooring & Surface Solutions
            </p>
            <p className="text-white/50 text-sm tracking-wider mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              20+ Years of Craftsmanship Excellence
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/projects">
                <Button className="rounded-full px-8 py-6 text-sm tracking-[0.1em] uppercase bg-white text-foreground hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="rounded-full px-8 py-6 text-sm tracking-[0.1em] uppercase border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="overflow-hidden rounded-sm">
                <img src={teamImg} alt="Topcoat team installing epoxy flooring" className="w-full h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">About Us</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
                If you can imagine it, we can build it
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Topcoat LLC began with decorative painting and stenciled wood floors and evolved into a leader in epoxy, terrazzo, stamped concrete, and architectural surface finishes. With over 20 years of expertise, we deliver precision flooring solutions for commercial, industrial, corporate, and residential environments.
              </p>
              <Link to="/about">
                <Button variant="outline" className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300 group">
                  About Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">What We Do</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold">Our Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link to="/services" className="group block relative overflow-hidden rounded-sm aspect-[4/3]">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl text-white font-semibold">{service.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Portfolio</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold">Featured Projects</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <ScrollReveal key={proj.title} delay={i * 150}>
                <Link to={`/projects/${i + 1}`} className="group block">
                  <div className="overflow-hidden rounded-sm aspect-[3/4] mb-4">
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-xs tracking-[0.2em] uppercase text-accent mb-1">{proj.category}</p>
                  <h3 className="font-heading text-lg font-semibold">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground">{proj.location}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-16">
              <Link to="/projects">
                <Button variant="outline" className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300 group">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={expBanner} alt="Luxury commercial flooring interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <ScrollReveal>
            <h2 className="font-heading text-5xl md:text-7xl text-white font-bold mb-4">20+ Years</h2>
            <p className="text-white/70 text-sm tracking-[0.3em] uppercase">
              Commercial • Industrial • Residential
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Testimonials</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 150}>
                <div className="bg-background p-8 lg:p-10 rounded-sm">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-sm">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold mb-10 max-w-3xl mx-auto leading-tight">
              Start Your Next Flooring Project
            </h2>
            <Link to="/contact">
              <Button className="rounded-full px-10 py-6 text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Request Quote
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
