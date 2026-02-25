import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";
import expBanner from "@/assets/experience-banner.jpg";

const testimonials = [
  { name: "James Richardson", role: "Property Developer", text: "Topcoat transformed our commercial lobby into a work of art. The metallic epoxy finish exceeded every expectation. Their team was professional, precise, and delivered on a tight timeline. We've since hired them for three additional properties." },
  { name: "Sarah Chen", role: "Architect, Chen & Associates", text: "Their terrazzo work is museum-quality. Precise, elegant, and delivered on schedule. I've specified Topcoat on over a dozen projects and they consistently raise the bar for what's possible with architectural surfaces." },
  { name: "Michael Torres", role: "Homeowner", text: "Our garage floor looks like it belongs in a showroom. The attention to detail and craftsmanship is remarkable. Friends and neighbors constantly ask who did our floors. Worth every penny." },
  { name: "Amanda Foster", role: "Facility Manager, DataCore Inc.", text: "We needed a durable, chemical-resistant floor for our manufacturing plant with zero production downtime. Topcoat engineered a phased installation that met every requirement. The floor has held up perfectly under heavy machinery for three years." },
  { name: "Robert Kim", role: "Restaurant Owner", text: "The decorative concrete floors in our restaurant have become a talking point for guests. Topcoat created a custom design that perfectly matches our brand identity. It's functional art that handles heavy foot traffic beautifully." },
  { name: "Diana Blackwell", role: "Interior Designer", text: "As a designer, I'm extremely particular about finishes. Topcoat understands aesthetics at a level most contractors simply don't. Their metallic epoxy work in a client's penthouse was nothing short of breathtaking." },
];

const Testimonials = () => (
  <Layout>
    <section className="relative h-[70vh] overflow-hidden">
      <img src={expBanner} alt="Luxury flooring interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-4">Client Stories</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold">Testimonials</h1>
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="bg-secondary p-8 lg:p-12 rounded-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
