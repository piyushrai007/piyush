import React from "react";
import { profileData } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-white/[0.06] py-10">
    <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
      <p>© {new Date().getFullYear()} Piyush Rai. Built with React, Tailwind CSS & Motion.</p>
      <div className="flex items-center gap-1">
        {profileData.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/5 hover:text-accent"
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
