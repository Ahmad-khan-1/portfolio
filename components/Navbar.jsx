"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Ovo } from "next/font/google";
import { assets } from "../assests/assets";
import { motion } from "framer-motion";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const sideMenuRef = useRef();

  // Initial theme check (page load ke baad current class dekho)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Handle Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      {/* Background decoration for modern look */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
          priority
        />
      </div>

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 dark:bg-darkTheme/80 backdrop-blur-lg shadow-sm dark:shadow-white/10"
            : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Image
                src={assets.logo}
                alt="logo"
                loading="eager"
                className="w-36 lg:w-40 h-auto cursor-pointer mr-14 dark:invert"
              />
            </motion.div>
          </a>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full ${
              !isScroll ? "bg-white/50 dark:bg-transparent" : ""
            } ${ovo.className}`}
          >
            {["Home", "About", "Services", "Work", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative group transition-all duration-300 dark:text-white"
                >
                  {item}
                  {/* Modern Hover Underline */}
                  <span className="absolute h-[2px] w-0 bg-black dark:bg-white left-0 -bottom-1 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="hover:scale-110 transition-transform"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <Image src={assets.moon_icon} alt="" className="w-6" />
              )}
            </button>

            <a
              href="#contact"
              className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white dark:text-white rounded-full ml-4 font-medium transition-all duration-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black group ${ovo.className}`}
            >
              Contact
              <Image
                src={assets.arrow_icon}
                alt=""
                className="w-3 dark:invert group-hover:invert dark:group-hover:invert-0 transition-all"
              />
            </a>

            <button className="block md:hidden ml-3" onClick={openMenu}>
              <Image
                src={assets.menu_black}
                alt=""
                className="w-6 dark:invert"
              />
            </button>
          </div>

          {/* Mobile Menu (Sliding Drawer) */}
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-lightHover dark:bg-darkTheme dark:text-white transition-transform duration-500 ease-in-out shadow-2xl"
          >
            <div
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition-colors"
              onClick={closeMenu}
            >
              <Image
                src={assets.close_black}
                alt="close"
                className="w-5 cursor-pointer dark:invert"
              />
            </div>

            {["Home", "About me", "Services", "Work", "Contact me"].map(
              (item) => (
                <li key={item}>
                  <a
                    className="text-lg hover:translate-x-2 transition-transform inline-block"
                    onClick={closeMenu}
                    href={`#${item.toLowerCase().split(" ")[0]}`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;