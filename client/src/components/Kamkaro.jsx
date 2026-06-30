import { useState, useEffect, useRef } from "react";

const WORKERS = [
  { name: "Rajan Kumar", trade: "Electrician", rating: 4.9, jobs: 312, city: "Chennai", verified: true, color: "#F59E0B", icon: "⚡", initials: "RK" },
  { name: "Suresh Pillai", trade: "Plumber", rating: 4.8, jobs: 278, city: "Madurai", verified: true, color: "#3B82F6", icon: "🔧", initials: "SP" },
  { name: "Anbu Selvam", trade: "Carpenter", rating: 5.0, jobs: 190, city: "Coimbatore", verified: true, color: "#10B981", icon: "🪚", initials: "AS" },
  { name: "Mani Vel", trade: "Painter", rating: 4.7, jobs: 445, city: "Trichy", verified: true, color: "#EC4899", icon: "🖌️", initials: "MV" },
  { name: "Karthik Raja", trade: "AC Technician", rating: 4.9, jobs: 203, city: "Salem", verified: true, color: "#8B5CF6", icon: "❄️", initials: "KR" },
  { name: "Senthil Babu", trade: "Mason", rating: 4.6, jobs: 367, city: "Madurai", verified: true, color: "#F97316", icon: "🧱", initials: "SB" },
];

const CATEGORIES = [
  { label: "Electrician", icon: "⚡", color: "#FEF3C7", border: "#F59E0B", text: "#92400E" },
  { label: "Plumber", icon: "🔧", color: "#DBEAFE", border: "#3B82F6", text: "#1E3A8A" },
  { label: "Carpenter", icon: "🪚", color: "#D1FAE5", border: "#10B981", text: "#064E3B" },
  { label: "Painter", icon: "🖌️", color: "#FCE7F3", border: "#EC4899", text: "#831843" },
  { label: "AC Technician", icon: "❄️", color: "#EDE9FE", border: "#8B5CF6", text: "#3B0764" },
  { label: "Mason", icon: "🧱", color: "#FFEDD5", border: "#F97316", text: "#7C2D12" },
  { label: "Welder", icon: "🔥", color: "#FEE2E2", border: "#EF4444", text: "#7F1D1D" },
  { label: "Cleaner", icon: "🧹", color: "#ECFDF5", border: "#34D399", text: "#065F46" },
];

const TESTIMONIALS = [
  { name: "Priya Nair", city: "Madurai", text: "Found a plumber within 10 minutes. Aadhaar-verified, polite, and did a perfect job. I felt completely safe as a woman calling a stranger home.", avatar: "PN", stars: 5 },
  { name: "Meera Krishnan", city: "Chennai", text: "As a working mother, I need trustworthy workers fast. KamKaro's verified badges give me peace of mind. My electrician was punctual and professional.", avatar: "MK", stars: 5 },
  { name: "Lakshmi Sundaram", city: "Coimbatore", text: "The escrow payment system is brilliant — I paid only after the work was done. No more arguing or paying in advance and getting cheated.", avatar: "LS", stars: 5 },
];

