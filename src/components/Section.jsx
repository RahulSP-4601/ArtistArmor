import '../styles/section.css';
export default function Section({id, className='', children}) {
  return <section id={id} className={`section ${className}`}>{children}</section>;
}
