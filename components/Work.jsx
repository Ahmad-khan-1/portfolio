"use client";
import React, { useRef, useState } from "react";
import { workData } from "../assests/assets";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative border border-slate-300 dark:border-white/15 overflow-hidden bg-slate-50 dark:bg-white/5"
    >
      {/* Screenshot */}
      <div className="relative w-full h-64 overflow-hidden border-b border-slate-300 dark:border-white/15">
        <Image
          src={project.bgImage}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
        >
          {/* FITTED: Added <a tag here */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-11 h-11 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform"
            aria-label="Live demo"
          >
            <svg
              width="18"
              height="18"
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

          {/* FITTED: Added <a tag here */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-11 h-11 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform"
            aria-label="GitHub repo"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.12.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.08-.76.08-.76 1.21.09 1.85 1.28 1.85 1.28 1.08 1.88 2.83 1.34 3.52 1.02.11-.8.42-1.34.77-1.65-2.66-.31-5.47-1.36-5.47-6.03 0-1.33.46-2.42 1.22-3.28-.12-.31-.53-1.56.12-3.24 0 0 .99-.32 3.25 1.26a11.1 11.1 0 015.92 0c2.26-1.58 3.25-1.26 3.25-1.26.65 1.68.24 2.93.12 3.24.76.86 1.22 1.95 1.22 3.28 0 4.68-2.81 5.71-5.49 6.02.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.72.83.6C20.57 22.34 24 17.73 24 12.3 24 5.5 18.63 0 12 0z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 border border-slate-400 dark:border-white/20 text-slate-700 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white/95 dark:bg-darkTheme text-slate-950 dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-slate-600 dark:text-gray-400">
        A couple of projects I've built end-to-end — from database to
        deployment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {workData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
