import { useState, useEffect, RefObject } from "react";

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>, 
  threshold = 0.001,
  forceVisible = false
) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Si forceVisible es true, inmediatamente establecemos el componente como visible
    if (forceVisible && !hasLoaded) {
      setIsVisible(true);
      setHasLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, hasLoaded, forceVisible]);
  
  return isVisible;
}