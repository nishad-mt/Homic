import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import "../styles/Homiq.css";

const WORKERS = [
  { name: "Rajan Kumar", trade: "Electrician", rating: 4.9, jobs: 312, city: "Chennai", verified: true, color: "#2563eb", icon: "⚡", initials: "RK" },
  { name: "Suresh Pillai", trade: "Plumber", rating: 4.8, jobs: 278, city: "Madurai", verified: true, color: "#3B82F6", icon: "🔧", initials: "SP" },
  { name: "Anbu Selvam", trade: "Carpenter", rating: 5.0, jobs: 190, city: "Coimbatore", verified: true, color: "#10B981", icon: "🪚", initials: "AS" },
  { name: "Mani Vel", trade: "Painter", rating: 4.7, jobs: 445, city: "Trichy", verified: true, color: "#EC4899", icon: "🖌️", initials: "MV" },
  { name: "Karthik Raja", trade: "AC Technician", rating: 4.9, jobs: 203, city: "Salem", verified: true, color: "#8B5CF6", icon: "❄️", initials: "KR" },
  { name: "Senthil Babu", trade: "Mason", rating: 4.6, jobs: 367, city: "Madurai", verified: true, color: "#F97316", icon: "🧱", initials: "SB" },
];

const CATEGORIES = [
  { label: "Electrician", icon: "⚡", color: "#eff6ff", border: "#2563eb", text: "#1E3A8A", desc: "Wiring, repairs & fittings" },
  { label: "Plumber", icon: "🔧", color: "#DBEAFE", border: "#3B82F6", text: "#1E3A8A", desc: "Leaks, pipes & fixtures" },
  { label: "Carpenter", icon: "🪚", color: "#D1FAE5", border: "#10B981", text: "#064E3B", desc: "Furniture & woodwork" },
  { label: "Painter", icon: "🖌️", color: "#FCE7F3", border: "#EC4899", text: "#831843", desc: "Walls & home painting" },
  { label: "Coconut Harvester", icon: "🥥🌴", color: "#FEF3C7", border: "#D97706", text: "#78350F", desc: "Safe climbing & picking" },
  { label: "AC Tech", icon: "❄️", color: "#EDE9FE", border: "#8B5CF6", text: "#3B0764", desc: "Service & repair" },
  { label: "Mason", icon: "🧱", color: "#FFEDD5", border: "#F97316", text: "#7C2D12", desc: "Brickwork & plaster" },
  { label: "Cleaner", icon: "🧹", color: "#ECFDF5", border: "#34D399", text: "#065F46", desc: "Deep home cleaning" },
];

const TESTIMONIALS = [
  { name: "Priya Nair", city: "Madurai", text: "Found a plumber within 10 minutes. Aadhaar-verified, polite, and did a perfect job. I felt completely safe as a woman calling a stranger home.", avatar: "PN", stars: 5 },
  { name: "Meera Krishnan", city: "Chennai", text: "As a working mother, I need trustworthy workers fast. Homiq's verified badges give me peace of mind. My electrician was punctual and professional.", avatar: "MK", stars: 5 },
  { name: "Lakshmi Sundaram", city: "Coimbatore", text: "The escrow payment system is brilliant — I paid only after the work was done. No more arguing or paying in advance and getting cheated.", avatar: "LS", stars: 5 },
];

const STATS = [
  { value: "12,400+", label: "Verified Professionals" },
  { value: "100%", label: "Genuity Guaranteed" },
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
  }, [threshold]);
  return [ref, inView];
}

function StarRating({ rating }) {
  return (
    <span className="star-rating">
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
      <span>{rating}</span>
    </span>
  );
}

