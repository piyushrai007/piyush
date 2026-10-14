import React from "react";
import Reveal from "./Reveal";
import { profileData, RESUME_URL } from "../data/portfolio";

const Contact = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container-x">
      <Reveal className="card relative overflow-hidden p-8 md:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">07 / Contact</p>
            <h2 className="h-section">Let's build something together.</h2>
            <p className="mt-4 max-w-md text-slate-400">
              Open to full-stack and AI engineering roles, freelance work and collaborations. The fastest way to reach me is email.
            </p>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 text-white hover:text-accent">
                <i className="fas fa-envelope w-5 text-accent" /> {profileData.email}
              </a>
              <a href={`tel:${profileData.phone}`} className="flex items-center gap-3 text-white hover:text-accent">
                <i className="fas fa-phone w-5 text-accent" /> {profileData.phone}
              </a>
              <p className="flex items-center gap-3 text-slate-400">
                <i className="fas fa-map-marker-alt w-5 text-accent" /> {profileData.location}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <i className="fas fa-file-alt text-xs" /> View resume
              </a>
              {profileData.socials.slice(0, 2).map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <i className={s.icon} /> {s.label}
                </a>
              ))}
            </div>
          </div>

          <form method="post" action="https://send.pageclip.co/czS9Mdj8XGyk1ySJKFfwI7JdHkBlkFUN" className="pageclip-form grid gap-4">
            {[
              { name: "name", label: "Name", type: "text", auto: "name" },
              { name: "email", label: "Email", type: "email", auto: "email" },
            ].map((f) => (
              <label key={f.name} className="grid gap-2 text-sm text-slate-400">
                {f.label}
                <input
                  type={f.type}
                  name={f.name}
                  required
                  autoComplete={f.auto}
                  className="rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-accent/60"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-slate-400">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="resize-none rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white outline-none transition focus:border-accent/60"
              />
            </label>
            <button type="submit" className="btn-primary justify-center !py-3">
              Send message <i className="fas fa-paper-plane text-xs" />
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
