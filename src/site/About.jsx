import React from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { profileData } from "../data/portfolio";

const pillars = [
  { icon: "fas fa-server", title: "Backend that scales", text: "Django apps, multi-tenant schemas in SQL Server, Celery pipelines and production IIS deployments." },
  { icon: "fas fa-layer-group", title: "Clean frontends", text: "React + TypeScript interfaces with centralized API layers and data-driven pages." },
  { icon: "fas fa-brain", title: "Applied ML", text: "Models trained, evaluated and served behind APIs — from heart-disease risk to lecture summarisation." },
];

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
      <div>
        <SectionHeader index="01" eyebrow="About" title="Engineer first, data scientist by training." />
        <Reveal className="space-y-5 text-base leading-relaxed text-slate-400 md:text-lg">
          {profileData.summary.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3 text-sm">
          <a href={`mailto:${profileData.email}`} className="chip !px-4 !py-2 hover:border-accent/50 hover:text-accent">
            <i className="fas fa-envelope mr-2 text-xs" /> {profileData.email}
          </a>
          <a href={`tel:${profileData.phone}`} className="chip !px-4 !py-2 hover:border-accent/50 hover:text-accent">
            <i className="fas fa-phone mr-2 text-xs" /> {profileData.phone}
          </a>
        </Reveal>
      </div>

      <div className="grid content-center gap-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="card flex gap-4 p-6 transition hover:border-accent/30">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
              <i className={p.icon} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
