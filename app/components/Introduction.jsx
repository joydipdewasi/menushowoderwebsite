"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// ─── Feature Card Data ───────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "🍽️",
    label: "Digital Menu",
    desc: "Interactive, real-time menus with high-res visuals.",
    accent: "#F59E0B",
    bg: "from-amber-500/10 to-transparent",
  },
  {
    icon: "🪑",
    label: "Table Booking",
    desc: "Instant reservations — zero wait, zero hassle.",
    accent: "#10B981",
    bg: "from-emerald-500/10 to-transparent",
  },
  {
    icon: "🛒",
    label: "Direct Ordering",
    desc: "Customers order from the table in one tap.",
    accent: "#6366F1",
    bg: "from-indigo-500/10 to-transparent",
  },
  {
    icon: "💬",
    label: "WhatsApp Billing",
    desc: "Auto invoices sent straight to customer phones.",
    accent: "#F43F5E",
    bg: "from-rose-500/10 to-transparent",
  },
];

// ─── Animated Counter ────────────────────────────────────────────────────────
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Floating Badge ───────────────────────────────────────────────────────────
function FloatingBadge({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 3, delay, repeat: Infinity, ease: "easeInOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function IntroductionPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const [mediaType] = useState("image");

  // Watch Demo: scroll to #demo section smoothly
  const handleWatchDemo = (e) => {
    e.preventDefault();
    const target = document.querySelector("#demo");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden font-sans"
    >
      {/* ── Google Fonts Import (Alternative to style-jsx) ── */}
      <link href="https://forms.gle/GoGKJnEQM5YDGFYa9" rel="stylesheet" />

      {/* ── Ambient Background ─────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />
        <div className="absolute -top-32 -left-32 w-150 h-150 rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-indigo-600/6 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Inner Layout ───────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* ══ LEFT: Text Content ══════════════════════════════════════ */}
        <div className="w-full lg:w-[52%] space-y-8">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Restaurant Tech Platform
            </span>
          </motion.div>

          <div className="space-y-2 overflow-hidden">
            {["Serve Smarter.", "Grow Faster."].map((line, i) => (
              <motion.h1
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: i === 0
                    ? "linear-gradient(135deg, #FFFFFF 0%, #D1D5DB 100%)"
                    : "linear-gradient(135deg, #F59E0B 0%, #FBBF24 60%, #FCD34D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[#A1A1AA] text-lg leading-relaxed max-w-xl font-['DM_Sans']"
          >
            One platform for your entire restaurant — digital menus, table reservations,
            live orders, and WhatsApp billing. Built for modern restaurants that want
            to delight every guest and grow every month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="grid grid-cols-2 gap-3"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                whileHover={{ y: -3, scale: 1.02 }}
                className={`group relative p-4 rounded-2xl border border-white/6 bg-linear-to-br ${f.bg} backdrop-blur-sm cursor-default overflow-hidden font-['DM_Sans']`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{ background: `${f.accent}15` }}
                />
                <div className="relative">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <p className="font-semibold text-white text-sm leading-tight">{f.label}</p>
                  <p className="text-[#71717A] text-xs mt-1 leading-snug">{f.desc}</p>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: f.accent }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex items-center gap-8 pt-2"
          >
            {[
              { val: 500, suffix: "+", label: "Restaurants" },
              { val: 98, suffix: "%", label: "Satisfaction" },
              { val: 3, suffix: "x", label: "Sales Growth" },
            ].map((s) => (
              <div key={s.label} className="text-center font-['DM_Sans']">
                <p className="text-2xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Counter end={s.val} suffix={s.suffix} />
                </p>
                <p className="text-[#52525B] text-xs mt-0.5 tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4 pt-2 font-['DM_Sans']"
          >
            {/* Boost Your Sales Now → opens Google Form in new tab */}
            <motion.a
              href="https://forms.gle/X2373Edrh3y8UYdE9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 rounded-full font-bold text-sm text-black overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)", textDecoration: "none" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Boost Your Sales Now
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Watch Demo → scrolls to #demo section */}
            <motion.button
              onClick={handleWatchDemo}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full font-bold text-sm text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              Watch Demo →
            </motion.button>
          </motion.div>
        </div>

        {/* ══ RIGHT: Media ════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[48%] relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/8">
            <motion.div style={{ y: imageY }} className="will-change-transform">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern Restaurant"
                className="w-full h-130 object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 font-['DM_Sans']">
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium mb-1">Powered by</p>
              <p className="text-white font-bold text-xl tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>DigiDine Platform</p>
            </div>
          </div>

          <FloatingBadge delay={1.4} className="absolute -left-6 top-10 z-20 font-['DM_Sans']">
            <div className="flex items-center gap-3 bg-[#111111] border border-white/10 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-base">✅</div>
              <div>
                <p className="text-white text-xs font-semibold">New Order!</p>
                <p className="text-[#71717A] text-[10px]">Table 7 · Paneer Tikka ×2</p>
              </div>
            </div>
          </FloatingBadge>

          <FloatingBadge delay={1.7} className="absolute -right-4 top-14 z-20 font-['DM_Sans']">
            <div className="flex items-center gap-2 bg-amber-500 text-black rounded-xl px-3 py-2 shadow-lg shadow-amber-500/30">
              <span className="text-sm">🪑</span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wide">Table Booked</p>
                <p className="text-[10px] opacity-70">4 guests · 8:00 PM</p>
              </div>
            </div>
          </FloatingBadge>

          <FloatingBadge delay={2.0} className="absolute -right-6 bottom-20 z-20 font-['DM_Sans']">
            <div className="bg-[#111111] border border-white/10 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm min-w-35">
              <p className="text-[#71717A] text-[10px] uppercase tracking-wide mb-1">Today's Revenue</p>
              <p className="text-white font-black text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>₹24,850</p>
              <p className="text-emerald-400 text-[10px] mt-0.5">↑ 18% vs yesterday</p>
            </div>
          </FloatingBadge>

          <FloatingBadge delay={2.3} className="absolute -left-4 bottom-16 z-20 font-['DM_Sans']">
            <div className="flex items-center gap-2 bg-[#128C7E] text-white rounded-xl px-3 py-2 shadow-lg shadow-emerald-900/40">
              <span className="text-sm">💬</span>
              <p className="text-[10px] font-semibold">Bill sent via WhatsApp</p>
            </div>
          </FloatingBadge>

          <div className="absolute -inset-4 -z-10 rounded-3xl bg-amber-500/6 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}