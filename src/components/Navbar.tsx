import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  // Desktop nav items
  const desktopNavItems = [
    { name: "Home", href: "/", action: scrollToTop },
    { name: "About", href: "/#features" },
    { name: "AI-Tools", href: "/ai-tools" },
    { name: "React-Comps", href: "/ai-tools#react-comps" },
    { name: "Contact", href: "/#newsletter" },
  ];

  // Mobile nav items with shorter names
  const mobileNavItems = [
    { name: "Home", shortName: "Home", href: "/", action: scrollToTop },
    { name: "About", shortName: "About", href: "/#features" },
    { name: "AI-Tools", shortName: "AI", href: "/ai-tools" },
    { name: "React-Components", shortName: "R-Comps", href: "/ai-tools#react-comps" },
    { name: "Contact", shortName: "Contact", href: "/#newsletter" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-white-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center space-x-2"
          aria-label="LW_19"
        >
          <img src="/LW.png" alt="LW_19 Logo" className="h-12 sm:h-18" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            {desktopNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link"
                onClick={() => {
                  if (item.action) item.action();
                  setIsMenuOpen(false);
                  document.body.style.overflow = "";
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle + Theme */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="text-gray-900 dark:text-gray-900 p-3 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col pt-6 px-6 md:hidden transition-all duration-300 ease-in-out text-black-300",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "";
            }}
            className="p-3 text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={28} className="font-bold" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col space-y-8 items-center mt-12">
          {mobileNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-2xl sm:text-3xl font-semibold uppercase tracking-wider py-3 px-6 w-full 
              text-center rounded-lg hover:text-pulse-500 
              text-gray-900 dark:text-white transition-colors"
              onClick={() => {
                if (item.action) item.action();
                setIsMenuOpen(false);
                document.body.style.overflow = "";
              }}
            >
              {item.shortName || item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;