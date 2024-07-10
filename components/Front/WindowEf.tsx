"use client";

/* eslint-disable react/no-unescaped-entities */
import { FaPlane } from "react-icons/fa";
import { DivOrigami } from "./DivOrigami";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function WindowEf() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  }) as MotionValue<number>;
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 12]);
  const imageX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;
  return (
    <>
      <div ref={ref} className="relative z-10 h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="hero-background sticky left-0 top-0 grid h-screen origin-[50%_70%] gap-2 p-6 pt-12 [grid-template-rows:4fr_1fr] md:origin-[90%_40%] md:pt-20"
        >
          <div className="window-mask flex flex-col rounded-3xl bg-white dark:bg-background p-12 md:flex-row">
            <div className="flex h-full flex-col">
              <h1 className="mb-5 max-w-[12ch] text-4xl font-bold leading-[0.85] md:my-auto md:text-[80px] xl:text-[128px]">
                Welcome to SoleStyle
              </h1>
              <p className="text-lg md:text-3xl">
                Discover the best shoes for every occasion.
              </p>
              <Button className="mt-5 flex items-center space-x-2">
                <span>Shop Now</span>
                <BsArrowRight />
              </Button>
            </div>
            <div className="mx-auto -mb-7 mt-4 box-content aspect-[5/8] w-[150px] min-w-[150px] rounded-full border-[4px] border-gray-300 md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]" />
          </div>
        </motion.div>
      </div>
      <div className="mt-[-200vh] h-[190vh] overflow-clip pb-20">
        <motion.p
          style={{ x: imageXCalc }}
          className="relative top-1/2 mx-auto md:flex items-center justify-center block aspect-video w-[1600px] max-w-[90%] rounded-[60px] shadow-2xl md:top-1/4"
        >
          <video
            autoPlay
            loop
            muted
            controls
            className="object-cover w-full h-full rounded-[60px]"
            src="/NikeVideo1.mp4"
          />
        </motion.p>
      </div>
    </>
  );
}
