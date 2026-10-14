import React from "react";
import Reveal from "./Reveal";

const SectionHeader = ({ index, eyebrow, title, intro }) => (
  <Reveal className="mb-12 max-w-2xl">
    <p className="eyebrow mb-3">
      {index && <span className="text-slate-500">{index} / </span>}
      {eyebrow}
    </p>
    <h2 className="h-section">{title}</h2>
    {intro && <p className="mt-4 text-base leading-relaxed text-slate-400">{intro}</p>}
  </Reveal>
);

export default SectionHeader;
