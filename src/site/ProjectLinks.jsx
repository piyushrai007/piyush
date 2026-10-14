import React from "react";

const labels = {
  github: { text: "Source", icon: "fab fa-github" },
  live: { text: "Live demo", icon: "fas fa-external-link-alt" },
  article: { text: "Article", icon: "fas fa-book-open" },
};

const ProjectLinks = ({ links, size = "sm" }) => (
  <div className="flex flex-wrap gap-2">
    {Object.entries(links).map(([key, href]) => (
      <a
        key={key}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={key === "live" ? `btn-primary ${size === "sm" ? "!px-4 !py-2 !text-xs" : ""}` : `btn-ghost ${size === "sm" ? "!px-4 !py-2 !text-xs" : ""}`}
      >
        <i className={`${labels[key].icon} text-xs`} /> {labels[key].text}
      </a>
    ))}
  </div>
);

export default ProjectLinks;
