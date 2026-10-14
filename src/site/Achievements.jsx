import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { useContent } from "../ContentContext.jsx";
import { honors } from "../data/portfolio";

const Achievements = () => {
  const { achievementsData } = useContent();
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const categories = ["All", ...new Set(achievementsData.map((a) => a.category))];
  const shown = filter === "All" ? achievementsData : achievementsData.filter((a) => a.category === filter);

  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader index="05" eyebrow="Recognition" title="Achievements & certifications." />

        <div className="mb-12 grid gap-4 md:grid-cols-2">
          {honors.map((h, i) => (
            <Reveal key={h.title} delay={(i % 2) * 0.06} className="card flex gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <i className={h.icon} />
              </span>
              <div>
                <h3 className="font-semibold text-white">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{h.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter certificates">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === c ? "bg-accent text-ink-950" : "border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <button
              key={a.title}
              onClick={() => navigate(`/achievements/${encodeURIComponent(a.title)}`)}
              className="card group overflow-hidden text-left transition hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="aspect-[16/10] overflow-hidden bg-white">
                <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="eyebrow !text-[10px]">{a.category}</p>
                <h3 className="mt-1 font-semibold text-white">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{a.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
