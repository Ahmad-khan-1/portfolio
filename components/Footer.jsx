"use client";
import Image from "next/image";
import React from "react";
import { assets } from "../assests/assets";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Ahmad-khan-1" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-mujtaba-aman/" },
];

const Footer = () => {
  return (
    <footer className="mt-20 text-black dark:text-white overflow-hidden">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={assets.logo}
            alt="Ahmad Mujtaba"
            className="w-36 mx-auto mb-6 dark:invert"
          />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-Ovo mb-6"
        >
          Let's build something together.
        </motion.h3>

        <motion.a
          href="mailto:amanullahqurayshi@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative inline-flex items-center gap-2 text-sm sm:text-base group"
        >
          <Image src={assets.mail_icon} alt="" className="w-5 dark:invert" />
          amanullahqurayshi@gmail.com
          <span className="absolute left-6 -bottom-1 h-[1px] w-[calc(100%-1.5rem)] bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        </motion.a>

        <div className="border-t border-gray-400 dark:border-gray-600 mx-auto max-w-3xl mt-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Ahmad Mujtaba. All rights reserved.
          </p>

          <ul className="flex items-center gap-8">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
