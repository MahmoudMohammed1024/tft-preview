import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
      isActive
        ? "text-slate-900 bg-slate-100 dark:text-white dark:bg-white/10"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled || open
          ? "bg-white/70 backdrop-blur-md border-slate-900/10 shadow-sm dark:bg-slate-950/40 dark:border-white/10"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-tight text-slate-900 dark:text-white z-50 transition-colors">
          TFT<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 z-50">
          <Link
            to="/cart"
            className="inline-flex h-10 w-10 sm:w-auto sm:px-4 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/50 text-slate-900 text-sm font-medium hover:bg-slate-100 transition duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Cart</span>
          </Link>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-900 hover:bg-slate-100 transition duration-300 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 p-6 flex flex-col gap-3 shadow-lg md:hidden dark:bg-slate-950/90 dark:border-white/10 animate-in slide-in-from-top-2">
          <div className="flex justify-end mb-2 sm:hidden">
            <ThemeToggle />
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "p-4 rounded-2xl text-lg font-medium transition-colors text-center",
                isActive
                  ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              )
            }
            onClick={() => setOpen(false)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              cn(
                "p-4 rounded-2xl text-lg font-medium transition-colors text-center",
                isActive
                  ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              )
            }
            onClick={() => setOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "p-4 rounded-2xl text-lg font-medium transition-colors text-center",
                isActive
                  ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              )
            }
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </div>
      )}
    </header>
  );
}
