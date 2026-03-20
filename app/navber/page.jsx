
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Introduction", href: "#introduction" },
  { name: "Demo",         href: "#demo" },
  { name: "Subscription", href: "#subscription" },
  { name: "Contact",      href: "#contact" },
];

const DEMO_LINK = "https://forms.gle/X2373Edrh3y8UYdE9";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#introduction");
  const [hovered, setHovered] = useState(null);
  const navRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const handleDesktopNavClick = (href) => {
    setActive(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.60)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ───────────────────────────────────────────────── */}
            <a
              href="#introduction"
              onClick={(e) => handleMobileNavClick(e, "#introduction")}
              className="flex items-center gap-2 group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-base transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.30)",
                }}
              >
                🍽️
              </div>
              <span
                className="font-black text-lg tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg,#FFFFFF 0%,#A1A1AA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                DigiDine
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full mb-3 opacity-80"
                style={{ background: "#FBBF24" }}
              />
            </a>

            {/* ── Desktop Nav ─────────────────────────────────────────── */}
            <div
              className="hidden md:flex items-center gap-1 relative"
              onMouseLeave={() => setHovered(null)}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.href;
                const isHov = hovered === item.href;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    ref={(el) => (navRefs.current[item.href] = el)}
                    onClick={() => handleDesktopNavClick(item.href)}
                    onMouseEnter={() => setHovered(item.href)}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 z-10"
                    style={{
                      color: isActive ? "#FFFFFF" : "#71717A",
                      textDecoration: "none",
                    }}
                  >
                    <AnimatePresence>
                      {isHov && !isActive && (
                        <motion.span
                          layoutId="nav-hover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="absolute inset-0 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.05)" }}
                        />
                      )}
                    </AnimatePresence>

                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: "rgba(245,158,11,0.10)",
                          border: "1px solid rgba(245,158,11,0.20)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}

                    <span className="relative z-10">{item.name}</span>

                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "#FBBF24" }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                );
              })}

              {/* Desktop: Book Free Demo — opens Google Form in new tab */}
              <motion.a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative ml-3 px-5 py-2 rounded-xl text-sm font-bold text-black overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg,#F59E0B,#FBBF24)",
                  textDecoration: "none",
                }}
              >
                <span className="relative z-10">Book Free Demo</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>

            {/* ── Mobile Hamburger ────────────────────────────────────── */}
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="md:hidden relative w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                background: isOpen ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.05)",
              }}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-4 rounded-full origin-center"
                style={{ height: "1px", background: "#ffffff" }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-4 rounded-full"
                style={{ height: "1px", background: "#ffffff" }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-4 rounded-full origin-center"
                style={{ height: "1px", background: "#ffffff" }}
              />
            </button>

          </div>
        </div>

        {/* ── Mobile Menu Dropdown ─────────────────────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(10,10,10,0.98)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="px-6 py-4 space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      textDecoration: "none",
                      color: active === item.href ? "#ffffff" : "#71717A",
                      background:
                        active === item.href
                          ? "rgba(245,158,11,0.10)"
                          : "transparent",
                      border:
                        active === item.href
                          ? "1px solid rgba(245,158,11,0.20)"
                          : "1px solid transparent",
                    }}
                  >
                    <span>{item.name}</span>
                    {active === item.href && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#FBBF24" }}
                      />
                    )}
                  </motion.a>
                ))}

                {/* Mobile: Book Free Demo — opens Google Form in new tab */}
                <motion.a
                  href={DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: NAV_ITEMS.length * 0.06 }}
                  className="block mt-3 w-full py-3 rounded-xl text-center font-bold text-sm text-black"
                  style={{
                    background: "linear-gradient(135deg,#F59E0B,#FBBF24)",
                    textDecoration: "none",
                  }}
                >
                  🚀 Book Free Demo
                </motion.a>
              </div>

              <div
                className="px-6 py-3 flex items-center gap-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#34D399" }}
                />
                <span className="text-xs" style={{ color: "#3F3F46" }}>
                  500+ restaurants growing with DigiDine
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to offset fixed nav */}
      <div className="h-16" />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}