"use client";
import React from "react";
import { workData } from "../assests/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectRow = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-8 lg:gap-16 py-12 sm:py-16 border-b border-slate-200 dark:border-white/10 last:border-b-0`}
    >
      {/* Image side — masked reveal */}
      <div className="w-full lg:w-3/5 relative">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden group"
        >
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Action buttons — always visible on mobile, hover-reveal on desktop */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-400">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-medium hover:bg-amber-400 transition-colors duration-300"
            >
              Visit
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-slate-950 hover:bg-amber-400 transition-colors duration-300"
              aria-label="GitHub repo"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.12.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.08-.76.08-.76 1.21.09 1.85 1.28 1.85 1.28 1.08 1.88 2.83 1.34 3.52 1.02.11-.8.42-1.34.77-1.65-2.66-.31-5.47-1.36-5.47-6.03 0-1.33.46-2.42 1.22-3.28-.12-.31-.53-1.56.12-3.24 0 0 .99-.32 3.25 1.26a11.1 11.1 0 015.92 0c2.26-1.58 3.25-1.26 3.25-1.26.65 1.68.24 2.93.12 3.24.76.86 1.22 1.95 1.22 3.28 0 4.68-2.81 5.71-5.49 6.02.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.72.83.6C20.57 22.34 24 17.73 24 12.3 24 5.5 18.63 0 12 0z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Text side */}
      <div className="w-full lg:w-2/5">
        <motion.span
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block text-6xl sm:text-7xl font-Ovo font-bold text-slate-200 dark:text-white/10 leading-none mb-2"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-Ovo text-slate-950 dark:text-white mb-3"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed mb-5"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex items-center gap-4"
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 dark:text-white border-b-2 border-amber-400 pb-1 hover:gap-3 transition-all duration-300"
          >
            View project
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[6%] sm:px-[10%] py-16 sm:py-20 scroll-mt-20 bg-white dark:bg-darkTheme text-slate-950 dark:text-white"
    >
      <div className="text-center mb-4">
        <motion.h4
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg font-Ovo text-amber-600 dark:text-amber-400"
        >
          My portfolio
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-Ovo"
        >
          My latest work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-5 font-Ovo text-slate-600 dark:text-gray-400 text-sm sm:text-base"
        >
          Projects I've built end-to-end — from database to deployment.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        {workData.map((project, index) => (
          <ProjectRow key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Work;
