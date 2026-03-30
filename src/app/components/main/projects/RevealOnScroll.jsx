"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  y = 40,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 700ms ease, transform 700ms ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}