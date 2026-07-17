"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Thanks — your message is on its way. I'll reply soon.");
      event.target.reset();
    } else {
      setStatus("error");
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-24 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 border border-slate-300 dark:border-white/10">
        {/* Left panel — info */}
        <div className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 p-10 flex flex-col justify-between">
          <div>
            <span className="text-sm font-mono opacity-60">03</span>
            <h2 className="text-3xl sm:text-4xl font-Ovo mt-4 mb-4">
              Let's build something.
            </h2>
            <p className="text-sm leading-6 opacity-70 max-w-xs">
              Open to full-stack roles and freelance MERN / Next.js projects.
              Drop a message and I'll get back within a day or two.
            </p>
          </div>

          <div className="mt-10 space-y-3 text-sm">
            {/* FIXED: Added opening <a> tag for Email */}
            <a
              href="mailto:amanullahqurayshi@gmail.com"
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <span className="w-8 h-8 flex items-center justify-center border border-white/30 dark:border-slate-950/30 rounded-full">
                ✉
              </span>
              amanullahqurayshi@gmail.com
            </a>

            {/* FIXED: Added opening <a> tag for GitHub */}
            <a
              href="https://github.com/Ahmad-khan-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <span className="w-8 h-8 flex items-center justify-center border border-white/30 dark:border-slate-950/30 rounded-full">
                gh
              </span>
              GitHub
            </a>

            {/* FIXED: Added opening <a> tag for LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmad-mujtaba-aman/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <span className="w-8 h-8 flex items-center justify-center border border-white/30 dark:border-slate-950/30 rounded-full">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="bg-white/95 dark:bg-darkTheme p-10">
          <form onSubmit={onSubmit}>
            <FormField name="name" label="Your name" type="text" />
            <FormField name="email" label="Your email" type="email" />
            <FormField name="message" label="Message" textarea />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full sm:w-auto py-3 px-8 flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black font-medium disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white/40 dark:border-black/40 border-t-white dark:border-t-black rounded-full"
                  />
                  Sending
                </>
              ) : (
                <>Submit now →</>
              )}
            </motion.button>

            {result && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${
                  status === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {result}
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable field with animated underline focus (no border-box lift/shadow)
const FormField = ({ name, label, type, textarea }) => {
  const [focused, setFocused] = useState(false);
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="mb-6 relative">
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-wide text-slate-500 dark:text-gray-500 mb-2"
      >
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={type}
        required
        rows={textarea ? 4 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent outline-none py-2 text-slate-950 dark:text-white resize-none"
      />
      <div className="relative h-[1px] bg-slate-300 dark:bg-white/15 mt-1">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 h-[2px] bg-black dark:bg-white -top-[0.5px]"
        />
      </div>
    </div>
  );
};

export default Contact;
