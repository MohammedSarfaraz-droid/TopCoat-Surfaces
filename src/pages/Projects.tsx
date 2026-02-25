import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

import projCommercial from "@/assets/project-commercial-1.jpg";
import projResidential from "@/assets/project-residential-1.jpg";
import projIndustrial from "@/assets/project-industrial-1.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceTerr from "@/assets/service-terrazzo.jpg";
import serviceGarage from "@/assets/service-garage.jpg";
import serviceStamp from "@/assets/service-stamped.jpg";
import serviceDeco from "@/assets/service-decorative.jpg";
import serviceFacade from "@/assets/service-facade.jpg";

const allProjects = [
  { id: 1, title: "The Grand Hotel Lobby", location: "Manhattan, NY", category: "Commercial", img: projCommercial },
  { id: 2, title: "Modern Estate Residence", location: "Greenwich, CT", category: "Residential", img: projResidential },
  { id: 3, title: "Atlas Distribution Center", location: "Newark, NJ", category: "Industrial", img: projIndustrial },
  { id: 4, title: "Meridian Corporate HQ", location: "Stamford, CT", category: "Commercial", img: serviceEpoxy },
  { id: 5, title: "Lakeview Penthouse", location: "Chicago, IL", category: "Residential", img: serviceTerr },
  { id: 6, title: "Precision Manufacturing", location: "Detroit, MI", category: "Industrial", img: serviceGarage },
  { id: 7, title: "The Ritz Spa & Wellness", location: "Miami, FL", category: "Commercial", img: serviceStamp },
  { id: 8, title: "Coastal Villa", location: "Malibu, CA", category: "Residential", img: serviceDeco },
  { id: 9, title: "Harbor Logistics Hub", location: "Long Beach, CA", category: "Industrial", img: serviceFacade },
];

const filters = ["All", "Commercial", "Residential", "Industrial"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="relative h-[70vh] overflow-hidden">
        <img src={projCommercial} alt="Featured project" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
            <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-4">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold">Our Projects</h1>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filters */}
          <div className="flex justify-center gap-4 mb-16">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                  active === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj, i) => (
              <ScrollReveal key={proj.id} delay={i * 100}>
                <Link to={`/projects/${proj.id}`} className="group block">
                  <div className="overflow-hidden rounded-sm aspect-[4/3] mb-4">
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-xs tracking-[0.2em] uppercase text-accent mb-1">{proj.category}</p>
                  <h3 className="font-heading text-lg font-semibold">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground">{proj.location}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
