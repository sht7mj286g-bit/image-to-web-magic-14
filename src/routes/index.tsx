import { createFileRoute } from "@tanstack/react-router";
import {
  Globe2,
  ShieldCheck,
  Handshake,
  Truck,
  Package,
  Tag,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Building2,
  Box,
} from "lucide-react";
import heroImage from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ACC Export — Global Reach, Local Trust" },
      {
        name: "description",
        content:
          "Your trusted sourcing partner from Türkiye to global markets. Sourcing, export, private label and logistics solutions.",
      },
      { property: "og:title", content: "ACC Export — Global Reach, Local Trust" },
      {
        property: "og:description",
        content: "Trusted sourcing partner from Türkiye to global markets.",
      },
    ],
  }),
});

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="leading-none">
      <div className={`text-2xl font-bold tracking-tight ${onDark ? "text-white" : "text-primary"}`}>
        ACC
      </div>
      <div className={`text-[10px] tracking-[0.35em] ${onDark ? "text-accent" : "text-accent"}`}>
        EXPORT
      </div>
    </div>
  );
}

function Hero() {
  const links = ["About Us", "Services", "Why ACC Export", "Markets", "Contact"];
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Aerial view of Istanbul Bosphorus with cargo ship"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Logo onDark />
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-white/90 transition-colors hover:text-accent"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pt-20 pb-24 md:px-10 md:pt-32 md:pb-32">
        <p className="font-mono text-xs tracking-[0.3em] text-accent md:text-sm">
          41.0082° N, 28.9784° E — ISTANBUL, TURKEY
        </p>
        <h1 className="mt-6 text-6xl font-bold leading-[1.05] tracking-tight text-white md:text-8xl">
          Global Reach,
          <br />
          <span className="text-accent">Local Trust</span>
        </h1>
        <div className="mt-6 h-px w-40 bg-accent/70" />
        <p className="mt-8 max-w-md text-base text-white/80 md:text-lg">
          Your trusted cargo partner from Turkey to global markets. Bridging continents with
          precision and reliability.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-opacity hover:opacity-90"
          >
            Our Services <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Globe2, title: "Global Network", desc: "Extensive network of trusted suppliers worldwide." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict quality control at every step." },
  { icon: Handshake, title: "Reliable Partner", desc: "Long-term partnerships built on trust and transparency." },
  { icon: Truck, title: "Efficient Logistics", desc: "End-to-end logistics solutions for seamless delivery." },
];

function Features() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex gap-4">
            <f.icon className="h-9 w-9 shrink-0 text-primary" strokeWidth={1.5} />
            <div>
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  { icon: Globe2, title: "Global Sourcing", desc: "We connect you with reliable manufacturers and the right products at competitive conditions." },
  { icon: Box, title: "Export & Supply Chain Management", desc: "We manage the entire supply chain process to ensure timely and secure delivery." },
  { icon: Tag, title: "Private Label Solutions", desc: "We develop private label solutions tailored to your brand and market needs." },
  { icon: ShieldCheck, title: "Quality Control & Supplier Management", desc: "We ensure consistent quality through inspections and supplier audits." },
  { icon: Truck, title: "Logistics Coordination", desc: "We coordinate all logistics operations to deliver your products efficiently." },
];

function Services() {
  return (
    <section id="services" className="bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Services</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary">
            Comprehensive Solutions for Global Trade
          </h2>
          <p className="mt-5 text-muted-foreground">
            We manage the entire process to ensure quality, efficiency and reliability from sourcing
            to delivery.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <s.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { icon: Building2, value: "+50", label: "Countries Served" },
  { icon: Package, value: "+100", label: "Trusted Suppliers" },
  { icon: ShieldCheck, value: "100%", label: "Commitment to Quality" },
  { icon: Truck, value: "On Time", label: "Reliable Delivery" },
];

function WhyUs() {
  return (
    <section id="why-acc-export" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why ACC Export?</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Global Vision,
            <br />
            Local Expertise
          </h2>
          <p className="mt-5 max-w-md text-primary-foreground/80">
            We combine global market knowledge with local expertise to create value for our partners.
          </p>
          <a
            href="#about-us"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Explore About Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30">
                <s.icon className="h-5 w-5 text-primary-foreground/80" strokeWidth={1.5} />
              </div>
              <div className="mt-4 text-3xl font-bold text-accent md:text-4xl">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const markets = [
  { flag: "🇺🇸", name: "United States", desc: "Our main focus market." },
  { flag: "🇪🇺", name: "Europe", desc: "Strong connections across Europe." },
  { flag: "🇨🇦", name: "Canada", desc: "Growing partnerships in North America." },
  { flag: "🌐", name: "Worldwide", desc: "Expanding our reach across the globe." },
];

function Markets() {
  return (
    <section id="markets" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Markets</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary">
            Delivering to
            <br />
            Global Markets
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {markets.map((m) => (
            <div key={m.name} className="text-center">
              <div className="mx-auto text-4xl">{m.flag}</div>
              <h3 className="mt-4 font-semibold text-foreground">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-5">
          <Mail className="h-10 w-10 shrink-0 text-accent" strokeWidth={1.5} />
          <div>
            <h2 className="text-2xl font-bold text-primary">Let's Build Something Great Together</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Partner with ACC Export and experience the power of reliable sourcing and efficient
              export solutions.
            </p>
          </div>
        </div>
        <a
          href="mailto:info@accexport.com"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in Touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-primary-foreground/70">Global Reach, Local Trust</p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Instagram, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>About Us</li>
            <li>Why ACC Export</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>Global Sourcing</li>
            <li>Export & Supply Chain Management</li>
            <li>Private Label Solutions</li>
            <li>Quality Control & Supplier Management</li>
            <li>Logistics Coordination</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Markets</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>United States</li>
            <li>Europe</li>
            <li>Canada</li>
            <li>Worldwide</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Istanbul, Türkiye</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@accexport.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +90 212 123 45 67</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <p>© 2026 ACC Export. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Features />
        <Services />
        <WhyUs />
        <Markets />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
