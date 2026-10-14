import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "./Reveal";
import ProjectCover from "./ProjectCover";
import ProjectLinks from "./ProjectLinks";
import { projects } from "../data/portfolio";

const Block = ({ title, children }) => (
  <Reveal className="border-t border-white/[0.06] py-12">
    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
      <h2 className="eyebrow pt-1">{title}</h2>
      <div>{children}</div>
    </div>
  </Reveal>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/#projects" replace />;
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-28 md:pt-32">
      <div className="container-x">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent">
          <i className="fas fa-arrow-left text-xs" /> All projects
        </Link>

        <Reveal className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{p.category} · {p.year}</p>
            {p.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                <i className="fas fa-trophy text-[10px]" /> {p.badge}
              </span>
            )}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">{p.title}</h1>
          <p className="mt-3 text-xl text-slate-300">{p.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">{p.summary}</p>
          {Object.keys(p.links).length > 0 && (
            <div className="mt-8">
              <ProjectLinks links={p.links} size="md" />
            </div>
          )}
        </Reveal>

        {p.image && (
          <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-ink-800">
            <div className="max-h-[560px] overflow-hidden">
              <ProjectCover project={p} className="max-h-[560px]" />
            </div>
          </Reveal>
        )}

        {p.meta?.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
            {p.meta.map((m) => (
              <div key={m.label} className="bg-ink-900 p-5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{m.label}</dt>
                <dd className="mt-1 text-sm font-medium text-white">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-16">
          {p.problem && (
            <Block title="The problem">
              <p className="text-lg leading-relaxed text-slate-300">{p.problem}</p>
            </Block>
          )}
          {p.solution && (
            <Block title="The solution">
              <p className="text-lg leading-relaxed text-slate-300">{p.solution}</p>
            </Block>
          )}
          {p.features?.length > 0 && (
            <Block title="Key features">
              <div className="grid gap-4 sm:grid-cols-2">
                {p.features.map((f) => (
                  <div key={f.title} className="card p-5">
                    <h3 className="font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
                  </div>
                ))}
              </div>
            </Block>
          )}
          {p.architecture && (
            <Block title="Architecture">
              <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {p.architecture.layers.map((l) => (
                    <div key={l.title} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <p className="font-mono text-xs text-accent">{l.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{l.text}</p>
                    </div>
                  ))}
                </div>
                <figure>
                  <img src={p.architecture.image} alt="System flow diagram" loading="lazy" className="w-full rounded-xl border border-white/10" />
                  <figcaption className="mt-2 text-xs leading-relaxed text-slate-500">{p.architecture.caption}</figcaption>
                </figure>
              </div>
            </Block>
          )}
          <Block title="Tech stack">
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="chip !px-4 !py-1.5 !text-sm">{t}</span>
              ))}
            </div>
          </Block>
          {p.contributions?.length > 0 && (
            <Block title="What I built">
              <ul className="space-y-3">
                {p.contributions.map((c) => (
                  <li key={c} className="flex gap-3 leading-relaxed text-slate-300">
                    <i className="fas fa-check mt-1.5 text-xs text-accent" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </Block>
          )}
          {p.gallery?.length > 0 && (
            <Block title="Gallery">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {p.gallery.map((g) => (
                  <div key={g.src} className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-ink-800">
                    <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </Block>
          )}
          {p.outcome && (
            <Block title="Outcome">
              <p className="text-lg leading-relaxed text-white">{p.outcome}</p>
            </Block>
          )}
        </div>

        <Link
          to={`/projects/${next.slug}`}
          className="card group my-16 flex items-center justify-between gap-6 p-6 transition hover:border-accent/30 md:p-8"
        >
          <div>
            <p className="eyebrow !text-[10px]">Next project</p>
            <p className="mt-2 font-display text-2xl font-semibold text-white">{next.title}</p>
            <p className="text-sm text-slate-400">{next.subtitle}</p>
          </div>
          <i className="fas fa-arrow-right text-accent transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectDetail;
