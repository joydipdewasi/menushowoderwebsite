
// "use client";

// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";

// // ─── Plan Data ────────────────────────────────────────────────────────────────
// const PLANS = [
//   {
//     id: "basic",
//     name: "Menu Pro",
//     tagline: "Perfect for small eateries",
//     emoji: "🍽️",
//     color: "#6366F1",
//     colorLight: "#6366F1",
//     bg: "from-indigo-500/10 to-transparent",
//     border: "border-indigo-500/20",
//     glow: "shadow-indigo-500/10",
//     oneTime: 1000,
//     monthly: 50,
//     yearly: 500,
//     popular: false,
//     features: [
//       { text: "Digital Menu Display", included: true },
//       { text: "Menu Add / Edit / Delete", included: true },
//       { text: "Admin Panel", included: true },
//       { text: "Help Support within 2 hrs", included: true },
//       { text: "Online Ordering", included: false },
//       { text: "WhatsApp Billing", included: false },
//       { text: "Table & Chair Booking", included: false },
//       { text: "Daily Summary + PDF Export", included: false },
//       { text: "Table Confirmation via WhatsApp", included: false },
//     ],
//   },
//   {
//     id: "growth",
//     name: "Order Pro",
//     tagline: "For growing restaurants",
//     emoji: "🛒",
//     color: "#F59E0B",
//     colorLight: "#F59E0B",
//     bg: "from-amber-500/12 to-transparent",
//     border: "border-amber-500/30",
//     glow: "shadow-amber-500/15",
//     oneTime: 2000,
//     monthly: 150,
//     yearly: 1500,
//     popular: true,
//     features: [
//       { text: "Digital Menu Display", included: true },
//       { text: "Menu Add / Edit / Delete", included: true },
//       { text: "Admin Panel", included: true },
//       { text: "Help Support within 2 hrs", included: true },
//       { text: "Online Ordering System", included: true },
//       { text: "WhatsApp Billing", included: true },
//       { text: "Daily Summary + PDF Export", included: true },
//       { text: "Table & Chair Booking", included: false },
//       { text: "Table Confirmation via WhatsApp", included: false },
//     ],
//   },
//   {
//     id: "ultimate",
//     name: "Restaurant OS",
//     tagline: "Full restaurant management",
//     emoji: "🏆",
//     color: "#10B981",
//     colorLight: "#10B981",
//     bg: "from-emerald-500/10 to-transparent",
//     border: "border-emerald-500/20",
//     glow: "shadow-emerald-500/10",
//     oneTime: 2500,
//     monthly: 250,
//     yearly: 2800,
//     popular: false,
//     features: [
//       { text: "Digital Menu Display", included: true },
//       { text: "Menu Add / Edit / Delete", included: true },
//       { text: "Admin Panel", included: true },
//       { text: "Help Support within 2 hrs", included: true },
//       { text: "Online Ordering System", included: true },
//       { text: "WhatsApp Billing", included: true },
//       { text: "Daily Summary + PDF Export", included: true },
//       { text: "Table & Chair Booking", included: true },
//       { text: "Table Confirmation via WhatsApp", included: true },
//     ],
//   },
// ];

// const GOOGLE_FORM = "https://forms.gle/GoGKJnEQM5YDGFYa9";

// // ─── Billing Toggle — only Monthly / Yearly ───────────────────────────────────
// function BillingToggle({ billing, setBilling }) {
//   return (
//     <div className="flex items-center justify-center gap-3 mb-14">
//       {["monthly", "yearly"].map((b) => (
//         <button
//           key={b}
//           onClick={() => setBilling(b)}
//           className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 capitalize ${
//             billing === b ? "text-black" : "text-[#71717A] border border-white/10 hover:text-white"
//           }`}
//         >
//           {billing === b && (
//             <motion.span
//               layoutId="billing-pill"
//               className="absolute inset-0 rounded-full"
//               style={{ background: "linear-gradient(135deg,#F59E0B,#FBBF24)" }}
//               transition={{ type: "spring", stiffness: 380, damping: 30 }}
//             />
//           )}
//           <span className="relative z-10">{b === "yearly" ? "Yearly" : "Monthly"}</span>
//           {b === "yearly" && (
//             <span className={`relative z-10 ml-1.5 text-[9px] font-black px-1.5 py-0.5 rounded-full ${
//               billing === "yearly" ? "bg-black/15 text-black" : "bg-emerald-500/15 text-emerald-400"
//             }`}>
//               SAVE
//             </span>
//           )}
//         </button>
//       ))}
//     </div>
//   );
// }

