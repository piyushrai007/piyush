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
      className={`grid h-full w-full place-items-center bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 ${className}`}
      aria-hidden="true"
    >
      <span className="font-mono text-sm text-slate-500">
        <span className="text-accent">$</span> python {project.slug.replace(/-/g, "_")}.py
      </span>
    </div>
  );

export default ProjectCover;
