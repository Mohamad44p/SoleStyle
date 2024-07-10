"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import all from "@/public/all.jpeg";
import men from "@/public/men.jpeg";
import women from "@/public/women.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function CategoriesSelection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="py-24 sm:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex justify-between items-center m-6"
      >
        <motion.h2
          variants={textVariants}
          className="text-2xl font-extrabold tracking-tight"
        >
          Shop by Category
        </motion.h2>
        <motion.div variants={textVariants}>
          <Link
            className="text-sm font-semibold text-primary hover:text-primary/80"
            href="/products/all"
          >
            Browse all Products &rarr;
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2"
        >
          <Image
            src={all}
            alt="All Products Image"
            className="object-cover object-center "
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
          <div className="p-6 flex items-end">
            <Link href="/products/all">
              <h3 className="text-white font-semibold">All Products</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
        >
          <Image
            src={men}
            alt="Products for men Image"
            className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/men">
              <h3 className="text-white font-semibold">Products for Men</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
        >
          <Image
            src={women}
            alt="Women product image"
            className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/women">
              <h3 className="text-white font-semibold">Products for Women</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
