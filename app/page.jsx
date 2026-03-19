
// "use client"

// import Navbar from "./navber/page";
// import Introduction from "./components/Introduction";
// import Demo from "./components/Demo";
// import Contact from "./components/Contact";
// import Subscription from "./components/subscription"

// export default function Home() {
//   return (
//     <div className="bg-[#0A0A0A] min-h-screen font-body">

//       {/* ── Navbar (fixed, handles its own spacer) ──────────────── */}
//       <Navbar />

//       {/* ── Main scroll container ───────────────────────────────── */}
//       <main className="flex flex-col">

//         {/* ── Introduction ──────────────────────────────────────── */}
//         <section id="introduction" className="scroll-mt-16">
//           <Introduction />
//         </section>

//         {/* ── Section Divider ───────────────────────────────────── */}
//         <SectionDivider />

//         {/* ── Demo ──────────────────────────────────────────────── */}
//         <section id="demo" className="scroll-mt-16">
//           <Demo />
//         </section>
//           {/* ── Subcription ──────────────────────────────────────────────── */}
//         <section id="demo" className="scroll-mt-16">
//           <Subscription/>
//         </section>

//         {/* ── Section Divider ───────────────────────────────────── */}
//         <SectionDivider />

//         {/* ── Contact ───────────────────────────────────────────── */}
//         <section id="contact" className="scroll-mt-16">
//           <Contact />
//         </section>

//         {/* ── Footer ────────────────────────────────────────────── */}
//         <Footer />

//       </main>

//       {/* ── Global styles ─────────────────────────────────────────── */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
//         .font-display { font-family: 'Playfair Display', serif; }
//         .font-body    { font-family: 'DM Sans', sans-serif; }
//         html { scroll-behavior: smooth; }
//         * { box-sizing: border-box; }
//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: #0A0A0A; }
//         ::-webkit-scrollbar-thumb { background: #27272A; border-radius: 9999px; }
//         ::-webkit-scrollbar-thumb:hover { background: #3F3F46; }
//       `}</style>
//     </div>
//   );
// }

// /* ─── Section Divider ─────────────────────────────────────────────────────── */
// function SectionDivider() {
//   return (
//     <div className="relative flex items-center justify-center py-2 overflow-hidden">
//       <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
//       <div className="relative flex items-center gap-2 px-6 bg-[#0A0A0A]">
//         <span className="w-1 h-1 rounded-full bg-white/15" />
//         <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
//         <span className="w-1 h-1 rounded-full bg-white/15" />
//       </div>
//     </div>
//   );
// }

// /* ─── Footer ──────────────────────────────────────────────────────────────── */
// function Footer() {
//   const year = new Date().getFullYear();

//   const footerLinks = [
//     { label: "Introduction", href: "#introduction" },
//     { label: "Demo", href: "#demo" },
//      { label: "Subscription", href: "#subscription" },
//     { label: "Contact", href: "#contact" },
//   ];

//   const socials = [
//     { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX", icon: "💬" },
//     { label: "Instagram", href: "https://instagram.com/yourbusiness", icon: "📸" },
//     { label: "Facebook", href: "https://facebook.com/yourbusiness", icon: "👥" },
//     { label: "YouTube", href: "https://youtube.com/@yourbusiness", icon: "▶️" },
//   ];

//   return (
//     <footer className="relative border-t border-white/6 bg-[#0A0A0A] overflow-hidden">

//       <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-50 rounded-full bg-amber-500/5 blur-[100px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14">

//         {/* Top row */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

//           {/* Brand */}
//           <div className="space-y-2">
//             <div className="flex items-center gap-2.5">
//               <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-base">
//                 🍽️
//               </div>
//               <span
//                 className="font-display font-black text-lg tracking-tight"
//                 style={{
//                   background: "linear-gradient(135deg,#FFFFFF 0%,#A1A1AA 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 DigiDine
//               </span>
//             </div>
//             <p className="text-[#3F3F46] text-xs max-w-xs leading-relaxed">
//               Modern restaurant management — digital menus, table booking, live orders & WhatsApp billing.
//             </p>
//           </div>

//           {/* Nav links */}
//           <div className="flex flex-wrap gap-6">
//             {footerLinks.map((l) => (
//               <a
//                 key={l.label}
//                 href={l.href}
//                 className="text-[#52525B] hover:text-amber-400 text-sm transition-colors duration-200"
//               >
//                 {l.label}
//               </a>
//             ))}
//           </div>

//           {/* Socials */}
//           <div className="flex items-center gap-3">
//             {socials.map((s) => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={s.label}
//                 className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-sm hover:bg-amber-500/15 hover:border-amber-500/25 transition-all duration-200"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-white/5 mb-6" />

//         {/* Bottom row */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3F3F46]">
//           <p>© {year} DigiDine. All rights reserved.</p>
//           <div className="flex items-center gap-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//             <span>500+ restaurants growing with DigiDine</span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }


import Navbar from "./navber/page";
import Introduction from "./components/Introduction";
import Demo from "./components/Demo";
import Subscription from "./components/subscription";
import Contact from "./components/Contact";

export const metadata = {
  title: "DigiDine — Digital Menu, Orders & Table Booking",
  description:
    "One platform for your entire restaurant. Digital menus, table reservations, live orders, and WhatsApp billing.",
};

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      <Navbar />

      <main className="flex flex-col">

        <section id="introduction" className="scroll-mt-16">
          <Introduction />
        </section>

        <SectionDivider />

        <section id="demo" className="scroll-mt-16">
          <Demo />
        </section>

        <SectionDivider />

        <section id="subscription" className="scroll-mt-16">
          <Subscription />
        </section>

        <SectionDivider />

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>

        <Footer />

      </main>

    </div>
  );
}

/* ─── Section Divider ─────────────────────────────────────────────────────── */
function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-2 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
      <div className="relative flex items-center gap-2 px-6 bg-[#0A0A0A]">
        <span className="w-1 h-1 rounded-full bg-white/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
        <span className="w-1 h-1 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: "Introduction", href: "#introduction" },
    { label: "Demo",         href: "#demo" },
    { label: "Subscription", href: "#subscription" },
    { label: "Contact",      href: "#contact" },
  ];

  const socials = [
    { label: "WhatsApp",  href: "https://wa.me/91XXXXXXXXXX",          icon: "💬" },
    { label: "Instagram", href: "https://instagram.com/yourbusiness",  icon: "📸" },
    { label: "Facebook",  href: "https://facebook.com/yourbusiness",   icon: "👥" },
    { label: "YouTube",   href: "https://youtube.com/@yourbusiness",   icon: "▶️" },
  ];

  return (
    <footer className="relative border-t border-white/6 bg-[#0A0A0A] overflow-hidden">

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-amber-500/5 blur-[100px]"
        style={{ width: "600px", height: "200px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-base">
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
            </div>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: "#3F3F46" }}>
              Modern restaurant management — digital menus, table booking, live orders & WhatsApp billing.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm transition-colors duration-200 hover:text-amber-400"
                style={{ color: "#52525B" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-sm hover:bg-amber-500/15 hover:border-amber-500/25 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "#3F3F46" }}>
          <p>© {year} DigiDine. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>500+ restaurants growing with DigiDine</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
