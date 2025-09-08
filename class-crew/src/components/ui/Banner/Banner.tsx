"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/images/Frame%20113.png"]; // URL-encoded to handle space in filename

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex h-full"
        key={currentSlide}
        custom={currentSlide}
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {slides.map((src, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />

            <motion.div
              className="absolute inset-0 bg-black/40 flex justify-center items-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="flex flex-col text-left text-white max-w-xl ml-auto pr-16"
                variants={containerVariants}
              >
                <motion.h2
                  className="md:text-5xl font-normal"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  LOREM IPSUM DOLOR
                </motion.h2>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-4"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  LOREM IPSUM DOLOR <br /> SIT AMET
                </motion.h1>

                <motion.p
                  className="text-lg md:text-2xl mb-6"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                />

                <motion.button
                  className="w-fit bg-white text-[var(--primary)] px-6 py-3 rounded-lg font-semibold transition-transform duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  whileInView={{ y: 0 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Explore
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <Image
          src="/images/left-arroww.png"
          alt="Left"
          width={36}
          height={36}
        />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <Image
          src="/images/arrow-right.png"
          alt="Right"
          width={36}
          height={36}
        />
      </motion.button>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
