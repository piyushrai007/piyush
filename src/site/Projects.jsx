import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import ProjectCover from "./ProjectCover";
import ProjectLinks from "./ProjectLinks";
import { projects } from "../data/portfolio";

const FeaturedCard = ({ project, flip }) => (
  <Reveal className="card group overflow-hidden">
    <div className={`grid md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
      <Link to={`/projects/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-ink-800 md:aspect-auto md:min-h-[380px]">
        <ProjectCover project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        {project.badge && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur">
            <i className="fas fa-trophy text-[10px]" /> {project.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-col p-6 md:p-10">
        <p className="eyebrow">{project.category} · {project.year}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
        <p className="mt-1 text-slate-400">{project.subtitle}</p>
        <p className="mt-5 leading-relaxed text-slate-400">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 7).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
          {project.stack.length > 7 && <span className="chip text-slate-500">+{project.stack.length - 7}</span>}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          <Link to={`/projects/${project.slug}`} className="btn-primary !px-4 !py-2 !text-xs">
            Case study <i className="fas fa-arrow-right text-[10px]" />
          </Link>
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </div>
  </Reveal>
);

const ProjectCard = ({ project, delay }) => (
  <Reveal delay={delay} className="h-full">
    <Link
      to={`/projects/${project.slug}`}
      className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-accent/30"
    >
      <div className="aspect-[16/9] overflow-hidden bg-ink-800">
        <ProjectCover project={project} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow !text-[10px]">{project.category}</p>
        <h3 className="mt-2 flex items-center justify-between gap-2 font-display text-lg font-semibold text-white">
          {project.title}
          <i className="fas fa-arrow-right -translate-x-2 text-xs text-accent opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <span key={t} className="chip !text-[11px]">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  </Reveal>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow="Selected work"
          title="Projects with real problems behind them."
          intro="Hackathon builds, a final-year AI platform and machine-learning projects — each with a full case study: the problem, the architecture and what I built."
        />
        <div className="space-y-8">
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 3) * 0.06} />
          ))}
          <Reveal delay={0.12} className="h-full">
            <a
              href="https://github.com/piyushrai007"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[260px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 p-8 text-center transition hover:border-accent/50"
            >
              <i className="fab fa-github text-4xl text-slate-500 transition group-hover:text-accent" />
              <div>
                <p className="font-display text-lg font-semibold text-white">More on GitHub</p>
                <p className="mt-1 text-sm text-slate-400">Experiments, coursework and open-source code.</p>
              </div>
              <span className="text-sm text-accent">github.com/piyushrai007 →</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