// // ─── Plan Card ────────────────────────────────────────────────────────────────
// function PlanCard({ plan, billing, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });

//   // Active subscription price (monthly or yearly)
//   const price = billing === "yearly" ? plan.yearly : plan.monthly;
//   const priceLabel = billing === "yearly" ? "/year" : "/month";

//   // Yearly savings vs paying monthly for 12 months
//   const yearlySaving = plan.monthly * 12 - plan.yearly;
//   const savingPct = Math.round((yearlySaving / (plan.monthly * 12)) * 100);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
//       className={`relative flex flex-col rounded-3xl border ${plan.border} overflow-hidden`}
//       style={{
//         background: "linear-gradient(180deg, #0F0F0F 0%, #0A0A0A 100%)",
//         boxShadow: plan.popular ? `0 0 60px ${plan.color}22` : undefined,
//       }}
//     >
//       {/* Top color bar */}
//       <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${plan.color}60, transparent)` }} />

//       {/* Popular badge */}
//       {plan.popular && (
//         <div className="absolute -top-px left-1/2 -translate-x-1/2">
//           <div className="px-4 py-1 rounded-b-xl text-[10px] font-black uppercase tracking-[0.15em] text-black"
//             style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)" }}>
//             Most Popular
//           </div>
//         </div>
//       )}

//       <div className="p-7 flex flex-col flex-1">

//         {/* Header */}
//         <div className="flex items-start justify-between mb-6">
//           <div>
//             <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-4"
//               style={{ background: `${plan.color}18`, border: `1px solid ${plan.color}30` }}>
//               {plan.emoji}
//             </div>
//             <h3 className="font-display font-black text-white text-xl leading-tight">{plan.name}</h3>
//             <p className="text-[#52525B] text-xs mt-1">{plan.tagline}</p>
//           </div>
//           {billing === "yearly" && (
//             <span className="text-[10px] font-black px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 mt-1">
//               -{savingPct}%
//             </span>
//           )}
//         </div>

//         {/* ── Price Block ── */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={billing + plan.id}
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.2 }}
//             className="mb-4"
//           >
//             {/* Main subscription price */}
//             <div className="flex items-end gap-1">
//               <span className="text-[#71717A] text-lg font-semibold">₹</span>
//               <span className="font-display font-black text-white leading-none"
//                 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
//                 {price.toLocaleString("en-IN")}
//               </span>
//               <span className="text-[#52525B] text-sm mb-1">{priceLabel}</span>
//             </div>

//             {/* Monthly view: show yearly price + saving side by side */}
//             {billing === "monthly" && (
//               <div className="mt-2 flex items-center gap-2 flex-wrap">
//                 <span className="text-[#52525B] text-xs">or</span>
//                 <span className="text-[#A1A1AA] text-xs font-semibold">
//                   ₹{plan.yearly.toLocaleString("en-IN")}/year
//                 </span>
//                 <span className="text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
//                   save ₹{yearlySaving.toLocaleString("en-IN")}
//                 </span>
//               </div>
//             )}

//             {/* Yearly view: show saving message */}
//             {billing === "yearly" && (
//               <p className="text-emerald-400 text-xs mt-2">
//                 Save ₹{yearlySaving.toLocaleString("en-IN")} vs monthly
//               </p>
//             )}