const STATS = [
  { value: "12,400+", label: "Verified Workers" },
  { value: "98%", label: "Jobs Completed" },
  { value: "4.8★", label: "Average Rating" },
  { value: "2 min", label: "Avg Response Time" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function StarRating({ rating }) {
  return (
    <span style={{ color: "#F59E0B", fontSize: 13, letterSpacing: 1 }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#6B7280", marginLeft: 4, fontFamily: "var(--body)", fontSize: 12 }}>{rating}</span>
    </span>
  );
}

function WorkerCard({ w, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      background: "#fff",
      border: "1px solid #E5E7EB",
      borderRadius: 20,
      padding: "20px 18px",
      transition: `opacity 0.5s ${delay}ms, transform 0.5s ${delay}ms`,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: w.color + "18", borderRadius: "0 20px 0 80px" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 50, height: 50, borderRadius: "50%",
          background: `linear-gradient(135deg, ${w.color}33, ${w.color}66)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 700, color: w.color, fontFamily: "var(--display)",
          border: `2px solid ${w.color}44`,
          flexShrink: 0,
        }}>{w.initials}</div>
        <div>
          <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, color: "#111827", lineHeight: 1.2 }}>{w.name}</div>
          <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>📍 {w.city}</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <span style={{
          background: w.color + "20", color: w.color,
          fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20,
          border: `1px solid ${w.color}40`, fontFamily: "var(--display)",
        }}>{w.icon} {w.trade}</span>
        {w.verified && (
          <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: "1px solid #BFDBFE" }}>
            ✓ Aadhaar
          </span>
        )}
      </div>
      <StarRating rating={w.rating} />
      <div style={{ marginTop: 8, fontSize: 12, color: "#9CA3AF", fontFamily: "var(--body)" }}>{w.jobs} jobs completed</div>
      <button style={{
        marginTop: 14, width: "100%", padding: "10px 0",
        background: "#111827", color: "#fff", border: "none",
        borderRadius: 12, fontSize: 13, fontWeight: 700,
        fontFamily: "var(--display)", cursor: "pointer",
        transition: "background 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#374151"}
      onMouseLeave={e => e.currentTarget.style.background = "#111827"}
      >Request Now</button>
    </div>
  );
}

function IntroAnimation({ onDone }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => onDone(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#0F172A",
      display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      transition: "opacity 0.7s, transform 0.7s",
      opacity: phase === 3 ? 0 : 1,
      pointerEvents: phase === 3 ? "none" : "all",
    }}>
      <style>{`
        @keyframes ripple { 0%{transform:scale(0.8);opacity:0.8} 100%{transform:scale(2.5);opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes drawLine { from{width:0} to{width:100%} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>
      <div style={{ position: "relative", marginBottom: 28 }}>
        {phase >= 1 && [0, 1, 2].map(i => (
          <div key={i} style={{
            position: "absolute", inset: -10,
            border: "2px solid #F59E0B",
            borderRadius: "50%",
            animation: `ripple 1.5s ease-out ${i * 0.4}s infinite`,
            opacity: 0,
          }} />
        ))}
        <div style={{
          width: 90, height: 90, borderRadius: "50%",
          background: "linear-gradient(135deg, #F59E0B, #EF4444)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 38,
          transition: "transform 0.5s",
          transform: phase >= 1 ? "scale(1)" : "scale(0)",
          animation: phase >= 1 ? "bounce 1.5s ease-in-out infinite" : "none",
        }}>🔨</div>
      </div>
      {phase >= 1 && (
        <div style={{ animation: "fadeUp 0.6s ease forwards", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--display)", fontSize: 52, fontWeight: 900,
            color: "#fff", letterSpacing: -2, lineHeight: 1,
          }}>
            Kam<span style={{ color: "#F59E0B" }}>Karo</span>
          </div>
          {phase >= 2 && (
            <div style={{ animation: "fadeUp 0.5s ease forwards", color: "#94A3B8", fontSize: 16, marginTop: 10, fontFamily: "var(--body)", letterSpacing: 3, textTransform: "uppercase" }}>
              Trusted Workers. Real People.
            </div>
          )}
        </div>
      )}
      {phase >= 2 && (
        <div style={{ marginTop: 32, width: 120, height: 3, background: "#1E293B", borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", background: "#F59E0B", animation: "drawLine 0.7s ease forwards", borderRadius: 2 }} />
        </div>
      )}
    </div>
  );
}

export default function Kamkaro() {
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [searchSkill, setSearchSkill] = useState("");
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);
  const [catRef, catInView] = useInView(0.1);

  const fonts = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
    :root { --display: 'Syne', sans-serif; --body: 'DM Sans', sans-serif; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: var(--body); background: #FAFAF9; color: #111827; }
    @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes pulse-dot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:0.7} }
    @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
    @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    .hero-anim { animation: fadeUp 0.8s ease forwards; opacity: 0; }
    .hero-anim-1 { animation-delay: 0.1s; }
    .hero-anim-2 { animation-delay: 0.3s; }
    .hero-anim-3 { animation-delay: 0.5s; }
    .hero-anim-4 { animation-delay: 0.7s; }
    .float-card { animation: float 4s ease-in-out infinite; }
    .float-card-2 { animation: float 4s ease-in-out 1.5s infinite; }
  `;

  return (
    <>
      <style>{fonts}</style>
      {!ready && <IntroAnimation onDone={() => setReady(true)} />}

      <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.6s 0.2s" }}>

        
        {/* HERO */}
        <section ref={heroRef} style={{
          minHeight: "calc(100vh - 64px)", padding: "6vw 5vw 4vw",
          display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 48,
          background: "linear-gradient(135deg, #FAFAF9 0%, #FEF3C7 50%, #FAFAF9 100%)",
          position: "relative", overflow: "hidden",
        }}>
          {/* background decoration */}
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #F59E0B18, transparent 70%)", top: -100, right: -100, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #3B82F618, transparent 70%)", bottom: -50, left: -50, pointerEvents: "none" }} />

          <div>
            <div className="hero-anim hero-anim-1" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", border: "1px solid #E5E7EB",
              padding: "6px 16px", borderRadius: 50, fontSize: 13, fontWeight: 600,
              color: "#374151", marginBottom: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              fontFamily: "var(--body)",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", animation: "pulse-dot 1.5s ease-in-out infinite", display: "inline-block" }} />
              2,400+ workers active right now
            </div>

            <h1 className="hero-anim hero-anim-2" style={{
              fontFamily: "var(--display)", fontSize: "clamp(38px, 5vw, 62px)",
              fontWeight: 900, lineHeight: 1.05, letterSpacing: -2,
              color: "#0F172A", marginBottom: 20,
            }}>
              Trusted workers,<br />
              <span style={{ color: "#F59E0B", position: "relative" }}>
                right at your door.
                <svg style={{ position: "absolute", bottom: -6, left: 0, width: "100%" }} viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0 8 Q75 2 150 8 Q225 14 300 8" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>

            <p className="hero-anim hero-anim-3" style={{
              fontFamily: "var(--body)", fontSize: 18, color: "#4B5563",
              lineHeight: 1.7, marginBottom: 32, maxWidth: 480,
            }}>
              Every worker on KamKaro is Aadhaar-verified and admin-approved. Mothers, homeowners, and families — find skilled help you can truly trust.
            </p>

            <div className="hero-anim hero-anim-4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{
                display: "flex", alignItems: "center", background: "#fff",
                border: "1px solid #E5E7EB", borderRadius: 16, overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)", flex: "1 1 280px", maxWidth: 420,
              }}>
                <span style={{ padding: "0 14px", fontSize: 20 }}>📍</span>
                <input placeholder="Your city or area..." value={searchCity} onChange={e => setSearchCity(e.target.value)}
                  style={{ flex: 1, padding: "14px 0", border: "none", outline: "none", fontFamily: "var(--body)", fontSize: 15, background: "transparent", color: "#111827" }} />
                <div style={{ width: 1, height: 32, background: "#E5E7EB" }} />
                <select value={searchSkill} onChange={e => setSearchSkill(e.target.value)}
                  style={{ padding: "14px 12px", border: "none", outline: "none", fontFamily: "var(--body)", fontSize: 15, background: "transparent", color: "#374151", cursor: "pointer" }}>
                  <option value="">Any skill</option>
                  {CATEGORIES.map(c => <option key={c.label}>{c.label}</option>)}
                </select>
                <button style={{
                  margin: 6, padding: "10px 20px", background: "#111827",
                  color: "#fff", border: "none", borderRadius: 12,
                  fontFamily: "var(--display)", fontWeight: 700, fontSize: 14, cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#F59E0B"}
                onMouseLeave={e => e.currentTarget.style.background = "#111827"}
                >Find</button>
              </div>
            </div>

            {/* Trust row */}
            <div className="hero-anim hero-anim-4" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["✓ Aadhaar Verified", "✓ Admin Approved", "✓ Payment Protected", "✓ Masked Calls"].map(t => (
                <span key={t} style={{ fontSize: 13, color: "#374151", fontFamily: "var(--body)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Hero right — floating cards */}
          <div style={{ position: "relative", height: 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: "90%", maxWidth: 320, background: "#fff", borderRadius: 24,
              padding: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "1px solid #F3F4F6",
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }} className="float-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                <div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 18, color: "#111827" }}>Rajan Kumar</div>
                  <div style={{ color: "#6B7280", fontSize: 13 }}>⚡ Electrician · Chennai</div>
                </div>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, border: "2px solid #F59E0B44",
                }}>RK</div>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, border: "1px solid #BFDBFE" }}>✓ Aadhaar Verified</span>
                <span style={{ background: "#F0FDF4", color: "#166534", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, border: "1px solid #BBF7D0" }}>✓ Admin Approved</span>
              </div>
              <div style={{ color: "#F59E0B", fontSize: 16, marginBottom: 4 }}>★★★★★ <span style={{ color: "#6B7280", fontSize: 13 }}>4.9 · 312 jobs</span></div>
              <div style={{ height: 1, background: "#F3F4F6", margin: "12px 0" }} />
              <button style={{
                width: "100%", padding: "12px 0", background: "#111827", color: "#fff",
                border: "none", borderRadius: 14, fontFamily: "var(--display)", fontWeight: 800, fontSize: 15, cursor: "pointer",
              }}>Request Now →</button>
            </div>
          </div>
        </section>

        {/* MARQUEE TRUST BAR */}
        <div style={{ background: "#111827", padding: "14px 0", overflow: "hidden" }}>
          <div style={{ display: "flex", animation: "marquee 20s linear infinite", width: "200%" }}>
            {[...Array(2)].map((_, ri) => (
              <div key={ri} style={{ display: "flex", gap: 48, paddingRight: 48, flexShrink: 0, width: "50%" }}>
                {["Admin Approved Profiles","Aadhaar Verified Workers",  "Escrow Payment Protection", "Masked Call Routing", "Location-Based Matching", "Weekly Worker Payouts", "24/7 Support"].map(t => (
                  <span key={t} style={{ fontFamily: "var(--display)", fontSize: 14, fontWeight: 700, color: "#F59E0B", whiteSpace: "nowrap" }}>• {t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <section ref={statsRef} style={{ padding: "5vw", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24 }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center", padding: "28px 16px",
                background: i % 2 === 0 ? "#0F172A" : "#FEF3C7",
                borderRadius: 20,
                transition: `opacity 0.6s ${i * 120}ms, transform 0.6s ${i * 120}ms`,
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? "translateY(0)" : "translateY(30px)",
              }}>
                <div style={{
                  fontFamily: "var(--display)", fontSize: 38, fontWeight: 900,
                  color: i % 2 === 0 ? "#F59E0B" : "#0F172A", lineHeight: 1,
                }}>{s.value}</div>
                <div style={{ fontFamily: "var(--body)", fontSize: 14, color: i % 2 === 0 ? "#94A3B8" : "#374151", marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section ref={catRef} style={{ padding: "5vw", background: "#FAFAF9" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "#0F172A", letterSpacing: -1, marginBottom: 12 }}>
                Every skill, covered.
              </h2>
              <p style={{ fontFamily: "var(--body)", color: "#6B7280", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
                From fixing a fuse to building a wall — find the right professional in minutes.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 14 }}>
              {CATEGORIES.map((c, i) => (
                <div key={c.label} style={{
                  background: c.color, border: `1.5px solid ${c.border}40`,
                  borderRadius: 18, padding: "20px 10px", textAlign: "center",
                  cursor: "pointer",
                  transition: `opacity 0.5s ${i * 60}ms, transform 0.5s ${i * 60}ms, box-shadow 0.2s`,
                  opacity: catInView ? 1 : 0,
                  transform: catInView ? "scale(1)" : "scale(0.85)",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = `0 8px 24px ${c.border}44`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontSize: 30, marginBottom: 8 }}>{c.icon}</div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 13, color: c.text }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ padding: "5vw", background: "#0F172A", color: "#fff" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: -1 }}>
              How <span style={{ color: "#F59E0B" }}>KamKaro</span> works
            </h2>
            <p style={{ color: "#94A3B8", textAlign: "center", marginBottom: 48, fontFamily: "var(--body)", fontSize: 16 }}>Simple. Safe. Done.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
              {[
                { step: "01", title: "Search & Select", desc: "Browse verified workers nearby by skill, rating, and distance.", icon: "🔍" },
                { step: "02", title: "Send Request", desc: "Describe your job, pick a time, confirm your location on map.", icon: "📋" },
                { step: "03", title: "Worker Accepts", desc: "The worker reviews and accepts. You get notified instantly.", icon: "✅" },
                { step: "04", title: "Pay Safely", desc: "Pay via UPI or card. Money held securely until job is done.", icon: "🔒" },
                { step: "05", title: "Job Done", desc: "Worker completes the job. You confirm and release payment.", icon: "🎉" },
              ].map((s, i) => (
                <div key={s.step} style={{
                  background: "#1E293B", borderRadius: 20, padding: "24px 20px",
                  border: "1px solid #334155", position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 16, right: 16, fontFamily: "var(--display)", fontSize: 40, fontWeight: 900, color: "#ffffff08" }}>{s.step}</div>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 16, color: "#F1F5F9", marginBottom: 8 }}>{s.title}</div>
                  <div style={{ fontFamily: "var(--body)", fontSize: 14, color: "#94A3B8", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKER CARDS */}
        <section style={{ padding: "5vw", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
              <div>
                <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, color: "#0F172A", letterSpacing: -1 }}>Workers near you</h2>
                <p style={{ color: "#6B7280", fontFamily: "var(--body)", marginTop: 6 }}>All verified. All rated. All ready.</p>
              </div>
              <button style={{ padding: "10px 24px", border: "2px solid #111827", borderRadius: 50, background: "transparent", fontFamily: "var(--display)", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>View all →</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
              {WORKERS.map((w, i) => <WorkerCard key={w.name} w={w} delay={i * 80} />)}
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section style={{ padding: "5vw", background: "#FEF3C7" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, color: "#0F172A", marginBottom: 12, letterSpacing: -1 }}>
              Built for trust, especially for mothers & families
            </h2>
            <p style={{ fontFamily: "var(--body)", color: "#374151", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px" }}>
              We know what it means to let a stranger into your home. That's why every worker is Aadhaar-verified, background-checked, and admin-approved before they can appear on KamKaro.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {[
                { icon: "🪪", title: "Aadhaar Verified", desc: "Real identity confirmed via UIDAI before any profile goes live." },
                { icon: "👤", title: "Admin Reviewed", desc: "Human review of documents, skills, and work history." },
                { icon: "🔒", title: "Escrow Payment", desc: "Your money is held safely — released only after you confirm job done." },
                { icon: "📞", title: "Masked Calls", desc: "Your phone number is never shared with workers." },
              ].map(t => (
                <div key={t.title} style={{ background: "#fff", borderRadius: 20, padding: "24px 18px", border: "1px solid #FDE68A", textAlign: "left" }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 15, color: "#0F172A", marginBottom: 6 }}>{t.title}</div>
                  <div style={{ fontFamily: "var(--body)", fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ padding: "5vw", background: "#fff" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, color: "#0F172A", textAlign: "center", marginBottom: 40, letterSpacing: -1 }}>
              What customers say
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} style={{
                  background: i === 1 ? "#0F172A" : "#FAFAF9",
                  border: `1px solid ${i === 1 ? "#334155" : "#E5E7EB"}`,
                  borderRadius: 20, padding: "28px 24px",
                }}>
                  <div style={{ color: "#F59E0B", fontSize: 20, marginBottom: 14 }}>{"★".repeat(t.stars)}</div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.7, color: i === 1 ? "#CBD5E1" : "#374151", marginBottom: 20 }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%", background: "#FEF3C7",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--display)", fontWeight: 700, fontSize: 13, color: "#92400E",
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 14, color: i === 1 ? "#F1F5F9" : "#111827" }}>{t.name}</div>
                      <div style={{ fontFamily: "var(--body)", fontSize: 12, color: i === 1 ? "#64748B" : "#9CA3AF" }}>{t.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: "6vw 5vw",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #F59E0B18, transparent 70%)", top: -100, left: "50%", transform: "translateX(-50%)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 900, color: "#fff", letterSpacing: -2, marginBottom: 16, lineHeight: 1.05 }}>
              Ready to find your<br /><span style={{ color: "#F59E0B" }}>trusted worker?</span>
            </h2>
            <p style={{ fontFamily: "var(--body)", color: "#94A3B8", fontSize: 17, marginBottom: 36, maxWidth: 440, margin: "0 auto 36px" }}>
              Join 50,000+ families who use KamKaro for safe, reliable skilled help.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{
                padding: "16px 36px", background: "#F59E0B", color: "#0F172A",
                border: "none", borderRadius: 50, fontSize: 16, fontWeight: 800,
                fontFamily: "var(--display)", cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(245,158,11,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
              >Find a Worker Now</button>
              <button style={{
                padding: "16px 36px", background: "transparent", color: "#fff",
                border: "2px solid #475569", borderRadius: 50, fontSize: 16, fontWeight: 700,
                fontFamily: "var(--display)", cursor: "pointer",
              }}>Join as a Worker</button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#0A0F1A", padding: "3vw 5vw", borderTop: "1px solid #1E293B" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 900, color: "#fff" }}>
              Kam<span style={{ color: "#F59E0B" }}>Karo</span>
            </div>
            <div style={{ fontFamily: "var(--body)", fontSize: 13, color: "#475569" }}>
              © 2025 KamKaro · Trusted skilled workers for every home
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy", "Terms", "Support"].map(l => (
                <a key={l} href="#" style={{ fontFamily: "var(--body)", fontSize: 13, color: "#475569", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}