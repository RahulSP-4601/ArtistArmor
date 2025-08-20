import { useEffect, useRef } from 'react';

export default function useReveal(delay = 0){
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if(!el) return;
    const io = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        setTimeout(()=> el.classList.add('in'), delay);
        io.disconnect();
      }
    }, { threshold: 0.2 });
    io.observe(el);
    return ()=> io.disconnect();
  }, [delay]);
  return ref;
}
