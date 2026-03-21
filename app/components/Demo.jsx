// "use client";

// import { useRef, useState, useEffect, useCallback } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";

// // ─── Gallery Data ─────────────────────────────────────────────────────────────
// const GALLERY = [
//   {
//     type: "video",
//     src: "/public/intro.mp4",
//     thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
//     tag: "Walkthrough",
//     category: "videos",
//     title: "Full Dashboard Tour",
//     desc: "See how managers track orders, tables, and revenue in real-time.",
//   },
//   {
//     type: "video",
//     src: "/public/fooadd.mp4",
//     thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
//     tag: "Full Demo",
//     category: "full-demo",
//     title: "Complete Platform Walkthrough",
//     desc: "Everything in one video — menu, orders, booking, and billing from start to finish.",
//   },
//   {
//     type: "image",
//     src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
//     tag: "Feature",
//     category: "images",
//     title: "Digital Menu Interface",
//     desc: "High-res photos, live pricing, and category filters that update instantly.",
//   },
//   {
//     type: "image",
//     src: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1200&q=80",
//     tag: "Feature",
//     category: "images",
//     title: "WhatsApp Billing",
//     desc: "Automated invoices with itemised bills sent straight to the customer's phone.",
//   },
//   {
//     type: "video",
//     src: "/public/oeder.mp4",
//     thumb: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
//     tag: "Walkthrough",
//     category: "videos",
//     title: "Table Booking Flow",
//     desc: "Watch a guest reserve a table in under 30 seconds from any device.",
//   },
//   {
//     type: "image",
//     src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
//     tag: "Feature",
//     category: "images",
//     title: "Order Management Dashboard",
//     desc: "Kitchen display, live order queue, and status updates all in one screen.",
//   },
//   {
//     type: "video",
//     src: "https://www.w3schools.com/html/movie.mp4",
//     thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
//     tag: "Walkthrough",
//     category: "videos",
//     title: "Digital Menu Setup",
//     desc: "Add dishes, prices, and photos in minutes. Update anytime from your phone.",
//   },
// ];

// const TRIAL_FEATURES = [
//   { icon: "🍽️", text: "Full Digital Menu Setup" },
//   { icon: "🪑", text: "Table Booking System" },
//   { icon: "🛒", text: "Live Order Management" },
//   { icon: "💬", text: "WhatsApp Billing Integration" },
//   { icon: "📊", text: "Revenue Analytics Dashboard" },
//   { icon: "🎧", text: "24/7 Priority Support" },
// ];

// const FILTERS = [
//   { key: "all",       label: "All" },
//   { key: "videos",    label: "Videos" },
//   { key: "images",    label: "Images" },
//   { key: "full-demo", label: "Full Demo" },
// ];

// // ─── Lightbox ─────────────────────────────────────────────────────────────────
// function Lightbox({ items, startIndex, onClose }) {
//   const [current, setCurrent] = useState(startIndex);
//   const videoRef = useRef(null);

//   const prev = useCallback(() => {
//     if (videoRef.current) videoRef.current.pause();
//     setCurrent((c) => (c - 1 + items.length) % items.length);
//   }, [items.length]);

//   const next = useCallback(() => {
//     if (videoRef.current) videoRef.current.pause();
//     setCurrent((c) => (c + 1) % items.length);
//   }, [items.length]);

//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "ArrowLeft")  prev();
//       if (e.key === "ArrowRight") next();
//       if (e.key === "Escape")     onClose();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [prev, next, onClose]);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, []);

//   const item = items[current];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.25 }}
//       className="fixed inset-0 z-200 flex items-center justify-center"
//       onClick={onClose}
//     >
//       {/* Blurred dark backdrop */}
//       <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

