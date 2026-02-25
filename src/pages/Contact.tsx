import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";

import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceTerr from "@/assets/service-terrazzo.jpg";
import serviceStamp from "@/assets/service-stamped.jpg";
import serviceDeco from "@/assets/service-decorative.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-32 lg:pt-40 pb-24 lg:pb-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-16">Contact Us</h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-6">Let's Discuss Your Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're planning a residential renovation or a large-scale commercial installation, our team is ready to bring your vision to life.
                  </p>
                </div>
                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Address</p>
                      <p className="text-muted-foreground text-sm">123 Surface Avenue, New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">info@topcoatllc.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <Button type="submit" className="rounded-full px-10 py-6 text-sm tracking-[0.15em] uppercase mt-4 w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {[serviceEpoxy, serviceTerr, serviceStamp, serviceDeco].map((img, i) => (
          <div key={i} className="overflow-hidden aspect-square">
            <img src={img} alt="Topcoat project" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Contact;
