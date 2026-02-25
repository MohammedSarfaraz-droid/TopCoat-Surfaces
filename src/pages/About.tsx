import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import teamImg from "@/assets/team-installing.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceTerr from "@/assets/service-terrazzo.jpg";
import serviceDeco from "@/assets/service-decorative.jpg";

const sections = [
  {
    tag: "Our Story",
    title: "Built on Passion, Driven by Precision",
    text: "Topcoat LLC was founded over two decades ago with a simple mission: to elevate the art of flooring. What began as decorative painting and stenciled wood floors has grown into a full-service surface solutions company, delivering world-class epoxy, terrazzo, stamped concrete, and architectural finishes across the tri-state area and beyond.",
    img: teamImg,
  },
  {
    tag: "Our Experience",
    title: "20+ Years of Unmatched Expertise",
    text: "From luxury residential estates to Fortune 500 corporate headquarters, our portfolio spans thousands of completed projects. We bring deep technical knowledge, premium materials, and an obsessive attention to detail to every surface we touch.",
    img: serviceEpoxy,
    reverse: true,
  },
  {
    tag: "Our Team",
    title: "Master Craftsmen & Artisans",
    text: "Our team of certified installers and surface specialists are the best in the industry. Each member undergoes rigorous training and brings years of hands-on experience, ensuring flawless execution on every project regardless of scale or complexity.",
    img: serviceTerr,
  },
  {
    tag: "Our Process",
    title: "Precision at Every Step",
    text: "From initial consultation through final inspection, our process is designed for perfection. We assess your space, recommend the ideal solution, prepare surfaces meticulously, and apply coatings with surgical precision. The result is a finish that looks extraordinary and lasts for decades.",
    img: serviceDeco,
    reverse: true,
  },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] overflow-hidden">
      <img src={teamImg} alt="Topcoat team at work" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-4">About</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold">About Topcoat LLC</h1>
        </div>
      </div>
    </section>

    {/* Sections */}
    {sections.map((s, i) => (
      <section key={s.tag} className={`py-24 lg:py-36 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${s.reverse ? "direction-rtl" : ""}`}>
            <ScrollReveal className={s.reverse ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-sm">
                <img src={s.img} alt={s.tag} className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className={s.reverse ? "lg:order-1" : ""}>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">{s.tag}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-8">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default About;