//             {/* One-time cost — always visible below subscription price */}
//             <div className="mt-3 pt-3 border-t border-white/6">
//               <div className="flex items-center justify-between">
//                 <span className="text-[#52525B] text-xs">One-time setup fee</span>
//                 <span className="text-[#A1A1AA] text-xs font-bold">
//                   ₹{plan.oneTime.toLocaleString("en-IN")}
//                 </span>
//               </div>
//               <p className="text-[#3F3F46] text-[10px] mt-1">
//                 Paid once when you buy · then pay monthly or yearly
//               </p>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Features */}
//         <div className="space-y-2.5 mb-8 flex-1">
//           {plan.features.map((f) => (
//             <div key={f.text} className="flex items-center gap-2.5">
//               <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
//                 f.included
//                   ? "bg-emerald-500/15 border border-emerald-500/30"
//                   : "bg-white/4 border border-white/8"
//               }`}>
//                 {f.included ? (
//                   <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
//                   </svg>
//                 ) : (
//                   <svg className="w-2.5 h-2.5 text-[#3F3F46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 )}
//               </div>
//               <span className={`text-sm ${f.included ? "text-[#D4D4D8]" : "text-[#3F3F46] line-through"}`}>
//                 {f.text}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* CTAs */}
//         <div className="space-y-3">
//           {/* Primary — Buy */}
//           <motion.a
//             href={GOOGLE_FORM}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             className="relative block w-full py-3.5 rounded-2xl text-center font-bold text-sm overflow-hidden group"
//             style={
//               plan.popular
//                 ? { background: "linear-gradient(135deg,#F59E0B,#FBBF24)", color: "#000" }
//                 : { background: `${plan.color}18`, color: plan.color, border: `1px solid ${plan.color}35` }
//             }
//           >
//             <span className="relative z-10">
//               Buy Now — ₹{plan.oneTime.toLocaleString("en-IN")} + ₹{price.toLocaleString("en-IN")}{priceLabel}
//             </span>
//             {plan.popular && <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
//           </motion.a>

//           {/* Secondary — Free Trial */}
//           <motion.a
//             href={GOOGLE_FORM}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-center text-sm font-semibold text-[#71717A] border border-white/8 hover:border-white/15 hover:text-white transition-all duration-200"
//           >
//             <span className="text-base">🎁</span>
//             Start Free Trial
//           </motion.a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Free Trial Banner ────────────────────────────────────────────────────────
// function FreeTrialBanner() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mt-16 rounded-3xl overflow-hidden border border-amber-500/20"
//       style={{ background: "linear-gradient(135deg, #0F0F0F 0%, #111008 100%)" }}
//     >
//       {/* Top shimmer */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
//       {/* Glow */}
//       <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />

//       <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">

//         {/* Left */}
//         <div className="text-center md:text-left">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
//             <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
//             Try Before You Buy
//           </div>
//           <h3
//             className="font-display font-black text-3xl md:text-4xl leading-tight mb-2"
//             style={{
//               background: "linear-gradient(135deg,#FFFFFF 0%,#D1D5DB 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             1 Month Free Trial
//           </h3>
//           <p className="text-[#71717A] text-sm max-w-md leading-relaxed">
//             All plans include a full 1-month free trial with every feature unlocked.
//             You only pay{" "}
//             <span className="text-amber-400 font-bold">₹50 for a demo printout</span>
//             {" "}— that's it. No hidden charges.
//           </p>

//           {/* What you get */}
//           <div className="flex flex-wrap gap-3 mt-5">
//             {["Full Access", "No Credit Card", "Cancel Anytime", "Setup Included"].map((t) => (
//               <span key={t} className="flex items-center gap-1.5 text-xs text-[#A1A1AA] bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
//                 <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
//                 </svg>
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Right — price highlight */}
//         <div className="shrink-0 text-center">
//           <div
//             className="relative inline-flex flex-col items-center justify-center w-44 h-44 rounded-full border-2 border-amber-500/30"
//             style={{ background: "radial-gradient(circle, #F59E0B12 0%, transparent 70%)" }}
//           >
//             <p className="text-[#71717A] text-xs uppercase tracking-widest mb-1">Only Pay</p>
//             <div className="flex items-start">
//               <span className="text-amber-400 text-lg font-bold mt-1">₹</span>
//               <span className="font-display font-black text-amber-400 text-6xl leading-none">50</span>
//             </div>
//             <p className="text-[#71717A] text-[11px] mt-1">for print only</p>

//             {/* Orbit dot */}
//             <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
//           </div>

//           <motion.a
//             href={GOOGLE_FORM}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black"
//             style={{ background: "linear-gradient(135deg,#F59E0B,#FBBF24)" }}
//           >
//             🚀 Claim Free Trial
//           </motion.a>
//           <p className="text-[#3F3F46] text-[10px] mt-2">Opens Google Form · 60 seconds</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── FAQ ──────────────────────────────────────────────────────────────────────
// const FAQS = [
//   { q: "Can I switch plans later?", a: "Yes — upgrade or downgrade anytime. We'll adjust your billing accordingly." },
//   { q: "What happens after the free trial?", a: "You choose a plan and pay. If you don't continue, no charge — ever." },
//   { q: "Is setup included?", a: "Yes. We set everything up for you — menu, admin panel, WhatsApp integration — at no extra cost." },
//   { q: "What does ₹50 cover?", a: "Just the physical demo printout we hand you during onboarding. One-time, nothing more." },
// ];

