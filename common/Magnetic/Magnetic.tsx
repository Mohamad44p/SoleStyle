// Magnetic.tsx (or Magnetic.js)
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnetic = ({ children }: { children: any }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(children);
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current?.addEventListener("mousemove", (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = magnetic.current?.getBoundingClientRect();
      const height = rect?.height ?? 0;
      const width = rect?.width ?? 0;
      const left = rect?.left ?? 0;
      const top = rect?.top ?? 0;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    });

    magnetic.current?.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, [children]);

  return <div ref={magnetic}>{children}</div>;
};

export default Magnetic;
