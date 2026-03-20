"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LINKS = {
  googleForm: "https://forms.gle/GoGKJnEQM5YDGFYa9",
  whatsapp: "https://wa.me/91XXXXXXXXXX", // ← replace with your number
  instagram: "https://instagram.com/yourbusiness",
  facebook: "https://facebook.com/yourbusiness",
  youtube: "https://youtube.com/@yourbusiness",
};

const INFO_ITEMS = [
  { icon: "📍", label: "Location", value: "Serving restaurants across India" },
  { icon: "⏱️", label: "Response Time", value: "Within 2 hours, any day" },
  { icon: "💬", label: "WhatsApp Support", value: "24 / 7 live assistance" },
  { icon: "🎁", label: "Free Trial", value: "1 month, no credit card" },
];

const SOCIALS = [
  // {
  //   href: LINKS.whatsapp,
  //   label: "WhatsApp",
  //   sub: "Chat instantly",
  //   color: "#25D366",
  //   bg: "from-[#25D366]/12 to-transparent",
  //   border: "border-[#25D366]/25",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  //       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: LINKS.instagram,
  //   label: "Instagram",
  //   sub: "See our work",
  //   color: "#E1306C",
  //   bg: "from-[#E1306C]/12 to-transparent",
  //   border: "border-[#E1306C]/25",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: LINKS.facebook,
  //   label: "Facebook",
  //   sub: "Join community",
  //   color: "#1877F2",
  //   bg: "from-[#1877F2]/12 to-transparent",
  //   border: "border-[#1877F2]/25",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: LINKS.youtube,
  //   label: "YouTube",
  //   sub: "Watch demos",
  //   color: "#FF0000",
  //   bg: "from-[#FF0000]/12 to-transparent",
  //   border: "border-[#FF0000]/25",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  //       <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  //     </svg>
  //   ),
  // },
];

export default function ContactPage() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });

  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden font-body flex items-center justify-center py-20 px-6">

      {/* ── Ambient BG ───────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-125 h-125 rounded-full bg-amber-500/7 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 rounded-full bg-rose-600/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl">

        {/* ── Section Label ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold tracking-[0.15em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Get In Touch
          </span>
        </motion.div>

        {/* ── Main Card ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">

          {/* ════ LEFT: Branding Panel ════════════════════════════════ */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-[42%] bg-[#0D0D0D] p-10 flex flex-col justify-between overflow-hidden"
          >
            {/* Top amber shimmer line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
            {/* Ambient glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

            <div className="relative">
              {/* Logo mark */}
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-xl mb-8">
                🍽️
              </div>

              <h1
                className="font-display text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4"
                style={{
                  background: "linear-gradient(135deg,#FFFFFF 0%,#A1A1AA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Let's Build Your{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#F59E0B,#FCD34D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Digital Restaurant.
                </span>
              </h1>

              <p className="text-[#71717A] text-[15px] leading-relaxed mb-10">
                Questions about our platform? Ready to start your free trial?
                We're available every day — reach us on any channel.
              </p>

              {/* Info list */}
              <div className="space-y-4">
                {INFO_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={leftInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-base shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#52525B] text-[10px] uppercase tracking-[0.12em] font-semibold">{item.label}</p>
                      <p className="text-[#D4D4D8] text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom tagline */}
            {/* <p className="relative text-[#3F3F46] text-xs mt-10 italic">
              "Join 500+ restaurants growing with DigiDine."
            </p> */}
          </motion.div>

          {/* ════ RIGHT: Contact Options ══════════════════════════════ */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[58%] bg-[#0F0F0F] p-10 flex flex-col justify-center"
          >
            <h2 className="text-white font-display font-black text-2xl mb-1">Choose How to Reach Us</h2>
            <p className="text-[#52525B] text-sm mb-8">All channels lead to the same friendly team.</p>

            {/* Primary CTA — Google Form */}
            <motion.a
              href={LINKS.googleForm}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-4 w-full p-5 rounded-2xl mb-6 overflow-hidden group"
              style={{ background: "linear-gradient(135deg,#F59E0B,#FBBF24)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-black/15 flex items-center justify-center text-xl shrink-0">
                📩
              </div>
              <div className="flex-1">
                <p className="text-black font-black text-[15px] leading-tight">Send a Message</p>
                <p className="text-black/60 text-xs mt-0.5">Fill our quick form — we reply within 2 hours</p>
              </div>
              <svg className="w-5 h-5 text-black/60 transition-transform group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/6" />
              <span className="text-[#3F3F46] text-[10px] uppercase tracking-[0.2em] font-semibold">or connect on</span>
              <div className="flex-1 h-px bg-white/6" />
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className={`group relative flex items-center gap-3 p-4 rounded-2xl border bg-linear-to-br ${s.bg} ${s.border} overflow-hidden`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: s.color, background: `${s.color}18` }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{s.label}</p>
                    <p className="text-[#52525B] text-[11px] mt-0.5">{s.sub}</p>
                  </div>
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `${s.color}08` }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Response promise */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/3 border border-white/6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0 text-sm">
                ⚡
              </div>
              <p className="text-[#71717A] text-xs leading-relaxed">
                <span className="text-emerald-400 font-semibold">Usually responds in under 2 hours</span> — Monday to Sunday, 9 AM – 10 PM IST. WhatsApp is fastest.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>
    </section>
  );
}