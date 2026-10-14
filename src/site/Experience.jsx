import React from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

const Experience = () => (
  <section id="experience" className="border-y border-white/[0.05] bg-ink-900/60 py-24 md:py-32">
    <div className="container-x">
      <SectionHeader index="02" eyebrow="Experience" title="Where I've shipped." />
      <ol className="relative space-y-10 border-l border-white/10 pl-6 md:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.05} className="relative">
            <span
              className={`absolute -left-[31px] top-2 h-3 w-3 rounded-full ring-4 ring-ink-900 md:-left-[47px] ${
                i === 0 ? "bg-accent" : "bg-slate-500"
              }`}
              aria-hidden="true"
            />
            <div className="card p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{job.role}</h3>
                  <p className="mt-1 text-accent">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-slate-300">{job.period}</p>
                  <p className="text-xs text-slate-500">{job.type}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-slate-400 md:text-base">
                    <i className="fas fa-angle-right mt-1.5 text-xs text-accent" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
