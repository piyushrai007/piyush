import React from "react";

const ProjectCover = ({ project, className = "" }) =>
  project.image ? (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] ${className}`}
    />
  ) : (
    <div
      className={`grid h-full w-full place-items-center bg-[radial-gradient(ellipse_at_top,_rgba(242,166,74,0.18),_transparent_60%)] bg-ink-800 ${className}`}
      aria-hidden="true"
    >
      {project.cover ? (
        <span className="flex flex-col items-center gap-4">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent/15 text-2xl text-accent">
            <i className={project.cover.icon} />
          </span>
          <span className="font-display text-2xl font-semibold text-white">{project.title}</span>
          <span className="rounded-full border border-white/10 bg-ink-950/60 px-3 py-1 font-mono text-xs text-slate-300">
            <i className="fas fa-lock mr-1.5 text-[10px] text-emerald-400" />
            {project.cover.label}
          </span>
        </span>
      ) : (
        <span className="font-mono text-sm text-slate-500">
          <span className="text-accent">$</span> python {project.slug.replace(/-/g, "_")}.py
        </span>
      )}
    </div>
  );

export default ProjectCover;
