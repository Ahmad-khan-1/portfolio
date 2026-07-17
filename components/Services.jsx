"use client";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, fast user interfaces using React.js and Next.js with modern UI practices.",
    color: "#61DAFB", // React blue
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing secure REST APIs and server-side logic using Node.js and Express.js.",
    color: "#68A063", // Node green
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M12 8v8M9 10l3-2 3 2M9 14l3 2 3-2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Database Design",
    description:
      "Designing and managing efficient database schemas using MongoDB for scalable applications.",
    color: "#4DB33D", // MongoDB green
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M12 2c2.5 3 4 6.5 4 10.5A4 4 0 0112 17a4 4 0 01-4-4.5C8 8.5 9.5 5 12 2z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path d="M12 17v5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Full-Stack Apps",
    description:
      "Delivering complete end-to-end web applications, from database to deployed frontend.",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="w-full py-10 px-[12%] scroll-mt-20 bg-white/95 dark:bg-darkTheme text-slate-950 dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-slate-600 dark:text-gray-400">
        I'm a MERN Stack &amp; Next.js developer who builds complete web
        applications — from database to a polished, responsive frontend.
      </p>

      <div className="max-w-3xl mx-auto divide-y divide-gray-300 dark:divide-white/10 border-t border-b border-gray-300 dark:border-white/10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex items-center gap-6 py-8 px-4 overflow-hidden"
          >
            {/* Expanding accent bar from left, on hover */}
            <motion.span
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: service.color, transformOrigin: "center" }}
              className="absolute left-0 top-0 h-full w-1"
            />

            <span className="text-3xl font-mono text-gray-300 dark:text-white/15 w-14 flex-shrink-0">
              {service.number}
            </span>

            <motion.span
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 260, damping: 15 }}
              style={{ color: service.color }}
              className="flex-shrink-0"
            >
              {service.icon}
            </motion.span>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-6 max-w-lg">
                {service.description}
              </p>
            </div>

            <motion.span
              initial={{ x: -4, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="hidden sm:block text-2xl flex-shrink-0"
              style={{ color: service.color }}
            >
              →
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;