//       {/* Card */}
//       <motion.div
//         initial={{ scale: 0.92, opacity: 0, y: 24 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.92, opacity: 0, y: 24 }}
//         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//         onClick={(e) => e.stopPropagation()}
//         className="relative z-10 flex flex-col"
//         style={{ width: "min(92vw, 980px)", maxHeight: "92vh" }}
//       >
//         {/* ── Media area ── */}
//         <div
//           className="relative rounded-3xl overflow-hidden flex items-center justify-center"
//           style={{
//             maxHeight: "75vh",
//             background: "linear-gradient(145deg, #161616 0%, #0D0D0D 100%)",
//             boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
//           }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 48 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -48 }}
//               transition={{ duration: 0.24, ease: "easeOut" }}
//               className="w-full"
//             >
//               {item.type === "video" ? (
//                 <video
//                   ref={videoRef}
//                   key={item.src + current}
//                   src={item.src}
//                   poster={item.thumb}
//                   controls
//                   autoPlay
//                   className="w-full object-contain rounded-3xl"
//                   style={{ maxHeight: "72vh" }}
//                 />
//               ) : (
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="w-full object-contain rounded-3xl"
//                   style={{ maxHeight: "72vh" }}
//                 />
//               )}
//             </motion.div>
//           </AnimatePresence>

//           {/* Close */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-30 w-10 h-10 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
//             style={{ background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Prev */}
//           <button
//             onClick={prev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 group"
//             style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
//           >
//             <svg className="w-5 h-5 transition-colors duration-200 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Next */}
//           <button
//             onClick={next}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 group"
//             style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
//           >
//             <svg className="w-5 h-5 transition-colors duration-200 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* ── Info bar ── */}
//         <div className="mt-5 flex items-start justify-between gap-6">
//           <div className="min-w-0">
//             <p className="text-white font-semibold text-base leading-snug truncate tracking-tight">{item.title}</p>
//             <p className="text-zinc-500 text-sm mt-1.5 line-clamp-2 leading-relaxed">{item.desc}</p>
//           </div>

//           {/* Dot indicators */}
//           <div className="flex items-center gap-2 shrink-0 pt-1">
//             {items.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   if (videoRef.current) videoRef.current.pause();
//                   setCurrent(i);
//                 }}
//                 className="rounded-full transition-all duration-300"
//                 style={{
//                   width: i === current ? "24px" : "6px",
//                   height: "6px",
//                   background: i === current ? "#F59E0B" : "rgba(255,255,255,0.15)",
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Counter */}
//         <p className="text-zinc-600 text-xs mt-2 text-right tabular-nums">
//           {current + 1} / {items.length}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── Media Card ───────────────────────────────────────────────────────────────
// function MediaCard({ item, index, onClick }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   const tagStyles = {
//     "Full Demo": {
//       bg: "rgba(239,68,68,0.1)",
//       color: "#F87171",
//       border: "rgba(239,68,68,0.2)",
//     },
//     "Walkthrough": {
//       bg: "rgba(245,158,11,0.1)",
//       color: "#FBB63C",
//       border: "rgba(245,158,11,0.2)",
//     },
//     "Feature": {
//       bg: "rgba(99,102,241,0.1)",
//       color: "#A5B4FC",
//       border: "rgba(99,102,241,0.2)",
//     },
//   };
//   const ts = tagStyles[item.tag] || tagStyles["Feature"];

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 36 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
//       onClick={onClick}
//       className="group relative rounded-3xl overflow-hidden cursor-pointer"
//       style={{
//         background: "linear-gradient(160deg, #161616 0%, #111111 100%)",
//         border: "1px solid rgba(255,255,255,0.06)",
//         boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
//       }}
//     >
//       {/* Thumbnail */}
//       <div className="relative aspect-video bg-black overflow-hidden">
//         <img
//           src={item.type === "video" ? item.thumb : item.src}
//           alt={item.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
//         />
//         {/* Gradient overlay */}
//         <div
//           className="absolute inset-0"
//           style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
//         />

//         {/* Play overlay for videos */}
//         {item.type === "video" && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               whileHover={{ scale: 1.12 }}
//               transition={{ duration: 0.2 }}
//               className="w-13 h-13s rounded-2xl flex items-center justify-center"
//               style={{
//                 background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
//                 boxShadow: "0 8px 32px rgba(245,158,11,0.55)",
//               }}
//             >
//               <svg className="w-6 h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </motion.div>
//           </div>
//         )}

//         {/* Expand icon for images */}
//         {item.type === "image" && (
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div
//               className="w-12 h-12 rounded-2xl flex items-center justify-center"
//               style={{
//                 background: "rgba(255,255,255,0.12)",
//                 backdropFilter: "blur(16px)",
//                 border: "1px solid rgba(255,255,255,0.2)",
//               }}
//             >
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
//               </svg>
//             </div>
//           </div>
//         )}

