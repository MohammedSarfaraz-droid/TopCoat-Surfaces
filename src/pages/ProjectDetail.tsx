import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

import projCommercial from "@/assets/project-commercial-1.jpg";
import projResidential from "@/assets/project-residential-1.jpg";
import projIndustrial from "@/assets/project-industrial-1.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceTerr from "@/assets/service-terrazzo.jpg";
import serviceGarage from "@/assets/service-garage.jpg";
import serviceStamp from "@/assets/service-stamped.jpg";
import serviceDeco from "@/assets/service-decorative.jpg";
import serviceFacade from "@/assets/service-facade.jpg";

const projectsData = [
  { id: 1, title: "The Grand Hotel Lobby", location: "Manhattan, NY", category: "Commercial", description: "A stunning metallic epoxy installation spanning 15,000 sq ft of luxury hotel lobby space. The swirling charcoal and silver pattern creates an unforgettable first impression for guests.", images: [projCommercial, serviceEpoxy, serviceTerr] },
  { id: 2, title: "Modern Estate Residence", location: "Greenwich, CT", category: "Residential", description: "A seamless white epoxy floor throughout this 8,000 sq ft modern estate, creating an ethereal, gallery-like atmosphere that complements the home's minimalist architecture.", images: [projResidential, serviceStamp, serviceDeco] },
  { id: 3, title: "Atlas Distribution Center", location: "Newark, NJ", category: "Industrial", description: "High-performance industrial epoxy coating across 50,000 sq ft of warehouse space, engineered for heavy machinery traffic, chemical resistance, and extreme durability.", images: [projIndustrial, serviceGarage, serviceFacade] },
  { id: 4, title: "Meridian Corporate HQ", location: "Stamford, CT", category: "Commercial", description: "Executive-grade terrazzo flooring for a Fortune 500 corporate headquarters, featuring custom brass inlays and a polished finish.", images: [serviceEpoxy, projCommercial, serviceTerr] },
  { id: 5, title: "Lakeview Penthouse", location: "Chicago, IL", category: "Residential", description: "Luxury polished terrazzo with brass accents throughout this lakefront penthouse, seamlessly connecting living spaces with stunning floor design.", images: [serviceTerr, projResidential, serviceDeco] },
  { id: 6, title: "Precision Manufacturing", location: "Detroit, MI", category: "Industrial", description: "Chemical-resistant polyaspartic coating system for an automotive manufacturing facility requiring zero downtime installation.", images: [serviceGarage, projIndustrial, serviceFacade] },
  { id: 7, title: "The Ritz Spa & Wellness", location: "Miami, FL", category: "Commercial", description: "Decorative stamped concrete for outdoor pool decks and spa areas, designed to look like natural travertine with slip-resistant finish.", images: [serviceStamp, projCommercial, serviceEpoxy] },
  { id: 8, title: "Coastal Villa", location: "Malibu, CA", category: "Residential", description: "Custom decorative polymer concrete throughout a beachfront villa, featuring organic earth-tone patterns inspired by the surrounding landscape.", images: [serviceDeco, projResidential, serviceStamp] },
  { id: 9, title: "Harbor Logistics Hub", location: "Long Beach, CA", category: "Industrial", description: "Heavy-duty epoxy floor system for a major logistics facility, featuring color-coded zones for safety and traffic management.", images: [serviceFacade, projIndustrial, serviceGarage] },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-heading text-4xl">Project Not Found</h1>
          <Link to="/projects" className="text-accent mt-4 inline-block">Back to Projects</Link>
        </div>
      </Layout>
    );
  }

  const related = projectsData.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
            <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-4">{project.category}</p>
            <h1 className="font-heading text-4xl md:text-6xl text-white font-bold mb-2">{project.title}</h1>
            <p className="text-white/60 text-lg">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Link to="/projects" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10">
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="overflow-hidden rounded-sm aspect-[4/3]">
                  <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-semibold mb-12">Related Projects</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 100}>
                  <Link to={`/projects/${p.id}`} className="group block">
                    <div className="overflow-hidden rounded-sm aspect-[4/3] mb-4">
                      <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.location}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-secondary text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">Ready to Start Your Project?</h2>
          <Link to="/contact">
            <Button className="rounded-full px-10 py-6 text-sm tracking-[0.15em] uppercase">
              Request Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
