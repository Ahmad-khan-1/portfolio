"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, fast user interfaces using React.js and Next.js with modern UI practices.",
    color: "#61DAFB",
    icon: (
      <>
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </>
    ),
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing secure REST APIs and server-side logic using Node.js and Express.js.",
    color: "#68A063",
    icon: (
      <>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path d="M12 8v8M9 10l3-2 3 2M9 14l3 2 3-2" />
      </>
    ),
  },
  {
    number: "03",
    title: "Database Design",
    description:
      "Designing and managing efficient database schemas using MongoDB for scalable applications.",
    color: "#4DB33D",
    icon: (
      <>
        <path d="M12 2c2.5 3 4 6.5 4 10.5A4 4 0 0112 17a4 4 0 01-4-4.5C8 8.5 9.5 5 12 2z" />
        <path d="M12 17v5" />
      </>
    ),
  },
  {
    number: "04",
    title: "Full-Stack Apps",
    description:
      "Delivering complete end-to-end web applications, from database to deployed frontend.",
    color: "#818CF8",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
];

const StackCard = ({ service, index, total }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.6, 1]);

  // Border glows amber once the card has fully settled into place
  const borderColor = useTransform(
    scrollYProgress,
    [0.7, 1],
    ["rgba(245, 158, 11, 0)", "rgba(245, 158, 11, 0.5)"],
  );
  const dotOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: `${80 + index * 24}px` }}
    >
      <motion.div
        style={{ scale, y, opacity, borderColor }}
        className="relative rounded-2xl sm:rounded-3xl border-2 bg-white dark:bg-slate-900 shadow-xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 overflow-hidden"
      >
        {/* Amber pulse — signals this card is now "active" */}
        <motion.span
          style={{ opacity: dotOpacity }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-2.5 w-2.5"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
        </motion.span>

        <div
          className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${service.color}1A` }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={service.color}
            strokeWidth="1.3"
            className="w-8 h-8 sm:w-10 sm:h-10"
          >
            {service.icon}
          </svg>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400">
            {service.number} / {String(total).padStart(2, "0")}
          </span>
          <h3 className="text-xl sm:text-2xl font-Ovo mt-3 mb-2 text-slate-950 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <div
      id="services"
      className="w-full py-16 sm:py-20 px-[6%] sm:px-[12%] scroll-mt-20 bg-white dark:bg-darkTheme text-slate-950 dark:text-white"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h4 className="mb-2 text-base sm:text-lg font-Ovo text-amber-600 dark:text-amber-400">
          What I Offer
        </h4>
        <h2 className="text-3xl sm:text-5xl font-Ovo">My Services</h2>
        <p className="max-w-xl mx-auto mt-4 text-sm sm:text-base text-slate-600 dark:text-gray-400 font-Ovo">
          I'm a MERN Stack &amp; Next.js developer who builds complete web
          applications — from database to a polished, responsive frontend.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 pb-[30vh]">
        {services.map((service, index) => (
          <StackCard
            key={index}
            service={service}
            index={index}
            total={services.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