//         {/* Type pill */}
//         <div className="absolute top-3.5 left-3.5">
//           <span
//             className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xl text-white"
//             style={{
//               background: "rgba(0,0,0,0.6)",
//               backdropFilter: "blur(12px)",
//               border: "1px solid rgba(255,255,255,0.12)",
//             }}
//           >
//             {item.type === "video" ? (
//               <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
//             ) : (
//               <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
//               </svg>
//             )}
//             {item.type}
//           </span>
//         </div>
//       </div>

//       {/* Info */}
//       <div className="p-5 pt-4">
//         <span
//           className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-xl"
//           style={{
//             background: ts.bg,
//             color: ts.color,
//             border: `1px solid ${ts.border}`,
//           }}
//         >
//           {item.tag}
//         </span>
//         <h3 className="font-semibold text-white mt-3 mb-1.5 text-[15px] leading-snug tracking-tight">{item.title}</h3>
//         <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
//       </div>

//       {/* Hover border glow */}
//       <motion.div
//         className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//         style={{ border: "1px solid rgba(245,158,11,0.22)", boxShadow: "inset 0 0 40px rgba(245,158,11,0.04)" }}
//       />
//     </motion.div>
//   );
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function DemoPage() {
//   const GOOGLE_FORM = "https://forms.gle/GoGKJnEQM5YDGFYa9";

//   // Inject Google Fonts without @import (avoids CSS parse error in Next.js/Turbopack)
//   useEffect(() => {
//     const id = "demo-page-fonts";
//     if (document.getElementById(id)) return;
//     const link = document.createElement("link");
//     link.id   = id;
//     link.rel  = "stylesheet";
//     link.href = "https://forms.gle/GoGKJnEQM5YDGFYa9";
//     document.head.appendChild(link);
//   }, []);

//   const [activeFilter, setActiveFilter] = useState("all");
//   const [lightboxIndex, setLightboxIndex] = useState(null);

//   const filtered = GALLERY.filter((item) => {
//     if (activeFilter === "all")       return true;
//     if (activeFilter === "videos")    return item.type === "video";
//     if (activeFilter === "images")    return item.type === "image";
//     if (activeFilter === "full-demo") return item.category === "full-demo";
//     return true;
//   });

//   const countFor = (key) => {
//     if (key === "all")       return GALLERY.length;
//     if (key === "videos")    return GALLERY.filter((g) => g.type === "video").length;
//     if (key === "images")    return GALLERY.filter((g) => g.type === "image").length;
//     if (key === "full-demo") return GALLERY.filter((g) => g.category === "full-demo").length;
//     return 0;
//   };

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden" style={{ background: "#080808", fontFamily: "'DM Sans', sans-serif" }}>

//       {/* ── Lightbox portal ────────────────────────────────────────── */}
//       <AnimatePresence>
//         {lightboxIndex !== null && (
//           <Lightbox
//             items={filtered}
//             startIndex={lightboxIndex}
//             onClose={() => setLightboxIndex(null)}
//           />
//         )}
//       </AnimatePresence>

//       {/* ── Ambient BG ──────────────────────────────────────────────── */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Warm amber orb top center */}
//         <div
//           className="absolute"
//           style={{
//             top: "-120px",
//             left: "30%",
//             width: "700px",
//             height: "700px",
//             borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
//             filter: "blur(40px)",
//           }}
//         />
//         {/* Indigo orb bottom right */}
//         <div
//           className="absolute"
//           style={{
//             bottom: "-100px",
//             right: "-80px",
//             width: "500px",
//             height: "500px",
//             borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
//             filter: "blur(40px)",
//           }}
//         />
//         {/* Subtle grid */}
//         <div
//           className="absolute inset-0 opacity-[0.022]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
//             backgroundSize: "56px 56px",
//           }}
//         />
//         {/* Top gradient fade */}
//         <div
//           className="absolute inset-x-0 top-0 h-48"
//           style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.9), transparent)" }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

//         {/* ── Section Header ───────────────────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-12"
//         >
//           {/* Badge */}
//           <motion.span
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl text-xs font-bold tracking-[0.18em] uppercase mb-6"
//             style={{
//               background: "rgba(245,158,11,0.08)",
//               border: "1px solid rgba(245,158,11,0.22)",
//               color: "#FBB63C",
//             }}
//           >
//             <span
//               className="w-1.5 h-1.5 rounded-full animate-pulse"
//               style={{ background: "#F59E0B" }}
//             />
//             Live Demos
//           </motion.span>

//           <div className="max-w-2xl">
//             <h1
//               className="font-black leading-[1.04] tracking-tight mb-5"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontSize: "clamp(2.8rem, 5vw, 3.75rem)",
//                 background: "linear-gradient(140deg, #FFFFFF 0%, #A1A1AA 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Watch It Work.{" "}
//               <span
//                 style={{
//                   background: "linear-gradient(135deg, #F59E0B 10%, #FCD34D 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Before You Commit.
//               </span>
//             </h1>
//             <p className="text-zinc-400 text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
//               Real walkthroughs of every feature — digital menus, live ordering,
//               table booking, and WhatsApp billing. No sales call. Just the product.
//             </p>
//           </div>
//         </motion.div>

//         {/* ── Filter Tabs ──────────────────────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.22 }}
//           className="flex flex-wrap items-center gap-2.5 mb-12"
//         >
//           {FILTERS.map((f) => {
//             const isActive = activeFilter === f.key;
//             return (
//               <button
//                 key={f.key}
//                 onClick={() => setActiveFilter(f.key)}
//                 className="relative px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors duration-200 outline-none"
//                 style={{
//                   color: isActive ? "#0A0A0A" : "#71717A",
//                   border: isActive ? "none" : "1px solid rgba(255,255,255,0.08)",
//                   background: isActive ? "transparent" : "rgba(255,255,255,0.02)",
//                 }}
//               >
//                 {isActive && (
//                   <motion.span
//                     layoutId="filter-pill"
//                     className="absolute inset-0 rounded-2xl"
//                     style={{ background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)", boxShadow: "0 4px 20px rgba(245,158,11,0.35)" }}
//                     transition={{ type: "spring", stiffness: 420, damping: 32 }}
//                   />
//                 )}
//                 <span className="relative z-10">{f.label}</span>
//                 <span
//                   className="relative z-10 ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-lg"
//                   style={{
//                     background: isActive ? "rgba(0,0,0,0.16)" : "rgba(255,255,255,0.06)",
//                     color: isActive ? "rgba(0,0,0,0.7)" : "#52525B",
//                   }}
//                 >
//                   {countFor(f.key)}
//                 </span>
//               </button>
//             );
//           })}
//         </motion.div>

//         {/* ── Full-width Gallery Grid ───────────────────────────────── */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeFilter}
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
//           >
//             {filtered.map((item, i) => (
//               <MediaCard
//                 key={item.title + i}
//                 item={item}
//                 index={i}
//                 onClick={() => setLightboxIndex(i)}
//               />
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {filtered.length === 0 && (
//           <div className="text-center py-24 text-zinc-600">
//             <p className="text-5xl mb-4">🎬</p>
//             <p className="text-sm tracking-wide">No items in this category yet.</p>
//           </div>
//         )}

//       </div>

//       <style>{`
//         * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
//         ::selection { background: rgba(245,158,11,0.28); color: #fff; }
//         ::-webkit-scrollbar { width: 6px; background: #0D0D0D; }
//         ::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 99px; }
//         ::-webkit-scrollbar-thumb:hover { background: #3A3A3A; }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Gallery Data ─────────────────────────────────────────────────────────────
const GALLERY = [
  // {
  //   type: "video",
  //   src: "/intro.mp4",
  //   thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  //   tag: "Introduction",
  //   category: "videos",
  //   title: "Introduction",
  //   desc: "See what we provide",
  // },
  // {
  //   type: "video",
  //   src: "/fooadd.mp4",
  //   thumb: "/foodadd.jpg",
  //   tag: "Food Add + Edit + Delet",
  //   category: "videos",
  //   title: "Food Add + Edit + Delet system",
  //   desc: "Here you can see how food is added, edited, deleted, and updated in real time, along with more features",
  // },
   {
    type: "video",
    src: "/order.mp4",
    thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tag: "Order Food + Billing + Summary ",
    category: "videos",
    title: "Order food with WhatsApp billing, daily summary, and rating system.",
    desc: "Here you can see how food is ordered from a digital menu via QR code, along with WhatsApp billing, daily summary, rating system, and more features",
  },
    {
    type: "video",
    src: "/tablebooking.mp4",
    thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tag: " Table Booking + WhatsApp confirmation (Accept/Reject) massage ",
    category: "videos",
    title: "Table Booking + WhatsApp confirmation (Accept/Reject) massage",
    desc: "Here you can see how the table booking process works",
  },
    {
    type: "image",
    src: "/qrandadmin.png",
    tag: "Qr code + Admin Panel",
    category: "images",
    title: "Qr code and Amin panel",
    desc: "This is our QR code and admin panel image",
  },
  // {
  //   type: "video",
  //   src: "/fulldemo.mp4",
  //   thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  //   tag: "Full Demo",
  //   category: "full-demo",
  //   title: "Complete Platform Walkthrough",
  //   desc: "Everything in one video — menu, orders, booking, and billing from start to finish.",
  // },

  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1200&q=80",
  //   tag: "Feature",
  //   category: "images",
  //   title: "WhatsApp Billing",
  //   desc: "Automated invoices with itemised bills sent straight to the customer's phone.",
  // },
 
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  //   tag: "Feature",
  //   category: "images",
  //   title: "Order Management Dashboard",
  //   desc: "Kitchen display, live order queue, and status updates all in one screen.",
  // },
  
];

const TRIAL_FEATURES = [
  { icon: "🍽️", text: "Full Digital Menu Setup" },
  { icon: "🪑", text: "Table Booking System" },
  { icon: "🛒", text: "Live Order Management" },
  { icon: "💬", text: "WhatsApp Billing Integration" },
  { icon: "📊", text: "Revenue Analytics Dashboard" },
  { icon: "🎧", text: "24/7 Priority Support" },
];

const FILTERS = [
  { key: "all",       label: "All" },
  { key: "videos",    label: "Videos" },
  { key: "images",    label: "Images" },
  { key: "full-demo", label: "Full Demo" },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const videoRef = useRef(null);

  const prev = useCallback(() => {
    if (videoRef.current) videoRef.current.pause();
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    if (videoRef.current) videoRef.current.pause();
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const item = items[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-200 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Blurred dark backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 24 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex flex-col"
        style={{ width: "min(92vw, 980px)", maxHeight: "92vh" }}
      >
        {/* ── Media area ── */}
        <div
          className="relative rounded-3xl overflow-hidden flex items-center justify-center"
          style={{
            maxHeight: "75vh",
            background: "linear-gradient(145deg, #161616 0%, #0D0D0D 100%)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="w-full"
            >
              {item.type === "video" ? (
                <video
                  ref={videoRef}
                  key={item.src + current}
                  src={item.src}
                  poster={item.thumb}
                  controls
                  autoPlay
                  className="w-full object-contain rounded-3xl"
                  style={{ maxHeight: "72vh" }}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-contain rounded-3xl"
                  style={{ maxHeight: "72vh" }}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-10 h-10 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 group"
            style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
          >
            <svg className="w-5 h-5 transition-colors duration-200 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 group"
            style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
          >
            <svg className="w-5 h-5 transition-colors duration-200 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Info bar ── */}
        <div className="mt-5 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-white font-semibold text-base leading-snug truncate tracking-tight">{item.title}</p>
            <p className="text-zinc-500 text-sm mt-1.5 line-clamp-2 leading-relaxed">{item.desc}</p>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 shrink-0 pt-1">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (videoRef.current) videoRef.current.pause();
                  setCurrent(i);
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  height: "6px",
                  background: i === current ? "#F59E0B" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Counter */}
        <p className="text-zinc-600 text-xs mt-2 text-right tabular-nums">
          {current + 1} / {items.length}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Media Card ───────────────────────────────────────────────────────────────
function MediaCard({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const tagStyles = {
    "Full Demo": {
      bg: "rgba(239,68,68,0.1)",
      color: "#F87171",
      border: "rgba(239,68,68,0.2)",
    },
    "Walkthrough": {
      bg: "rgba(245,158,11,0.1)",
      color: "#FBB63C",
      border: "rgba(245,158,11,0.2)",
    },
    "Feature": {
      bg: "rgba(99,102,241,0.1)",
      color: "#A5B4FC",
      border: "rgba(99,102,241,0.2)",
    },
  };
  const ts = tagStyles[item.tag] || tagStyles["Feature"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(160deg, #161616 0%, #111111 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-black overflow-hidden">
        <img
          src={item.type === "video" ? item.thumb : item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
        />

        {/* Play overlay for videos */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.2 }}
              className="w-13 h-13s rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
                boxShadow: "0 8px 32px rgba(245,158,11,0.55)",
              }}
            >
              <svg className="w-6 h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
        )}

        {/* Expand icon for images */}
        {item.type === "image" && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
              </svg>
            </div>
          </div>
        )}

        {/* Type pill */}
        <div className="absolute top-3.5 left-3.5">
          <span
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xl text-white"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {item.type === "video" ? (
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            ) : (
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            )}
            {item.type}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 pt-4">
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-xl"
          style={{
            background: ts.bg,
            color: ts.color,
            border: `1px solid ${ts.border}`,
          }}
        >
          {item.tag}
        </span>
        <h3 className="font-semibold text-white mt-3 mb-1.5 text-[15px] leading-snug tracking-tight">{item.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
      </div>

      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: "1px solid rgba(245,158,11,0.22)", boxShadow: "inset 0 0 40px rgba(245,158,11,0.04)" }}
      />
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DemoPage() {
  const GOOGLE_FORM = "https://forms.gle/GoGKJnEQM5YDGFYa9";

  // FIX: was accidentally using GOOGLE_FORM url as the font href — now correctly points to Google Fonts
  useEffect(() => {
    const id = "demo-page-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id   = id;
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap";
    document.head.appendChild(link);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = GALLERY.filter((item) => {
    if (activeFilter === "all")       return true;
    if (activeFilter === "videos")    return item.type === "video";
    if (activeFilter === "images")    return item.type === "image";
    if (activeFilter === "full-demo") return item.category === "full-demo";
    return true;
  });

  const countFor = (key) => {
    if (key === "all")       return GALLERY.length;
    if (key === "videos")    return GALLERY.filter((g) => g.type === "video").length;
    if (key === "images")    return GALLERY.filter((g) => g.type === "image").length;
    if (key === "full-demo") return GALLERY.filter((g) => g.category === "full-demo").length;
    return 0;
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ background: "#080808", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Lightbox portal ────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Ambient BG ──────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute"
          style={{
            top: "-120px",
            left: "30%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-100px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-48"
          style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.9), transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

        {/* ── Section Header ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl text-xs font-bold tracking-[0.18em] uppercase mb-6"
            style={{
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.22)",
              color: "#FBB63C",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#F59E0B" }}
            />
            Live Demos
          </motion.span>

          <div className="max-w-2xl">
            <h1
              className="font-black leading-[1.04] tracking-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 5vw, 3.75rem)",
                background: "linear-gradient(140deg, #FFFFFF 0%, #A1A1AA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Watch It Work.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B 10%, #FCD34D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Before You Commit.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Real walkthroughs of every feature — digital menus, live ordering,
              table booking, and WhatsApp billing. No sales call. Just the product.
            </p>
          </div>
        </motion.div>

        {/* ── Filter Tabs ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-wrap items-center gap-2.5 mb-12"
        >
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="relative px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors duration-200 outline-none"
                style={{
                  color: isActive ? "#0A0A0A" : "#71717A",
                  border: isActive ? "none" : "1px solid rgba(255,255,255,0.08)",
                  background: isActive ? "transparent" : "rgba(255,255,255,0.02)",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)", boxShadow: "0 4px 20px rgba(245,158,11,0.35)" }}
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
                <span
                  className="relative z-10 ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-lg"
                  style={{
                    background: isActive ? "rgba(0,0,0,0.16)" : "rgba(255,255,255,0.06)",
                    color: isActive ? "rgba(0,0,0,0.7)" : "#52525B",
                  }}
                >
                  {countFor(f.key)}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Full-width Gallery Grid ───────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((item, i) => (
              <MediaCard
                key={item.title + i}
                item={item}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-zinc-600">
            <p className="text-5xl mb-4">🎬</p>
            <p className="text-sm tracking-wide">No items in this category yet.</p>
          </div>
        )}

      </div>

      <style>{`
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        ::selection { background: rgba(245,158,11,0.28); color: #fff; }
        ::-webkit-scrollbar { width: 6px; background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: #3A3A3A; }
      `}</style>
    </section>
  );
}