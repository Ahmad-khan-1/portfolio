"use client";
import { motion } from "framer-motion";

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
    color: "#22D3EE",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
];

const rotations = [-6, -2, 3, 7];

const gravitySpring = { type: "spring", stiffness: 200, damping: 12, mass: 1 };

const ServiceCard = ({ service, index }) => (
  <motion.div
    drag="y"
    dragConstraints={{ top: -80, bottom: 0 }}
    dragElastic={0.4}
    dragTransition={{ bounceStiffness: 200, bounceDamping: 12 }}
    initial={{ opacity: 0, y: -300, rotate: rotations[index] }}
    whileInView={{
      opacity: 1,
      y: 0,
      rotate: rotations[index],
      transition: { ...gravitySpring, delay: index * 0.12 },
    }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{
      rotate: 0,
      x: 14,
      y: -14,
      zIndex: 20,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    }}
    whileTap={{ scale: 1.03, zIndex: 20 }}
    style={{ zIndex: index, touchAction: "pan-x" }}
    className="relative w-full max-w-xs sm:max-w-none sm:w-64 md:w-60 lg:w-64 flex-shrink-0 sm:-ml-10 sm:first:ml-0 rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900 shadow-lg p-6 cursor-grab active:cursor-grabbing"
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
      style={{ backgroundColor: `${service.color}1A` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={service.color}
        strokeWidth="1.3"
        className="w-6 h-6"
      >
        {service.icon}
      </svg>
    </div>

    <span className="text-xs font-mono text-slate-400 dark:text-white/20">
      {service.number}
    </span>
    <h3 className="text-lg font-semibold mt-1 mb-2 text-slate-950 dark:text-white">
      {service.title}
    </h3>
    <p className="text-sm text-slate-600 dark:text-gray-400 leading-6">
      {service.description}
    </p>
  </motion.div>
);

const Services = () => {
  return (
    <div
      id="services"
      className="w-full py-10 px-[6%] sm:px-[12%] scroll-mt-20 bg-white/95 dark:bg-darkTheme text-slate-950 dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-4 font-Ovo text-slate-600 dark:text-gray-400 text-sm sm:text-base">
        I'm a MERN Stack &amp; Next.js developer who builds complete web
        applications — from database to a polished, responsive frontend.
      </p>

      <p className="text-center text-xs text-slate-400 dark:text-gray-600 mb-12 sm:mb-16 font-Ovo italic">
        (try dragging a card up)
      </p>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-6 sm:gap-0 max-w-4xl mx-auto pt-4 pb-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
