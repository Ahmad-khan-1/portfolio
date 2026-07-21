"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");
  const [step, setStep] = useState(0); // 0: name, 1: email, 2: message, 3: done
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [showTyping, setShowTyping] = useState(true);
  const bottomRef = useRef(null);
  const hasUserInteracted = useRef(false); // Strictly track real user steps

  const questions = [
    "Hey! What's your name?",
    (name) => `Nice to meet you, ${name || "there"}! What's your email?`,
    "Got it. What would you like to say?",
  ];

  useEffect(() => {
    setShowTyping(true);
    const timer = setTimeout(() => setShowTyping(false), 600);
    return () => clearTimeout(timer);
  }, [step]);

  // FIX: Pure component initialization aur layout shifts par scroll strictly block rahega
  useEffect(() => {
    if (!hasUserInteracted.current) {
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [step, showTyping]);

  const handleNext = (field) => (e) => {
    e.preventDefault();
    if (!values[field].trim()) return;
    hasUserInteracted.current = true; // User ne agla step trigger kiya, ab internal scroll allowed hai
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.message.trim()) return;
    hasUserInteracted.current = true;
    setStatus("sending");

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStep(3);
        setResult("Thanks — I'll get back to you soon!");
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setResult("Connection error. Transmission failed.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[6%] sm:px-[12%] py-10 scroll-mt-20 selection:bg-amber-400 selection:text-black"
    >
      <div className="text-center mb-12 select-none">
        <h4 className="mb-2 text-lg font-Ovo text-slate-600 dark:text-gray-400">
          Connect
        </h4>
        <h2 className="text-5xl font-Ovo text-slate-950 dark:text-white">
          Get in touch
        </h2>
      </div>

      <div className="max-w-md mx-auto rounded-2xl border border-slate-300 dark:border-white/10 shadow-xl overflow-hidden bg-white dark:bg-black/20">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-slate-950 border-b border-slate-900 select-none">
          <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-bold text-sm">
            AM
          </div>
          <div>
            <p className="text-sm font-medium text-white">Ahmad Mujtaba</p>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Usually replies within a day
            </p>
          </div>
        </div>

        {/* Chat body */}
        <div className="bg-slate-50 dark:bg-zinc-950/40 p-5 h-[380px] overflow-y-auto flex flex-col gap-3.5">
          {/* Question 1 */}
          <Bubble from="them">{questions[0]}</Bubble>
          {step > 0 && <Bubble from="me">{values.name}</Bubble>}

          {/* Question 2 */}
          {step >= 1 && (
            <>
              {showTyping && step === 1 ? (
                <TypingBubble />
              ) : (
                <Bubble from="them">{questions[1](values.name)}</Bubble>
              )}
            </>
          )}
          {step > 1 && <Bubble from="me">{values.email}</Bubble>}

          {/* Question 3 */}
          {step >= 2 && (
            <>
              {showTyping && step === 2 ? (
                <TypingBubble />
              ) : (
                <Bubble from="them">{questions[2]}</Bubble>
              )}
            </>
          )}
          {step > 2 && <Bubble from="me">{values.message}</Bubble>}

          {step === 3 && (
            <Bubble from="them">
              {result || "Thanks — I'll get back to you soon!"}
            </Bubble>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Interactive Input Container Block */}
        <div className="p-3 border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-zinc-950">
          {step === 0 && (
            <ChatInput
              value={values.name}
              onChange={(v) => setValues((s) => ({ ...s, name: v }))}
              onSubmit={handleNext("name")}
              placeholder="Type your name..."
            />
          )}

          {step === 1 && !showTyping && (
            <ChatInput
              type="email"
              value={values.email}
              onChange={(v) => setValues((s) => ({ ...s, email: v }))}
              onSubmit={handleNext("email")}
              placeholder="you@email.com"
            />
          )}

          {step === 2 && !showTyping && (
            <ChatInput
              textarea
              value={values.message}
              onChange={(v) => setValues((s) => ({ ...s, message: v }))}
              onSubmit={handleSubmit}
              placeholder="Write your message..."
              loading={status === "sending"}
            />
          )}

          {step === 3 && (
            <div className="text-center py-2 text-xs font-mono text-slate-400 dark:text-slate-500">
              // Sync terminal connection closed.
            </div>
          )}
        </div>
      </div>

      {/* Direct links footer */}
      <div className="max-w-md mx-auto mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400 dark:text-slate-500">
        <a
          href="mailto:amanullahqurayshi@gmail.com"
          className="hover:text-amber-500 transition-colors duration-200"
        >
          email
        </a>
        <a
          href="https://github.com/Ahmad-khan-1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-500 transition-colors duration-200"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/ahmad-mujtaba-aman/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-500 transition-colors duration-200"
        >
          linkedin
        </a>
      </div>
    </div>
  );
};

// Chat Bubble Sub-component
const Bubble = ({ from, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 6, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.2 }}
    className={`max-w-[85%] px-4 py-2 rounded-xl text-sm leading-relaxed tracking-wide ${
      from === "them"
        ? "self-start bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-tl-sm"
        : "self-end bg-amber-400 text-slate-950 font-medium rounded-tr-sm"
    }`}
  >
    {children}
  </motion.div>
);

// Three-dot Indicator
const TypingBubble = () => (
  <div className="self-start bg-white dark:bg-zinc-900 px-4 py-3 border border-slate-200 dark:border-white/5 rounded-xl rounded-tl-sm flex gap-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.12 }}
        className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-zinc-500"
      />
    ))}
  </div>
);

// Unified Chat Input Action block
const ChatInput = ({
  value,
  onChange,
  onSubmit,
  placeholder,
  type = "text",
  textarea,
  loading,
}) => {
  const Tag = textarea ? "textarea" : "input";

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={onSubmit}
      className="flex items-end gap-2 w-full"
    >
      <Tag
        type={type}
        required
        rows={textarea ? 2 : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="flex-1 bg-white dark:bg-zinc-900 rounded-xl px-4 py-2.5 text-sm outline-none border border-slate-300 dark:border-white/5 focus:border-amber-400 text-slate-900 dark:text-white placeholder:text-slate-400/70 resize-none transition-colors duration-150"
        onKeyDown={(e) => {
          if (textarea && e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSubmit(e);
          }
        }}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-10 h-10 flex-shrink-0 rounded-xl bg-slate-950 dark:bg-amber-400 text-white dark:text-slate-950 flex items-center justify-center disabled:opacity-40 hover:opacity-90 active:scale-95 transition-all"
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        )}
      </button>
    </motion.form>
  );
};

export default Contact;