function WorkerCard({ w, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div 
      ref={ref} 
      className={`worker-card ${inView ? 'visible' : 'hidden'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="worker-card-bg" style={{ background: w.color + "18" }} />
      <div className="worker-header">
        <div className="worker-avatar" style={{
          background: `linear-gradient(135deg, ${w.color}33, ${w.color}66)`,
          color: w.color,
          border: `2px solid ${w.color}44`
        }}>{w.initials}</div>
        <div>
          <div className="worker-name">{w.name}</div>
          <div className="worker-city">📍 {w.city}</div>
        </div>
      </div>
      <div className="worker-tags">
        <span className="tag-trade" style={{
          background: w.color + "20", color: w.color, border: `1px solid ${w.color}40`
        }}>{w.icon} {w.trade}</span>
        {w.verified && (
          <span className="tag-verified">✓ Aadhaar</span>
        )}
      </div>
      <StarRating rating={w.rating} />
      <div className="worker-jobs">{w.jobs} jobs completed</div>
      <button className="worker-btn">View Profile</button>
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
  }, [onDone]);

  return (
    <div className="intro-container" style={{ opacity: phase === 3 ? 0 : 1, pointerEvents: phase === 3 ? "none" : "all" }}>
      <div style={{ position: "relative", marginBottom: 28 }}>
        {phase >= 1 && [0, 1, 2].map(i => (
          <div key={i} className="intro-ripple" style={{ animation: `ripple 1.5s ease-out ${i * 0.4}s infinite` }} />
        ))}
        <div className="intro-logo-bg" style={{
          transform: phase >= 1 ? "scale(1)" : "scale(0)", 
          animation: phase >= 1 ? "bounce 1.5s ease-in-out infinite" : "none"
        }}>
          <img src={logo} alt="Homiq Logo" className="intro-logo-img" />
        </div>
      </div>
      {phase >= 1 && (
        <div className="intro-text-anim">
          <div className="intro-brand">
            Hom<span className="intro-highlight">iq</span>
          </div>
          {phase >= 2 && (
            <div className="intro-subtitle">
              Genuine Professionals. Real Trust.
            </div>
          )}
        </div>
      )}
      {phase >= 2 && (
        <div className="intro-progress-bar">
          <div className="intro-progress-fill" />
        </div>
      )}
    </div>
  );
}

export default function Homiq() {
  const [ready, setReady] = useState(false);
  const [heroRef] = useInView(0.1);
  const [trustRef, trustInView] = useInView(0.1);
  const [workersRef, workersInView] = useInView(0.1);

  return (
    <>
      {!ready && <IntroAnimation onDone={() => setReady(true)} />}

      <div className={`main-wrapper ${ready ? 'visible' : 'hidden'}`}>

        {/* CUSTOMER HERO - FOCUS ON SERVICE SELECTION */}
        <section ref={heroRef} className="hero-section">
          <div className="hero-bg-blob-1" />
          
          <div>
            <div className="hero-anim hero-anim-1 hero-badge">
              <span className="pulse-dot" />
              100% Genuine Professionals Guaranteed
            </div>

            <h1 className="hero-anim hero-anim-2 hero-title">
              What service do you<br />
              <span className="hero-title-highlight">
                need today?
                <svg className="hero-underline" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0 8 Q75 2 150 8 Q225 14 300 8" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>

            <p className="hero-anim hero-anim-3 hero-desc">
              Select a category below to book an Aadhaar-verified, highly-rated professional for your home. Safe, secure, and genuine.
            </p>

            {/* DIRECT SERVICE SELECTION GRID IN HERO */}
            <div className="hero-anim hero-anim-4 hero-grid">
              {CATEGORIES.slice(0, 8).map((c) => (
                <div key={c.label} className="category-card">
                  <div className="category-icon">{c.icon}</div>
                  <div className="category-label">{c.label}</div>
                  <div className="category-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero right — Trust Card */}
          <div className="hero-trust-container">
            <div className="float-card trust-card">
              <div className="trust-card-icon-wrap">
                <div className="trust-card-icon">🛡️</div>
              </div>
              <h3 className="trust-card-title">The Homiq Guarantee</h3>
              <p className="trust-card-desc">Every worker is vetted, genuine, and monitored for quality. Your safety is our priority.</p>
              
              <div className="trust-list">
                {[
                  { title: "100% Aadhaar Verified", icon: "✓", color: "#166534", bg: "#F0FDF4", border: "#BBF7D0" },
                  { title: "Escrow Payment Protection", icon: "🔒", color: "#1D4ED8", bg: "#EFF6FF", border: "#BFDBFE" },
                  { title: "Admin Approved Profiles", icon: "⭐", color: "#92400E", bg: "#FEF3C7", border: "#FDE68A" }
                ].map((item, idx) => (
                  <div key={idx} className="trust-item" style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                    <span className="trust-item-icon" style={{ color: item.color }}>{item.icon}</span>
                    <span className="trust-item-title" style={{ color: item.color }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE TRUST BAR */}
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="marquee-group">
                {["Genuine Professionals","Aadhaar Verified Workers",  "Escrow Payment Protection", "Masked Call Routing", "Location-Based Matching", "Quality Guaranteed", "24/7 Support"].map(t => (
                  <span key={t} className="marquee-text">• {t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <section className="section-padding section-bg-white">
          <div className="container">
            <h2 className="section-title section-title-dark section-title-center">
              Real people. Genuine trust.
            </h2>
            <p className="section-subtitle section-subtitle-dark section-subtitle-center">
              Don't just take our word for it.
            </p>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`testimonial-card ${i === 1 ? 'testimonial-dark' : 'testimonial-light'}`}>
                  <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                  <p className={`testimonial-text ${i === 1 ? 'testimonial-text-dark' : 'testimonial-text-light'}`}>"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className={`testimonial-name ${i === 1 ? 'testimonial-name-dark' : 'testimonial-name-light'}`}>{t.name}</div>
                      <div className={`testimonial-city ${i === 1 ? 'testimonial-city-dark' : 'testimonial-city-light'}`}>{t.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEEP DIVE TRUST SECTION */}
        <section ref={trustRef} className={`section-padding section-bg-blue transition-slow ${trustInView ? 'visible' : 'hidden'}`}>
          <div className="container-narrow" style={{ textAlign: "center" }}>
            <h2 className="section-title section-title-dark section-title-center">
              Built for your peace of mind
            </h2>
            <p className="section-subtitle section-subtitle-dark section-subtitle-center" style={{ maxWidth: 600 }}>
              We know what it means to let someone into your home. That's why we've built the most rigorous verification system in the industry.
            </p>
            <div className="features-grid">
              {[
                { icon: "🪪", title: "Aadhaar Vetted", desc: "Every worker's real identity is confirmed via UIDAI before they join." },
                { icon: "👁️", title: "Admin Reviewed", desc: "Our team personally reviews documents, skills, and work history." },
                { icon: "🔒", title: "Escrow Payments", desc: "We hold your money safely. It's released only when you say the job is done." },
                { icon: "📞", title: "Masked Calls", desc: "Your phone number is completely hidden from workers." },
              ].map(t => (
                <div key={t.title} className="feature-card">
                  <div className="feature-icon">{t.icon}</div>
                  <div className="feature-title">{t.title}</div>
                  <div className="feature-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-padding section-bg-dark">
          <div className="container">
            <h2 className="section-title section-title-light section-title-center">
              How <span style={{ color: "#2563eb" }}>Homiq</span> works
            </h2>
            <p className="section-subtitle section-subtitle-light section-subtitle-center">
              Four steps to a perfect home.
            </p>
            <div className="steps-grid">
              {[
                { step: "1", title: "Select Service", desc: "Pick what you need from our extensive category list.", icon: "📋" },
                { step: "2", title: "Get Matched", desc: "Review profiles of genuine, verified professionals near you.", icon: "🔍" },
                { step: "3", title: "Job Done safely", desc: "Worker completes the task while your money stays secure.", icon: "✅" },
                { step: "4", title: "Release Payment", desc: "Confirm the work is excellent, and we release the funds.", icon: "🎉" },
              ].map((s) => (
                <div key={s.step} className="step-card">
                  <div className="step-number">0{s.step}</div>
                  <div className="step-icon">{s.icon}</div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKER CARDS */}
        <section ref={workersRef} className={`section-padding section-bg-white transition-slow ${workersInView ? 'visible' : 'hidden'}`}>
          <div className="container-wide">
            <div className="workers-header">
              <div>
                <h2 className="workers-title">Top-rated Professionals</h2>
                <p className="workers-desc">View some of our highest-rated, active workers in your area.</p>
              </div>
              <button className="btn-outline">Browse all →</button>
            </div>
            <div className="workers-grid">
              {WORKERS.map((w, i) => <WorkerCard key={w.name} w={w} delay={i * 80} />)}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className={`stat-card ${i % 2 === 0 ? 'stat-card-dark' : 'stat-card-light'}`}>
                <div className={`stat-value ${i % 2 === 0 ? 'stat-value-dark' : 'stat-value-light'}`}>{s.value}</div>
                <div className={`stat-label ${i % 2 === 0 ? 'stat-label-dark' : 'stat-label-light'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-bg-blob" />
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to book a<br /><span style={{ color: "#2563eb" }}>genuine professional?</span>
            </h2>
            <p className="cta-desc">
              Join 50,000+ families who use Homiq for safe, reliable skilled help.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Book a Service</button>
              <button className="btn-secondary">Join as a Worker</button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Homiq Logo" />
              Hom<span style={{ color: "#2563eb" }}>iq</span>
            </div>
            <div className="footer-copyright">
              © 2025 Homiq · Genuine professionals for every home
            </div>
            <div className="footer-links">
              {["Privacy", "Terms", "Support"].map(l => (
                <a key={l} href="#">{l}</a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}