// components/IconTile.jsx
import '../styles/iconTile.css';
export default function IconTile({ icon, title, children }) {
  return (
    <div className="card icon-tile">
      <div className="icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
