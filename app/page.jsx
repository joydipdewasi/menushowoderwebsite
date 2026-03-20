


// import Navbar from "./navber/page";
// import Introduction from "./components/Introduction";
// import Demo from "./components/Demo";
// import Subscription from "./components/subscription";
// import Contact from "./components/Contact";

// export const metadata = {
//   title: "DigiDine — Digital Menu, Orders & Table Booking",
//   description:
//     "One platform for your entire restaurant. Digital menus, table reservations, live orders, and WhatsApp billing.",
// };

// export default function Home() {
//   return (
//     <div className="bg-[#0A0A0A] min-h-screen">

//       <Navbar />

//       <main className="flex flex-col">

//         <section id="introduction" className="scroll-mt-16">
//           <Introduction />
//         </section>

//         <SectionDivider />

//         <section id="demo" className="scroll-mt-16">
//           <Demo />
//         </section>

//         <SectionDivider />

//         <section id="subscription" className="scroll-mt-16">
//           <Subscription />
//         </section>

//         <SectionDivider />

//         <section id="contact" className="scroll-mt-16">
//           <Contact />
//         </section>

//         <Footer />

//       </main>

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
//     { label: "Demo",         href: "#demo" },
//     { label: "Subscription", href: "#subscription" },
//     { label: "Contact",      href: "#contact" },
//   ];

//   const socials = [
//     { label: "WhatsApp",  href: "https://wa.me/91XXXXXXXXXX",          icon: "💬" },
//     { label: "Instagram", href: "https://instagram.com/yourbusiness",  icon: "📸" },
//     { label: "Facebook",  href: "https://facebook.com/yourbusiness",   icon: "👥" },
//     { label: "YouTube",   href: "https://youtube.com/@yourbusiness",   icon: "▶️" },
//   ];

//   return (
//     <footer className="relative border-t border-white/6 bg-[#0A0A0A] overflow-hidden">

//       <div
//         className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-amber-500/5 blur-[100px]"
//         style={{ width: "600px", height: "200px" }}
//       />

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
//                 className="font-black text-lg tracking-tight"
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   background: "linear-gradient(135deg,#FFFFFF 0%,#A1A1AA 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 DigiDine
//               </span>
//             </div>
//             <p className="text-xs max-w-xs leading-relaxed" style={{ color: "#3F3F46" }}>
//               Modern restaurant management — digital menus, table booking, live orders & WhatsApp billing.
//             </p>
//           </div>

//           {/* Nav links */}
//           <div className="flex flex-wrap gap-6">
//             {footerLinks.map((l) => (
//               <a
//                 key={l.label}
//                 href={l.href}
//                 className="text-sm transition-colors duration-200 hover:text-amber-400"
//                 style={{ color: "#52525B" }}
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
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "#3F3F46" }}>
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
    <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "2px" }}>
      {/* Full-width line */}
      <div
        className="absolute inset-x-0 top-0 bottom-0"
        style={{ background: "rgba(255,255,255,0.12)" }}
      />
      {/* Amber glow overlay */}
      <div
        className="absolute inset-x-0 top-0 bottom-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.35) 40%, rgba(245,158,11,0.35) 60%, transparent 100%)",
        }}
      />
      {/* Three dots centered */}
      <div
        className="relative flex items-center gap-2 px-5"
        style={{ background: "#0A0A0A", position: "absolute", top: "50%", transform: "translateY(-50%)" }}
      >
        <span className="rounded-full block" style={{ width: "5px", height: "5px", background: "rgba(255,255,255,0.35)" }} />
        <span className="rounded-full block" style={{ width: "7px", height: "7px", background: "rgba(245,158,11,0.85)", boxShadow: "0 0 8px rgba(245,158,11,0.6)" }} />
        <span className="rounded-full block" style={{ width: "5px", height: "5px", background: "rgba(255,255,255,0.35)" }} />
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
    { label: "WhatsApp",  href: "https://wa.me/91XXXXXXXXXX",         icon: "💬" },
    { label: "Instagram", href: "https://instagram.com/yourbusiness", icon: "📸" },
    { label: "Facebook",  href: "https://facebook.com/yourbusiness",  icon: "👥" },
    { label: "YouTube",   href: "https://youtube.com/@yourbusiness",  icon: "▶️" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
    >
      <style>{`
        .footer-social:hover {
          background: rgba(245,158,11,0.15) !important;
          border-color: rgba(245,158,11,0.25) !important;
        }
        .footer-link:hover {
          color: #FBBF24 !important;
        }
      `}</style>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-[100px]"
        style={{ width: "600px", height: "200px", background: "rgba(245,158,11,0.05)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-base"
                style={{
                  background: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.25)",
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
                className="footer-link text-sm transition-colors duration-200"
                style={{ color: "#52525B", textDecoration: "none" }}
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
                className="footer-social w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.05)" }} />

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