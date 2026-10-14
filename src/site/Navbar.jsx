import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RESUME_URL } from "../data/portfolio";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-ink-950 transition group-hover:rotate-6">
            PR
          </span>
          <span className="hidden sm:inline">Piyush Rai</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-2 sm:inline-flex">
            <i className="fas fa-file-alt text-xs" /> Resume
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-x pb-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="block rounded-xl px-3 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 w-full justify-center sm:hidden">
            <i className="fas fa-file-alt text-xs" /> Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