// function FAQ() {
//   const [open, setOpen] = useState(null);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   return (
//     <div ref={ref} className="mt-16">
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//         className="font-display font-black text-white text-2xl mb-6 text-center"
//       >
//         Common Questions
//       </motion.h2>
//       <div className="max-w-2xl mx-auto space-y-3">
//         {FAQS.map((faq, i) => (
//           <motion.div
//             key={faq.q}
//             initial={{ opacity: 0, y: 12 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.4, delay: i * 0.07 }}
//             className="rounded-2xl border border-white/8 bg-[#0F0F0F] overflow-hidden"
//           >
//             <button
//               onClick={() => setOpen(open === i ? null : i)}
//               className="w-full flex items-center justify-between px-5 py-4 text-left"
//             >
//               <span className="text-[#D4D4D8] text-sm font-medium">{faq.q}</span>
//               <motion.span
//                 animate={{ rotate: open === i ? 45 : 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="text-[#52525B] text-xl leading-none shrink-0 ml-4"
//               >
//                 +
//               </motion.span>
//             </button>
//             <AnimatePresence>
//               {open === i && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.25 }}
//                   className="overflow-hidden"
//                 >
//                   <p className="px-5 pb-4 text-[#71717A] text-sm leading-relaxed">{faq.a}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function SubscriptionPage() {
//   const [billing, setBilling] = useState("monthly");
//   const headerRef = useRef(null);
//   const headerInView = useInView(headerRef, { once: true });

//   return (
//     <section className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden font-body">

//       {/* Ambient BG */}
//       <div className="pointer-events-none absolute inset-0">
//         {/* FIX: w-150/h-150/w-125/h-125 invalid Tailwind → inline styles */}
//         <div className="absolute top-0 left-1/4 rounded-full bg-amber-500/5 blur-[150px]"
//           style={{ width: "600px", height: "600px" }} />
//         <div className="absolute bottom-0 right-1/4 rounded-full bg-indigo-600/5 blur-[130px]"
//           style={{ width: "500px", height: "500px" }} />
//         <div
//           className="absolute inset-0 opacity-[0.022]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

//         {/* ── Header ───────────────────────────────────────────────── */}
//         <div ref={headerRef} className="text-center mb-5">
//           <motion.span
//             initial={{ opacity: 0, y: 16 }}
//             animate={headerInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold tracking-[0.15em] uppercase mb-6"
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
//             Simple Pricing
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={headerInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//             className="font-display font-black leading-[1.05] tracking-tight mb-4"
//             style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
//           >
//             <span style={{
//               background: "linear-gradient(135deg,#FFFFFF 0%,#A1A1AA 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}>
//               Choose Your Plan.
//             </span>
//             <br />
//             <span style={{
//               background: "linear-gradient(135deg,#F59E0B 0%,#FCD34D 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}>
//               Grow Your Restaurant.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={headerInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             className="text-[#71717A] text-lg max-w-xl mx-auto leading-relaxed"
//           >
//             All plans include a free 1-month trial. Pay only ₹50 for your welcome printout.
//           </motion.p>
//         </div>

//         {/* ── Billing Toggle ────────────────────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={headerInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <BillingToggle billing={billing} setBilling={setBilling} />
//         </motion.div>

//         {/* ── Plan Cards ────────────────────────────────────────────── */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//           {PLANS.map((plan, i) => (
//             <PlanCard key={plan.id} plan={plan} billing={billing} index={i} />
//           ))}
//         </div>

//         {/* ── Free Trial Banner ─────────────────────────────────────── */}
//         <FreeTrialBanner />

//         {/* ── FAQ ──────────────────────────────────────────────────── */}
//         <FAQ />

//         {/* ── Bottom note ──────────────────────────────────────────── */}
//         <p className="text-center text-[#3F3F46] text-xs mt-10">
//           All prices in Indian Rupees (₹) · GST may apply · Instant support for all paid plans
//         </p>

//       </div>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
//         .font-display { font-family: 'Playfair Display', serif; }
//         .font-body    { font-family: 'DM Sans', sans-serif; }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Plan Data ────────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: "basic",
    name: "Menu Pro",
    tagline: "Perfect for small eateries",
    emoji: "🍽️",
    color: "#6366F1",
    oneTime: 1000,
    monthly: 50,
    yearly: 500,
    popular: false,
    highlight: false,
  },
  {
    id: "growth",
    name: "Order Pro",
    tagline: "For growing restaurants",
    emoji: "🛒",
    color: "#F59E0B",
    oneTime: 2000,
    monthly: 150,
    yearly: 1500,
    popular: true,
    highlight: false,
  },
  {
    id: "ultimate",
    name: "Restaurant OS",
    tagline: "Full restaurant management",
    emoji: "🏆",
    color: "#10B981",
    oneTime: 2500,
    monthly: 250,
    yearly: 2800,
    popular: false,
    highlight: true,
  },
];

