"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["home", "menu", "about", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/#home", sectionId: "home" },
    { label: "Menu", href: "/#menu", sectionId: "menu" },
    { label: "About Us", href: "/#about", sectionId: "about" },
    { label: "Contact", href: "/#contact", sectionId: "contact" },
    { label: "Blog", href: "/blog", sectionId: null },
  ] as const;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-forest-900/95 border-b border-forest-800 shadow-[0_8px_16px_rgba(0,0,0,0.35)] backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-tight"
          >
            Mumbai Masala
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isBlog = link.sectionId === null;
            const isCurrent =
              isBlog && pathname.startsWith("/blog")
                ? true
                : !isBlog && pathname === "/" && activeSection === link.sectionId;

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => {
                  if (!isBlog && link.sectionId) {
                    setActiveSection(link.sectionId);
                  }
                }}
                className={[
                  "text-sm font-medium transition-colors",
                  isCurrent
                    ? "text-sage-300 cursor-default pointer-events-none"
                    : "text-gray-100 hover:text-sage-400",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block bg-sage-400 text-forest-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-sage-500 transition-colors shadow-sm"
        >
          Order Now
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-forest-900 px-6 py-4 border-t border-white/10"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isBlog = link.sectionId === null;
              const isCurrent =
                isBlog && pathname.startsWith("/blog")
                  ? true
                  : !isBlog && pathname === "/" && activeSection === link.sectionId;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => {
                    if (!isBlog && link.sectionId) {
                      setActiveSection(link.sectionId);
                    }
                    setIsMenuOpen(false);
                  }}
                  className={[
                    "transition-colors",
                    isCurrent
                      ? "text-sage-300 cursor-default pointer-events-none"
                      : "text-white hover:text-sage-400",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
            <button className="bg-sage-400 text-forest-900 px-6 py-2 rounded-full hover:bg-sage-500 transition-colors font-semibold">
              Order Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
