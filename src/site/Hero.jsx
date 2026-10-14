import React from "react";
import { motion } from "motion/react";
import { profileData, stats, RESUME_URL } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
    <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
    <div
      className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]"
      aria-hidden="true"
    />

    <div className="container-x relative grid items-center gap-12 md:grid-cols-[1.25fr_0.75fr]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profileData.currently}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Piyush Rai<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="mt-4 font-display text-xl font-medium text-slate-200 md:text-2xl"
        >
          {profileData.role} <span className="text-slate-500">·</span>{" "}
          <span className="bg-gradient-to-r from-accent to-amber-200 bg-clip-text text-transparent">{profileData.focus}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          {profileData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View my work <i className="fas fa-arrow-right text-xs" />
          </a>
          <a href={RESUME_URL} download="Piyush_Rai_Resume.pdf" className="btn-ghost">
            <i className="fas fa-download text-xs" /> Download resume
          </a>
          <div className="ml-1 flex items-center gap-1">
            {profileData.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-accent"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </motion.div>

        <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
          <i className="fas fa-map-marker-alt text-xs" /> {profileData.location}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 800, rotate: 540 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[300px]"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/5 to-transparent blur-sm" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-800">
          <img src={profileData.heroAnimation} alt="Portrait of Piyush Rai" className="aspect-[9/16] w-full object-cover" />
        </div>
        <div className="card absolute -bottom-5 -left-4 flex items-center gap-3 px-4 py-3 shadow-2xl shadow-black/40 sm:-left-8">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
            <i className="fas fa-trophy text-sm" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">HackHound 2.0</p>
            <p className="text-xs text-slate-400">5th of 50+ teams</p>
          </div>
        </div>
        <div className="card absolute -right-3 top-6 hidden px-3 py-2 font-mono text-xs text-slate-300 shadow-2xl shadow-black/40 sm:block">
          <span className="text-accent">{"<"}</span>Django · React<span className="text-accent">{" />"}</span>
        </div>
      </motion.div>
    </div>

    <div className="container-x relative mt-20 md:mt-28">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse bg-ink-900 px-5 py-6">
            <dt className="mt-1 text-xs leading-snug text-slate-500 md:text-sm">{s.label}</dt>
            <dd className="font-display text-3xl font-semibold text-white md:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