const PLAN_FEATURES = {
  basic: [
    { text: "Digital Menu Display", included: true },
    { text: "Menu Add / Edit / Delete", included: true },
    { text: "Admin Panel", included: true },
    { text: "Help Support within 2 hrs", included: true },
    { text: "Online Ordering", included: false },
    { text: "WhatsApp Billing", included: false },
    { text: "Table & Chair Booking", included: false },
    { text: "Daily Summary + PDF Export", included: false },
    { text: "Table Confirmation via WhatsApp", included: false },
  ],
  growth: [
    { text: "Digital Menu Display", included: true },
    { text: "Menu Add / Edit / Delete", included: true },
    { text: "Admin Panel", included: true },
    { text: "Help Support within 2 hrs", included: true },
    { text: "Online Ordering System", included: true },
    { text: "WhatsApp Billing", included: true },
    { text: "Daily Summary + PDF Export", included: true },
    { text: "Table & Chair Booking", included: false },
    { text: "Table Confirmation via WhatsApp", included: false },
  ],
  ultimate: [
    { text: "Digital Menu Display", included: true },
    { text: "Menu Add / Edit / Delete", included: true },
    { text: "Admin Panel", included: true },
    { text: "Help Support within 2 hrs", included: true },
    { text: "Online Ordering System", included: true },
    { text: "WhatsApp Billing", included: true },
    { text: "Daily Summary + PDF Export", included: true },
    { text: "Table & Chair Booking", included: true },
    { text: "Table Confirmation via WhatsApp", included: true },
  ],
};

const GOOGLE_FORM = "https://forms.gle/X2373Edrh3y8UYdE9";

