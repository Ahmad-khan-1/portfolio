"use client";
import { assets } from "../assests/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const techStack = ["React", "Next.js", "Node.js", "MongoDB"];

const Header = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-32 pb-32 relative"
    >
      <ParticleBackground />

      {/* Profile image with available-for-work badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src={assets.profile_img}
            alt="Ahmad Mujtaba"
            className="rounded-full w-40 ring-4 ring-white dark:ring-white/10"
            priority
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 250 }}
            className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full shadow-md border border-slate-200 dark:border-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] font-medium text-slate-600 dark:text-gray-300">
              Available
            </span>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo"
      >
        Hi! I'm Ahmad Mujtaba{" "}
        <motion.span
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.span>
      </motion.h3>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-3xl sm:text-5xl lg:text-[62px] font-Ovo leading-tight"
      >
        Senior Frontend &amp; Next.js <br /> Developer.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-2xl text-[16px] sm:text-[18px] mx-auto font-Ovo text-slate-600 dark:text-gray-400"
      >
        I'm a senior frontend developer with 2 years of experience building web
        applications using MongoDB, Express, React, Node.js, and Next.js — based
        in Peshawar, Pakistan.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 flex-wrap"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-10 py-3 border border-black dark:border-white rounded-full bg-black dark:bg-transparent text-white flex items-center gap-2 hover:bg-black/90 dark:hover:bg-white/10 transition-colors duration-300"
        >
          contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume-1.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border rounded-full border-gray-500 dark:border-white flex items-center gap-2 hover:bg-lightHover dark:hover:bg-darkHover transition-colors duration-300"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4 dark:invert"
          />
        </motion.a>
      </motion.div>

      {/* Tech stack chips */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-2 mt-6"
      >
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-white/15 text-slate-600 dark:text-gray-300 font-Ovo"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
