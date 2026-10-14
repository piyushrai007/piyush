import React from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolio";

const Skills = () => (
  <section id="skills" className="border-y border-white/[0.05] bg-ink-900/60 py-24 md:py-32">
    <div className="container-x">
      <SectionHeader index="04" eyebrow="Toolkit" title="Skills I use in production." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.06} className="card p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-sm text-accent">
                <i className={g.icon} />
              </span>
              <h3 className="font-display text-base font-semibold text-white">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6 card flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 text-sm text-slate-400">
        <span className="font-semibold text-white">Core concepts</span>
        {["Data Structures & Algorithms", "OOP", "Machine Learning", "NLP", "REST APIs"].map((c) => (
          <span key={c} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {c}
          </span>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Skills;