// ─── Billing Toggle ───────────────────────────────────────────────────────────
function BillingToggle({ billing, setBilling }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-14">
      {["monthly", "yearly"].map((b) => (
        <button
          key={b}
          onClick={() => setBilling(b)}
          className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 capitalize ${
            billing === b ? "text-black" : "text-[#71717A] border border-white/10 hover:text-white"
          }`}
        >
          {billing === b && (
            <motion.span
              layoutId="billing-pill"
              className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(135deg,#F59E0B,#FBBF24)" }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{b === "yearly" ? "Yearly" : "Monthly"}</span>
          {b === "yearly" && (
            <span className={`relative z-10 ml-1.5 text-[9px] font-black px-1.5 py-0.5 rounded-full ${
              billing === "yearly" ? "bg-black/15 text-black" : "bg-emerald-500/15 text-emerald-400"
            }`}>
              SAVE
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── Plan Card ────────────────────────────────────────────────────────────────
function PlanCard({ plan, billing, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const features = PLAN_FEATURES[plan.id];
  const price = billing === "yearly" ? plan.yearly : plan.monthly;
  const priceLabel = billing === "yearly" ? "/year" : "/month";
  const yearlySaving = plan.monthly * 12 - plan.yearly;
  const savingPct = Math.round((yearlySaving / (plan.monthly * 12)) * 100);
  const isHighlight = plan.highlight;

  // FIX: use only `border` shorthand — no borderColor to avoid conflict
  const cardStyle = {
    background: isHighlight
      ? "linear-gradient(180deg, #0d1f18 0%, #0A0A0A 100%)"
      : "linear-gradient(180deg, #0F0F0F 0%, #0A0A0A 100%)",
    border: isHighlight
      ? `2px solid ${plan.color}70`
      : `1px solid ${plan.color}40`,
    boxShadow: isHighlight
      ? `0 0 90px ${plan.color}35, 0 0 30px ${plan.color}15`
      : `0 0 40px ${plan.color}15`,
    borderRadius: "1.5rem",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transform: isHighlight ? "scale(1.03)" : "scale(1)",
    zIndex: isHighlight ? 10 : 1,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={cardStyle}
    >
      {/* Top color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${plan.color}90, transparent)` }}
      />

      {/* Highlight badge */}
      {isHighlight && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <div
            className="px-4 py-1 rounded-b-xl text-[10px] font-black uppercase tracking-[0.15em] text-black flex items-center gap-1.5"
            style={{ background: "linear-gradient(135deg, #10B981, #34D399)" }}
          >
            ⭐ Best Value · Most Complete
          </div>
        </div>
      )}

      {/* Popular badge */}
      {plan.popular && !isHighlight && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <div
            className="px-4 py-1 rounded-b-xl text-[10px] font-black uppercase tracking-[0.15em] text-black"
            style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)" }}
          >
            Most Popular
          </div>
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-4"
              style={{
                background: `${plan.color}18`,
                border: `1px solid ${plan.color}40`,
                boxShadow: isHighlight ? `0 0 16px ${plan.color}30` : undefined,
              }}
            >
              {plan.emoji}
            </div>
            <h3
              className="font-black text-xl leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isHighlight ? plan.color : "#ffffff",
              }}
            >
              {plan.name}
            </h3>
            <p className="text-[#52525B] text-xs mt-1">{plan.tagline}</p>
          </div>
          {billing === "yearly" && (
            <span className="text-[10px] font-black px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 mt-1">
              -{savingPct}%
            </span>
          )}
        </div>

        {/* ── Price Block ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billing + plan.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <div className="flex items-end gap-1">
              <span className="text-lg font-semibold" style={{ color: plan.color }}>₹</span>
              <span
                className="font-black leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isHighlight ? plan.color : "#ffffff",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                }}
              >
                {price.toLocaleString("en-IN")}
              </span>
              <span className="text-[#52525B] text-sm mb-1">{priceLabel}</span>
            </div>

            {billing === "monthly" && (
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="text-[#52525B] text-xs">or</span>
                <span className="text-[#A1A1AA] text-xs font-semibold">
                  ₹ {plan.yearly.toLocaleString("en-IN")}/year
                </span>
                <span className="text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  save ₹ {yearlySaving.toLocaleString("en-IN")}
                </span>
              </div>
            )}

            {billing === "yearly" && (
              <p className="text-emerald-400 text-xs mt-2">
                Save ₹ {yearlySaving.toLocaleString("en-IN")} vs monthly
              </p>
            )}

            {/* One-time fee block */}
            <div
              className="mt-4 p-3 rounded-2xl"
              style={{
                background: `${plan.color}10`,
                border: `1px solid ${plan.color}30`,
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold" style={{ color: plan.color }}>
                  🔑 One-Time Setup Fee
                </span>
                <span
                  className="font-black text-base"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isHighlight ? plan.color : "#ffffff",
                  }}
                >
                  ₹ {plan.oneTime.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-[#52525B] text-[10px]">Paid once at signup · never again</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Features */}
        <div className="space-y-2.5 mb-8 flex-1">
          {features.map((f) => (
            <div key={f.text} className="flex items-center gap-2.5">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: f.included ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.04)",
                  border: f.included ? "1px solid rgba(16,185,129,0.30)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {f.included ? (
                  <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-2.5 h-2.5 text-[#3F3F46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <span className={`text-sm ${f.included ? "text-[#D4D4D8]" : "text-[#3F3F46] line-through"}`}>
                {f.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <motion.a
            href={GOOGLE_FORM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="relative block w-full py-3.5 rounded-2xl text-center font-bold text-sm overflow-hidden group"
            style={
              isHighlight
                ? { background: "linear-gradient(135deg,#10B981,#34D399)", color: "#000", textDecoration: "none" }
                : plan.popular
                ? { background: "linear-gradient(135deg,#F59E0B,#FBBF24)", color: "#000", textDecoration: "none" }
                : { background: `${plan.color}18`, color: plan.color, border: `1px solid ${plan.color}35`, textDecoration: "none" }
            }
          >
            <span className="relative z-10 flex flex-col items-center gap-0.5">
              <span>Buy Now</span>
              <span className="text-[10px] font-semibold opacity-80">
                Onetime ₹ {plan.oneTime.toLocaleString("en-IN")} + ₹ {price.toLocaleString("en-IN")}{priceLabel}
              </span>
            </span>
            {(isHighlight || plan.popular) && (
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </motion.a>

          <motion.a
            href={GOOGLE_FORM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-center text-sm font-semibold transition-all duration-200"
            style={{
              color: plan.color,
              border: `1px solid ${plan.color}30`,
              textDecoration: "none",
            }}
          >
            <span className="text-base">🎁</span>
            Start Free Trial ( 1 Month)
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Free Trial Banner ────────────────────────────────────────────────────────
function FreeTrialBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-16 rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F0F0F 0%, #111008 100%)",
        border: "1px solid rgba(245,158,11,0.20)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(245,158,11,0.05), transparent, rgba(245,158,11,0.05))" }} />

      <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Try Before You Buy
          </div>
          <h3
            className="font-black text-3xl md:text-4xl leading-tight mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(135deg,#FFFFFF 0%,#D1D5DB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            1 Month Free Trial
          </h3>
          <p className="text-[#71717A] text-sm max-w-md leading-relaxed">
            All plans include a full 1-month free trial with every feature unlocked.
            You only pay{" "}
            <span className="text-amber-400 font-bold">₹ 50 for a demo printout</span>
            {" "}— that's it. No hidden charges.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {["Full Access", "No Credit Card", "Cancel Anytime", "Setup Included"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-[#A1A1AA] bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 text-center">
          <div
            className="relative inline-flex flex-col items-center justify-center w-44 h-44 rounded-full"
            style={{
              border: "2px solid rgba(245,158,11,0.30)",
              background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
            }}
          >
            <p className="text-[#71717A] text-xs uppercase tracking-widest mb-1">Only Pay</p>
            <div className="flex items-start">
              <span className="text-amber-400 text-lg font-bold mt-1">₹</span>
              <span className="font-black text-amber-400 text-6xl leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>50</span>
            </div>
            <p className="text-[#71717A] text-[11px] mt-1">for print only</p>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
          </div>

          <motion.a
            href={GOOGLE_FORM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black"
            style={{ background: "linear-gradient(135deg,#F59E0B,#FBBF24)", textDecoration: "none" }}
          >
            🚀 Claim Free Trial
          </motion.a>
          <p className="text-[#3F3F46] text-[10px] mt-2">Opens Google Form · 60 seconds</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "Can I switch plans later?", a: "Yes — upgrade or downgrade anytime. We'll adjust your billing accordingly." },
  { q: "What happens after the free trial?", a: "You choose a plan and pay. If you don't continue, no charge — ever." },
  { q: "Is setup included?", a: "Yes. We set everything up for you — menu, admin panel, WhatsApp integration — at no extra cost." },
  { q: "What does ₹ 50 cover?", a: "Just the physical demo printout we hand you during onboarding. One-time, nothing more." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-black text-white text-2xl mb-6 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Common Questions
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-3">
        {FAQS.map((faq, i) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0F0F0F" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-[#D4D4D8] text-sm font-medium">{faq.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#52525B] text-xl leading-none shrink-0 ml-4"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-[#71717A] text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SubscriptionPage() {
  const [billing, setBilling] = useState("monthly");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Ambient BG */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 rounded-full bg-amber-500/5 blur-[150px]"
          style={{ width: "600px", height: "600px" }} />
        <div className="absolute bottom-0 right-1/4 rounded-full bg-indigo-600/5 blur-[130px]"
          style={{ width: "500px", height: "500px" }} />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-5">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-[0.15em] uppercase mb-6"
            style={{ background: "rgba(245,158,11,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Simple Pricing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[1.05] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            <span style={{
              background: "linear-gradient(135deg,#FFFFFF 0%,#A1A1AA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Choose Your Plan.
            </span>
            <br />
            <span style={{
              background: "linear-gradient(135deg,#F59E0B 0%,#FCD34D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Grow Your Restaurant.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#71717A] text-lg max-w-xl mx-auto leading-relaxed"
          >
            All plans include a free 1-month trial. Pay only ₹ 50 for your welcome printout.
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <BillingToggle billing={billing} setBilling={setBilling} />
        </motion.div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} index={i} />
          ))}
        </div>

        <FreeTrialBanner />
        <FAQ />

        <p className="text-center text-[#3F3F46] text-xs mt-10">
          All prices in Indian Rupees (₹) · GST may apply · Instant support for all paid plans
        </p>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}