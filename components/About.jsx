"use client";
import { assets, infoList, toolsData } from "../assests/assets";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 30%"],
  });

  const imageClip = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-3, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-24 px-6 lg:px-20 xl:px-32 scroll-mt-20 bg-white dark:bg-darkTheme text-black dark:text-white overflow-hidden"
    >
      {/* Heading — letters animate in one by one */}
      <div className="flex items-baseline gap-4 mb-16 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-accent dark:text-accent-hover"
        >
          01
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="h-px flex-1 bg-gray-300 dark:bg-white/10"
        />
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-Ovo"
        >
          About Me
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14">
        {/* Image — clip reveal + slight rotation settle + hover tilt */}
        <div className="relative">
          <motion.div
            style={{ clipPath: imageClip, rotate: imageRotate }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-none overflow-hidden aspect-[3/4] border-4 border-black dark:border-white"
          >
            <Image
              src={assets.user_image}
              alt="Ahmad Mujtaba"
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              sizes="320px"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            Available for work
          </motion.div>
        </div>

        {/* Right content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg leading-8 text-gray-700 dark:text-gray-300 mb-10 max-w-xl"
          >
            I am a{" "}
            <span className="font-semibold text-black dark:text-white underline decoration-accent decoration-2 underline-offset-4">
              MERN Stack &amp; Next.js developer
            </span>{" "}
            with hands-on experience building full-stack web applications. I
            focus on writing clean, maintainable code and creating scalable
            products using MongoDB, Express, React, Node.js and Next.js.
          </motion.p>

          {/* Info cards — slide-in with icon pop */}
          <div className="space-y-3 mb-12 max-w-xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 py-4 pl-5 border-l-2 border-gray-300 dark:border-white/15 hover:border-accent dark:hover:border-accent-hover transition-colors duration-300 cursor-default"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12 + 0.15,
                    type: "spring",
                    stiffness: 250,
                  }}
                >
                  <Image src={icon} alt={title} className="w-6 mt-1" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack — pop-in with bounce, wiggle on hover */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[3px] uppercase font-semibold text-gray-500 dark:text-gray-400"
            >
              Tech Stack
            </motion.span>
            <div className="flex flex-wrap gap-3 mt-4">
              {toolsData.map((tool, index) => (
              <motion.div
  key={index}
  initial={{ opacity: 0, scale: 0, rotate: -20 }}
  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.4,
    delay: index * 0.08,
    type: "spring",
    stiffness: 200,
  }}
  whileHover={{
    y: -4,
    rotate: [0, -8, 8, 0],
    transition: {
      rotate: { duration: 0.4, ease: "easeInOut" },
      y: { type: "spring", stiffness: 300 },
    },
  }}
  className="w-12 h-12 flex items-center justify-center border border-gray-300 dark:border-white/15 hover:border-black dark:hover:border-white transition-colors duration-300"
>
                  <Image src={tool} alt="Tool" className="w-6" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;