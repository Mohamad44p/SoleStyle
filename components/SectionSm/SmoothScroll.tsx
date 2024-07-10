"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "./Landing";
import SlidingImages from "./SlidingImages";
import Projects from "./Projects";
import Description from "./Description";
import Footer from "./Footer";
export default function SmoothScroll() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait"></AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Footer />
    </main>
  );
}
