import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Video,
  Users,
  Megaphone,
  Camera,
  Eye,
  Target,
  Zap,
  IndianRupee,
  Palette,
  Building2,
  MapPin,
  Check,
  Star,
  Plus,
  Minus,
  Heart,
  TrendingUp,
  PlayCircle,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/kontentlee-logo.png";
import wordmark from "@/assets/kontentlee-wordmark.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Kontentlee Media — Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Premium reel editing, social media management, influencer marketing & Meta Ads for Tamil Nadu businesses. Content that creates Impact.",
      },
      { property: "og:title", content: "Kontentlee Media — Content that creates Impact" },
      { property: "og:description", content: "Premium digital marketing agency in Tamil Nadu." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logo },
      { name: "twitter:image", content: logo },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* ---------------- helpers ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
          <span className="text-gradient">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- NAV ---------------- */

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#team", label: "Team" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Portfolio" },
  { href: "#contact", label: "Contact Us" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${scrolled ? "glass" : ""}`}>
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary glow">
              <img src={logo} alt="Kontentlee" className="h-full w-full rounded-xl object-cover" />
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight">Kontentlee<span className="text-neon"> Media</span></span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow"
          >
            Start Growing <ArrowRight className="h-4 w-4" />
          </a>
          <button className="md:hidden rounded-full glass p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 md:hidden glass rounded-3xl p-4"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium hover:bg-white/5">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
                  Start Growing
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -6 }}
      animate={{ opacity: 1, y: 0, rotate: -6 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[260px] sm:w-[300px]"
    >
      <div className="animate-floaty">
        <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-3 shadow-2xl glow">
          <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-deep to-black">
            {/* Reel UI */}
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-[10px] text-white/80">
              <span className="font-semibold">Reels</span>
              <Camera className="h-4 w-4" />
            </div>
            <div className="absolute left-3 right-14 bottom-4 space-y-2 text-white">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-white/20 ring-2 ring-white/40" />
                <div>
                  <div className="text-[11px] font-semibold">@kontentlee.media</div>
                  <div className="text-[9px] opacity-70">Follow</div>
                </div>
              </div>
              <div className="text-[11px] leading-tight">
                Content that <span className="text-neon font-bold">creates Impact</span> ✨
              </div>
            </div>
            <div className="absolute right-3 bottom-4 flex flex-col items-center gap-4 text-white">
              {[Heart, MessageCircle, Sparkles].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[9px]">{["1M", "482", "100K"][i]}</span>
                </div>
              ))}
            </div>
            <motion.div
              className="absolute inset-x-0 top-1/3 mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/15 backdrop-blur-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <PlayCircle className="h-8 w-8 text-white" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -left-14 top-10 hidden sm:block"
      >
        <div className="glass rounded-2xl p-3 animate-floaty" style={{ animationDelay: "1s" }}>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20">
              <TrendingUp className="h-4 w-4 text-neon" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Reach</div>
              <div className="text-sm font-bold">+200%</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute -right-10 bottom-16 hidden sm:block"
      >
        <div className="glass rounded-2xl p-3 animate-floaty" style={{ animationDelay: "2s" }}>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20">
              <Eye className="h-4 w-4 text-neon" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Views</div>
              <div className="text-sm font-bold">1M+</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute -right-6 top-2 hidden md:block"
      >
        <div className="glass rounded-full px-3 py-1.5 text-[11px] font-semibold text-neon animate-pulse-glow">
          🔥 Trending
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <motion.div style={{ y, opacity }} className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.58 0.24 300 / 0.5), transparent 70%)",
          y,
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10">
        <div>

          <Reveal delay={1}>
            <h1 className="mt-6 text-[2.5rem] leading-[1.02] sm:text-6xl md:text-7xl">
              <span className="block">We deliver</span>
              <span className="block text-gradient">content that</span>
              <span className="block">
                Creates <span className="italic font-black" style={{ fontFamily: "'Dancing Script', cursive" }}>Impact.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Helping businesses across <span className="text-foreground font-medium">Tamil Nadu</span> grow through powerful content, strategic marketing, and high-performing social media.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:scale-105 glow"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <PlayCircle className="h-4 w-4" /> View Our Work
              </a>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {[
                ["100+", "Reels Delivered"],
                ["10+", "BRANDS SERVED"],
                ["1M+", "Views Generated"],
              ].map(([n, l]) => (
                <div key={l} className="flex items-center gap-2">
                  <div className="text-2xl font-black text-gradient">{n}</div>
                  <div className="text-xs uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-border py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-14 pr-14">
              {["Meta Ads", "Content Creation", "Influencer Marketing", "Social Media Management"].map((t) => (
                <span key={t} className="flex items-center gap-14 font-display text-xl font-extrabold text-muted-foreground/70">
                  {t}
                  <Sparkles className="h-4 w-4 text-neon" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="ABOUT KONTENTLEE"
          title="A creative agency built for Brand Growth"
          subtitle="Kontentlee Media helps businesses build visibility and trust online through strategic content and creative marketing that attracts customers and grows brands."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Visibility", desc: "We put your business in front of the right audience across Social Media platforms." },
            { icon: Heart, title: "Trust", desc: "Consistent, on-brand storytelling that turns viewers into loyal customers." },
            { icon: TrendingUp, title: "Growth", desc: "Creative strategies and marketing that translate views into real business outcomes." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i}>
              <div className="group glass h-full rounded-3xl p-8 transition hover:-translate-y-1 hover:glow">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-neon transition group-hover:scale-110">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={4}>
          <p className="mt-16 text-center font-display text-2xl italic sm:text-3xl">
            <span className="text-gradient">"</span> Our focus is not just creating videos — <span className="text-gradient">we help brands stand out.</span><span className="text-gradient">&nbsp;"</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */

const team = [
  {
    name: "Arun Velmaran",
    role: "Founder & CEO",
    tags: ["Video Editor", "Script Writer"],
    desc: "The creative force behind Kontentlee. Leads the creative vision of Kontentlee.",
    hue: 300,
  },
  {
    name: "Dinesh Kumar",
    role: "Co-Founder & Marketing Head",
    tags: ["Digital Marketing Head", "Video Editor"],
    desc: "Transforms creative ideas into measurable growth through strategic marketing.",
    hue: 280,
  },
  {
    name: "Gayathri Samuthiravelu",
    role: "Influencer & Content Creator",
    tags: ["On-Screen Talent", "Content Creator"],
    desc: "The face of our reels. Brings brands to life with authentic storytelling.",
    hue: 320,
  },
];

function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Meet the Team" title="Meet the minds behind Kontentlee" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i}>
              <div className="group relative glass overflow-hidden rounded-3xl p-8 text-center transition hover:-translate-y-2">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(400px circle at 50% 0%, oklch(0.6 0.25 ${m.hue} / 0.35), transparent 60%)`,
                  }}
                />
                <div className="relative mx-auto">
                  <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-primary to-deep p-[3px] animate-pulse-glow">
                    <div
                      className="grid h-full w-full place-items-center rounded-full font-display text-4xl font-black text-white"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.35 0.2 ${m.hue}), oklch(0.2 0.15 ${m.hue}))`,
                      }}
                    >
                      {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                  </div>
                </div>
                <h3 className="relative mt-6 text-xl">{m.name}</h3>
                <div className="relative mt-1 text-sm font-semibold text-neon">{m.role}</div>
                <div className="relative mt-4 flex flex-wrap justify-center gap-1.5">
                  {m.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-white/5 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="relative mt-4 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

const services = [
  {
    icon: Video,
    title: "Professional Reel & Video Editing",
    items: ["Cinematic Editing", "Seamless Transitions", "Captions & SFX", "Colour Grading", "Background Music", "Full HD Delivery"],
  },
  {
    icon: Instagram,
    title: "Social Media Management",
    items: ["Instagram & Facebook Management", "Content Planing & Scheduling", "Organic Growth Strategy", "Brand Consistency", "Performance Monitoring", "Monthly Insights Report"],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    items: ["Creative Storytelling", "Brand Collaborations", "Sponsored Content", "Content Strategy", "Product Promotions", "Product Reviews"],
  },
  {
    icon: Camera,
    title: "Content Creation",
    items: ["Product Photography & Videography", "Creative Reels", "Visual Storytelling", "Promotional Content", "Behind-the-Scenes", "Brand Stories"],
  },
  {
    icon: Eye,
    title: "Brand Visibility",
    items: ["Local Brand Awareness", "Strong Online Presence", "Customer Engagement", "Reputation Building", "Business Recognition", "Cross-platform Reach"],
  },
  {
    icon: Target,
    title: "Meta Ads Management",
    items: ["Facebook & Instagram Ads", "Audience Targeting", "Creative Ad Management", "Budget Optimization", "Conversion Tracking", "ROI Monitoring"],
  },
];

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="WHAT WE OFFER"
          title="Everything your brand needs to Stand Out"
          subtitle="From engaging reels to complete social media management - we handle every part of your online presence."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition hover:-translate-y-1 hover:glow">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.58 0.24 300 / 0.15), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/20 text-neon transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl">{s.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */

const whyStats = [
  { n: "48h", l: "FAST DELIVERY", icon: Zap },
  { n: "From ₹499", l: "STARTING FROM", icon: IndianRupee },
  { n: "100%", l: "QUALITY DRIVEN", icon: Palette },
  { n: "10+", l: "Businesses Served", icon: Building2 },
  { n: "Local", l: "BASED IN TAMIL NADU", icon: MapPin },
  { n: "Premium", l: "HIGH-QUALITY DELIVERY", icon: Star },
];

function WhyChoose() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="WHY CHOOSE KONTENTLEE"
          title="Why businesses choose Kontentlee Media?"
          subtitle="Fast, affordable, creative and built around real business results."
        />
        <div className="mt-16 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {whyStats.map((s, i) => (
            <Reveal key={s.l} delay={i}>
              <div className="group glass h-full rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:glow">
                <s.icon className="mx-auto h-6 w-6 text-neon transition-transform group-hover:scale-125" />
                <div className="mt-3 font-display text-2xl font-black text-gradient">{s.n.replace("From ", "")}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

const steps = [
  { n: "01", title: "Discover Your Brand", desc: "We dive deep into your brand, goals & audience." },
  { n: "02", title: "Content Strategy", desc: "Strategy, scripts, hooks & shot lists tailored to your business goals." },
  { n: "03", title: "Editing & Design", desc: "Cinematic edits, seamless transitions, colour grade & sound design." },
  { n: "04", title: "Approval", desc: "Share your feedback, and we'll refine it with up to 3 revisions." },
  { n: "05", title: "Publishing & Management", desc: "We schedule & post at peak audience engagement time." },
  { n: "06", title: "Optimize & Grow", desc: "We Track, learn, iterate - and watch the numbers climb." },
];

function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Our Process" title="How we grow your Brand." />
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-primary to-transparent lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i}>
                <div className="glass relative h-full rounded-2xl p-5 transition hover:-translate-y-1">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/20 font-display text-sm font-black text-neon animate-pulse-glow">
                    {s.n}
                  </div>
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */

const plans = [
  {
    name: "Content",
    price: "From ₹499",
    suffix: "/ reel",
    tag: "BEGINNER",
    highlight: false,
    features: ["SFX & Cinematic Transitions", "Captions", "Professional Colour Grading", "Background Music", "Full HD Export", "Delivery within 48 Hours", "Up to 3 Revisions"],
  },
  {
    name: "Content + Meta Ads Management",
    price: "From ₹1,499",
    suffix: "/ reel",
    tag: "BEST VALUE",
    highlight: true,
    features: ["Everything in Editing Package", "Facebook & Instagram Ads", "Performance Tracking", "Audience Targeting", "Ad Performance Reports", "Dedicated Support"],
  },
  {
    name: "Meta Ads Management",
    price: "From ₹14,999",
    suffix: "For 8 reels / month",
    tag: "GROWTH PACK",
    highlight: false,
    features: ["Facebook & Instagram Meta Ads", "Campaign Setup & Management", "Weekly Campaign Optimization", "Audience Research & Targeting", "Performance Analytics", "Monthly Strategy Review", "Custom Packages Available"],
  },
];

const monthly = [
  { name: "Beginner ", reels: "8 Professional Reels / month", price: "₹3,999", per: "/ month" },
  { name: "Premium", reels: "12 Professional Reels / month", price: "₹5,999", per: "/ month" },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Premium quality. Affordable pricing."
          subtitle="Whether you need a single reel or complete social media management, we have a plan tailored to your business."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i}>
              <div className={`relative h-full rounded-3xl p-8 transition hover:-translate-y-2 ${p.highlight ? "bg-gradient-to-b from-primary/30 to-transparent border border-primary/40 glow" : "glass"}`}>
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground glow">
                    {p.tag}
                  </span>
                )}
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">{!p.highlight && p.tag}</div>
                <h3 className="mt-2 text-2xl">{p.name}</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-black text-gradient">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.suffix}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/25 text-neon">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${p.highlight ? "bg-white text-black" : "bg-primary text-primary-foreground glow"}`}
                >
                  <p>Get Pricing</p> <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Monthly plans */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {monthly.map((m, i) => (
            <Reveal key={m.name} delay={i}>
              <div className="glass flex items-center justify-between gap-6 rounded-3xl p-6 transition hover:glow">
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Monthly Plan</div>
                  <h4 className="mt-1 truncate text-xl font-bold">{m.name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{m.reels}</p>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl font-black text-gradient">{m.price}</div>
                  <div className="text-xs text-muted-foreground">{m.per}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-10 glass rounded-3xl p-8 text-center">
            <h4 className="text-2xl font-bold">Need a Custom Package?</h4>
            <p className="mt-2 text-sm text-muted-foreground">We'll create customized marketing packages for every business.</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow">
              Request Custom Plan <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */

import lkAutoImg from "@/assets/lk-auto.png";
import kottravaiImg from "@/assets/kottravai.PNG";
import sundaramImg from "@/assets/sundaram.png";
import signartsImg from "@/assets/signarts.jpg";

const portfolio = [
  { title: "LK Auto Consulting", cat: "Automobile Sales", handle: "lk_auto_consulting", hue: 300, featured: true, image: lkAutoImg, fit: "contain" as const, bg: "#000000" },
  { title: "Kottravai", cat: "Lifestyle", handle: "kottravai_in", hue: 320, image: kottravaiImg, fit: "contain" as const, bg: "#ffffff" },
  { title: "Sundaram Builders", cat: "Construction", handle: "sundaram_builders__", hue: 310, image: sundaramImg, fit: "cover" as const, bg: "#ffffff" },
  { title: "Sign Arts", cat: "Digital Printing", handle: "signarts.gallery", hue: 290, image: signartsImg, fit: "cover" as const, bg: "#000000" },
];


function Portfolio() {
  const cats = ["All", "Automobile Sales", "Lifestyle", "Construction", "Digital Printing"];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolio : portfolio.filter((p) => p.cat === active);
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Client Showcase"
          title="Brands we've worked with"
          subtitle="Tap any card to visit the client's live Instagram profile."
        />
        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active === c ? "bg-primary text-primary-foreground glow" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <Reveal key={p.handle} delay={i}>
              <a
                href={`https://instagram.com/${p.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border"
                style={{
                  background: `linear-gradient(135deg, oklch(0.22 0.14 ${p.hue}), oklch(0.12 0.08 ${p.hue + 20}))`,
                }}
              >
                <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: p.bg }}>
                  <img
                    src={p.image}
                    alt={`${p.title} logo`}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-110 ${p.fit === "contain" ? "object-contain p-6" : "object-cover"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur transition group-hover:scale-110">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  {p.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">{p.cat === "Digital Printing" ? "PRINTING SERVICES" : p.cat}</div>
                  <div className="mt-1 font-display text-lg font-black text-white">{p.title}</div>
                  <div className="mt-1 text-sm font-medium text-white/70">@{p.handle}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------------- FAQ ---------------- */

const faqs = [
  { q: "How long does editing take?", a: "Standard delivery is within 48 hours per reel. Rush delivery can be arranged on request." },
  { q: "Do you provide video shooting?", a: "Yes. If professional video shooting is required, we have a dedicated production team available." },
  { q: "Do you run advertisements?", a: "Absolutely. We run and optimize Meta (Facebook & Instagram) advertisements - from ₹1,499 per reel onwards." },
  { q: "Can I request revisions?", a: "Yes. Every project includes up to 3 revisions so you get the final cut exactly how you want it." },
  { q: "Do you work outside Tenkasi?", a: "Yes. We serve businesses across Tamil Nadu." },
  { q: "How does payment work?", a: "50% advance to start work, remaining 50% before final delivery. UPI and bank transfer accepted." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="FAQ" title="Have questions? we've got answers." />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i}>
              <div className="glass rounded-2xl">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/20 text-neon transition">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TERMS ---------------- */

function Terms() {
  const items = [
    { icon: Video, title: "Client Assets", text: "Raw footage and brand assets must be provided by the client." },
    { icon: Camera, title: "Video Production", text: "Need professional filming? Our dedicated production team is available upon request." },
    { icon: IndianRupee, title: "Advance Payment", text: "A 50% advance payment is required to confirm your booking and begin the project." },
    { icon: Check, title: "Final Payment", text: "The remaining 50% balance is payable before the final project files are delivered." },
    { icon: Zap, title: "Payment Options", text: "Payments are accepted via UPI & Bank Transfer for a fast and secure transaction." },
    { icon: Sparkles, title: "Revisions", text: "Every project includes up to 3 revisions to ensure the final content meets your expectations." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="WORKING TERMS"
          title="Terms & Conditions"
          subtitle="Simple, transparent terms designed to ensure a smooth and successful collaboration."
        />
        <div className="relative mt-14">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-neon/20 blur-2xl" />
          <div className="relative glass rounded-3xl border border-white/10 p-6 md:p-10 glow">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((t, i) => (
                <Reveal key={t.title} delay={i}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-primary/40">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition group-hover:bg-neon/30" />
                    <div className="relative flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-deep text-white shadow-lg">
                        <t.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.15em] text-neon">Clause {String(i + 1).padStart(2, "0")}</div>
                        <h4 className="mt-1 text-base font-bold">{t.title}</h4>
                        <p className="mt-1.5 text-sm text-muted-foreground">{t.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-center text-xs text-muted-foreground">
              <Sparkles className="h-4 w-4 text-neon" />
              <span>By working with Kontentlee Media, you agree to these terms and conditions.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid email";
    if (!form.phone.match(/^[0-9+\-\s()]{7,}$/)) e.phone = "Enter a valid phone";
    if (!form.message.trim() || form.message.length < 10) e.message = "Tell us a little more (10+ chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const text = `Hi Kontentlee! I'm ${form.name}. ${form.message} — ${form.email} / ${form.phone}`;
    window.open(`https://wa.me/918667455782?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="READY TO GROW?"
          title="Let's grow your brand Together."
          subtitle="Whether you're starting fresh or building your brand, we're here to help."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <Reveal>
            <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-8" noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">FULL NAME</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">PHONE NUMBER</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="+91 …"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">BUSINESS EMAIL</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="you@brand.com"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">TELL US WHAT YOU NEED</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="mt-1.5 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Business, goals, timeline…"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground glow transition hover:scale-[1.01]"
              >
                Send a Message <ArrowRight className="h-4 w-4" />
              </button>
              {sent && <p className="mt-3 text-center text-sm text-neon">Opening WhatsApp… we'll reply shortly ✨</p>}
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={1}>
            <div className="grid gap-4">
              {[
                { icon: Instagram, label: "Instagram", value: "@kontentlee.media", href: "https://instagram.com/kontentlee.media" },
                { icon: Mail, label: "BUSINESS EMAIL", value: "kontentleemedia@gmail.com", href: "mailto:kontentleemedia@gmail.com" },
                { icon: Phone, label: "PHONE", value: "+91 8667455782", href: "tel:+918667455782" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/918667455782" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:glow"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/20 text-neon transition group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="truncate font-semibold">{c.value}</div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              ))}

              {/* Map */}
              <div className="glass overflow-hidden rounded-2xl">
                <div className="flex items-center gap-2 p-4">
                  <MapPin className="h-4 w-4 text-neon" />
                  <span className="text-sm font-semibold">Serving Across Tamil Nadu</span>
                </div>
                <iframe
                  title="Tamil Nadu service area"
                  src="https://www.google.com/maps?q=Tamil+Nadu%2C+India&z=7&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918667455782"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl animate-pulse-glow transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary glow">
                <img src={logo} alt="Kontentlee" className="h-full w-full rounded-2xl object-cover" />
              </div>
              <div className="font-display text-2xl font-black">Kontentlee<span className="text-neon"> Media</span></div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A creative digital marketing agency helping Tamil Nadu businesses grow through creative content and impactful storytelling.
            </p>
            <img src={wordmark} alt="Kontentlee Media" className="mt-6 h-10 w-auto opacity-40 invert" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-foreground">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:kontentleemedia@gmail.com" className="flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-4 w-4 text-neon shrink-0" />
                  <span className="truncate">kontentleemedia@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+918667455782" className="flex items-center gap-2 hover:text-foreground">
                  <Phone className="h-4 w-4 text-neon shrink-0" />
                  <span>+91 8667455782</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/kontentlee.media" className="flex items-center gap-2 hover:text-foreground">
                  <Instagram className="h-4 w-4 text-neon shrink-0" />
                  <span>@kontentlee.media</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neon shrink-0" />
                <span>Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 Kontentlee Media.</div>
          <div className="italic">Content that Creates Impact.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- PAGE ---------------- */

function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Team />
      <Services />
      <WhyChoose />
      <Process />
      <Pricing />
      <Portfolio />
      
      <FAQ />
      <Terms />
      <Contact />
      <Footer />
    </main>
  );
}
