import React from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { education } from "../data/portfolio";

const Education = () => (
  <section id="education" className="border-y border-white/[0.05] bg-ink-900/60 py-24 md:py-32">
    <div className="container-x">
      <SectionHeader index="06" eyebrow="Education" title="Academic background." />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06} className={`card p-6 ${i === 0 ? "md:col-span-2 md:flex md:items-center md:justify-between md:p-8" : ""}`}>
            <div>
              <p className="font-mono text-xs text-slate-500">{e.period}</p>
              <h3 className={`mt-2 font-display font-semibold text-white ${i === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>{e.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">{e.school}</p>
            </div>
            <p className="mt-4 inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent md:mt-0">{e.score}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
