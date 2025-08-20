import '../styles/sectionHeading.css';
import useReveal from '../hooks/useReveal';

export default function SectionHeading({eyebrow, title, highlight, subtitle, center=true}) {
  const ref = useReveal();
  return (
    <div className={`reveal ${center? 'hero-center':''}`} ref={ref}>
      {eyebrow && <div className="badge">{eyebrow}</div>}
      <h2>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="lead" style={{margin:'12px auto 0'}}>{subtitle}</p>}
    </div>
  );
}
