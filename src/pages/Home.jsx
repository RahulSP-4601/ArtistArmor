// src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import Button from '../components/Button';
import IconTile from '../components/IconTile';
import DividerGlow from '../components/DividerGlow';
import useReveal from '../hooks/useReveal';
import '../styles/home.css';
import {
  FiShield, FiAlertTriangle, FiUsers, FiStar,
  FiLock, FiCheckCircle, FiZap, FiCopy, FiFileText, FiEye
} from 'react-icons/fi';

/* ---------- CountUp that animates when visible ---------- */
function CountUp({ end = 0, duration = 1200, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();

      const start = performance.now();
      const from = 0;
      const diff = end - from;

      const tick = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(from + diff * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ---------- Reveal wrapper for scroll-in animations ---------- */
function Reveal({ as: Tag = 'div', className = '', style, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el); // reveal once
          }
        });
      },
      { threshold: 0.12, rootMargin: '160px 0px 0px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export default function Home() {
  const heroRef = useReveal();

  return (
    <>
      {/* HERO */}
      <Section className="hero">
        <div className="hero-orb" aria-hidden />
        <Container>
          <div className="hero-center reveal" ref={heroRef}>
            <Badge>🛡 Secure Creative Marketplace</Badge>
            <h1 style={{ marginTop: 18 }}>
              Protect Your Creativity.<br />
              <span className="gradient-text">Share Without Fear.</span>
            </h1>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Artist Armor is a secure marketplace where creators can showcase, sell, and protect their work with confidence.
            </p>
            <div className="hero-cta">
              <Button href="#waitlist" variant="primary">Join the Waitlist</Button>
              <Button href="#features" variant="ghost">Learn More</Button>
            </div>
          </div>
        </Container>
        <div className="hero-fade" aria-hidden />
      </Section>

      {/* TRUSTED BY (logo marquee) */}
      <Section className="logos">
        <Container>
          <div className="logo-marquee" aria-label="Trusted by creators and teams">
            <div className="logo-track">
              {['Behance','DeviantArt','Dribbble','Unsplash','Figma','Sketch','Procreate','ArtStation'].map((name, i) => (
                <div className="logo-pill" key={i}>{name}</div>
              ))}
              {['Behance','DeviantArt','Dribbble','Unsplash','Figma','Sketch','Procreate','ArtStation'].map((name, i) => (
                <div className="logo-pill" key={`d-${i}`}>{name}</div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <DividerGlow />

      {/* PAIN POINTS */}
      <Section id="pain">
        <Container>
          <Reveal className="section-intro">
            <SectionHeading
              title="The Creative Marketplace"
              highlight="Feels Like a Gamble."
              subtitle="Sharing your art should feel exciting, not risky. But many creators worry about:" />
          </Reveal>
          <br /> <br />
          {/* show immediately (no Reveal) to avoid blank gap */}
          <div className="three-grid" style={{ marginTop: 12 }}>
            <IconTile icon={<FiAlertTriangle size={26} />} title="Unprotected Work">
              Having their work stolen or misused.
            </IconTile>
            <IconTile icon={<FiUsers size={26} />} title="Overwhelming Marketplaces">
              Navigating confusing marketplaces.
            </IconTile>
            <IconTile icon={<FiStar size={26} />} title="Unfair Value">
              Getting fair recognition and value for their talent.
            </IconTile>
          </div>

          <div className="three-grid subtle-grid" style={{ marginTop: 10 }}>
            <IconTile icon={<FiCopy size={26} />} title="Unauthorized Reposts">
              Your work is re-uploaded without credit.
            </IconTile>
            <IconTile icon={<FiEye size={26} />} title="File Leaks">
              Full-res files circulate after a single sale.
            </IconTile>
            <IconTile icon={<FiFileText size={26} />} title="License Confusion">
              Buyers aren’t sure what they can or can’t do.
            </IconTile>
          </div>

          <br /> <br />

          <div className="checklist">
            {[
              'Built-in license on every listing',
              'Watermarked previews by default',
              'Verified buyers & receipts',
              'Fingerprint + proof of authorship',
              '24/7 misuse monitoring',
              'One-click dispute kit'
            ].map((txt, i) => (
              <div className="check" key={i}><FiCheckCircle /><span>{txt}</span></div>
            ))}
          </div>
          <br /> <br />
          <div className="mini-cta">
            <Button href="#features" variant="ghost">See how we protect you →</Button>
          </div>
        </Container>
      </Section>

      {/* STATS */}
      <Section className="stats">
        <Container>
          <div className="stats-grid">
            {[
              { num: <><CountUp end={12000} />+</>, label: 'Protected Works' },
              { num: <><CountUp end={100} suffix="%" /></>, label: 'Seller Satisfaction' },
              { num: <><CountUp end={24} />/7</>, label: 'Protection Monitoring' },
              { num: <>$<CountUp end={3} />M</>, label: 'Creator Earnings' },
            ].map((s, i) => (
              <Reveal key={i} className="stat" style={{ '--d': `${i * 80}ms` }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <DividerGlow />

      {/* BEFORE / AFTER */}
      <Section>
        <Container>
          <Reveal className="section-intro">
            <SectionHeading
              title="Your"
              highlight="Fortress"
              subtitle="We combine top-tier security with industry expertise so every creator can thrive." />
          </Reveal>

          <div className="before-after" style={{ marginTop: 22 }}>
            <Reveal className="card emphasis-red">
              <h3>Before: Vulnerable</h3>
              <p className="lead" style={{ fontSize: 16 }}>
                Messy, insecure, unprotected creative work vulnerable to theft and misuse.
              </p>
            </Reveal>
            <Reveal className="card emphasis-green">
              <h3>After: Protected & Thriving</h3>
              <p className="lead" style={{ fontSize: 16 }}>
                Secure, organized, and profitable creative marketplace with comprehensive protection.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="how">
        <Container>
          <Reveal className="section-intro">
            <SectionHeading title="How" highlight="It Works" center />
          </Reveal>

          <ol className="steps">
            {[
              { title: (<><FiLock /> Upload & Secure</>), text: 'We fingerprint your work, watermark it, and store proofs for future verification.' },
              { title: (<><FiCheckCircle /> List & Sell</>), text: 'Create listings with licenses and terms baked in—buyers get trusted, verified assets.' },
              { title: (<><FiZap /> Track & Enforce</>), text: 'We monitor misuse 24/7 and help you take action quickly to protect your earnings.' },
            ].map((st, i) => (
              <Reveal as="li" key={i} style={{ '--d': `${i * 80}ms` }}>
                <div className="bullet">{i + 1}</div>
                <h4>{st.title}</h4>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <DividerGlow />

      {/* FEATURES */}
      <Section id="features">
        <Container>
          <Reveal className="section-intro">
            <SectionHeading title="What You Get With" highlight="Artist Armor" />
          </Reveal>

          <div className="three-grid feature-tilt" style={{ marginTop: 22 }}>
            {[
              { icon: <FiShield size={26} />, title: 'Secure Portfolios', copy: 'Showcase with built-in protection and watermarking tech.' },
              { icon: <FiUsers size={26} />, title: 'Trusted Marketplace', copy: 'Buy and sell creative works with confidence and complete security.' },
              { icon: <FiStar size={26} />, title: 'Creator Protection Tools', copy: 'Watermarking, copyright guidance, and verified transactions.' },
            ].map((it, i) => (
              <Reveal key={i} style={{ '--d': `${i * 80}ms` }}>
                <IconTile icon={it.icon} title={it.title}>{it.copy}</IconTile>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS (2-up grid) */}
      <Section className="testimonials">
        <Container>
          <Reveal className="section-intro">
            <SectionHeading title="Creators" highlight="Love Us" center />
          </Reveal>

          <div className="tape-grid">
            {[
              { quote: 'I finally share my design files without worry.', name: 'Maya R., Brand Designer' },
              { quote: 'Sales went up and takedowns got way easier.', name: 'Ken L., Illustrator' },
              { quote: 'The watermarking + licensing workflow is slick.', name: 'Zoë P., Photographer' },
              { quote: 'Listing + licensing in one place saved me hours.', name: 'Ari S., Concept Artist' },
            ].map((t, i) => (
              <Reveal key={i} className="t-card" style={{ '--d': `${i * 80}ms` }}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>— {t.name}</figcaption>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ (single column) */}
      <Section className="faq">
        <Container>
          <Reveal className="section-intro">
            <SectionHeading title="Frequently" highlight="Asked Questions" center />
          </Reveal>
          <div className="faq-grid">
            {[
              { q: 'How is my work protected?', a: 'We create a cryptographic fingerprint and add invisible/visible watermarks. Proofs are stored to verify authorship.' },
              { q: 'Can I bring existing work?', a: 'Yes. Batch-import and we’ll secure everything with the same protection stack.' },
              { q: 'Do buyers get licenses?', a: 'Yes. Each purchase includes a license with terms and verifiable receipt.' },
              { q: 'What about fees?', a: 'Transparent marketplace fees, and instant payouts for eligible creators.' },
            ].map((item, i) => (
              <Reveal key={i} style={{ '--d': `${i * 60}ms` }}>
                <details>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="waitlist" className="mega-cta">
        <Container>
          <Reveal className="hero-center">
            <h2>Your Creativity. <span className="gradient-text">Protected.</span></h2>
            <p className="lead" style={{ margin: '10px auto 0' }}>Be the first to experience Artist Armor. Join our waitlist today.</p>
            <div className="hero-cta">
              <Button variant="primary">Join the Waitlist</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
