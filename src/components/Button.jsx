import '../styles/button.css';
import clsx from 'clsx';
export default function Button({variant='primary', as='button', href, children, ...rest}){
  const Comp = href ? 'a' : as;
  return <Comp href={href} className={clsx('btn', variant)} {...rest}>{children}</Comp>;
}
