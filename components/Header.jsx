"use client";
import { assets } from "../assests/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Header = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-32 pb-32 relative"
    >
      <ParticleBackground />
      {/* Profile image - fade in + gentle floating loop */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={assets.profile_img}
            alt=""
            className="rounded-full w-40"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Ahmad Mujtaba{" "}
        <motion.span
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.span>
      </motion.h3>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo"
      >
        MERN Stack &amp; Next.js <br /> Developer.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-5xl text-[18px] mx-auto font-Ovo"
      >
        I'm a full-stack developer based in Peshawar, Pakistan, with 1+ years of
        experience building web applications using MongoDB, Express, React,
        Node.js, and Next.js.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 flex-wrap"
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
          href="/ahmad-mujtaba-resume.pdf"
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
    </div>
  );
};

export default Header;
