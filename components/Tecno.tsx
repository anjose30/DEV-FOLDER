"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const technologies = [
  {
    name: "Next.js",
    icon: "⬡",
    bg: "#1c1c1e",
    preview: "Framework · App Router, UI, CEO",
    badge: 3,
    time: "ahora",
  },
  {
    name: "React",
    icon: "⚛",
    bg: "#0a3d5c",
    preview: "Frontend Library · Hooks, Context, RSC",
    time: "2m",
  },
  {
    name: "TypeScript",
    icon: "TS",
    bg: "#1a2f6e",
    preview: "Language · Tipos estáticos, interfaces",
    badge: 1,
    time: "hoy",
  },
  {
    name: "Django",
    icon: "Dj",
    bg: "#0a3a2a",
    preview: "Backend · ORM, Auth, Admin",
    time: "hoy",
  },
  {
    name: "Ubuntu Server",
    icon: "Ub",
    bg: "#2a1a4a",
    preview: "SO · Despliegue, terminal, servicios",
    time: "ayer",
  },
  {
    name: "PostgreSQL",
    icon: "PG",
    bg: "#2c2c2e",
    preview: "Database · Relacional, queries, indexes",
    time: "ayer",
  },
  {
    name: "Figma",
    icon: "◈",
    bg: "#4a1d6e",
    preview: "UI Design · Prototipos, componentes",
    time: "lun",
  },
  {
    name: "Git",
    icon: "⌥",
    bg: "#7f1d1d",
    preview: "Version Control · Branches, commits",
    time: "dom",
  },
  {
    name: "REST API",
    icon: "⇄",
    bg: "#0f3a38",
    preview: "Backend · Endpoints, JSON, HTTP",
    time: "dom",
  },
];

const hideScrollbarStyle: React.CSSProperties = {
  overflowY: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
};

export default function Tecno() {
  // No entrance animations here — Info.tsx owns them via ScrollTrigger.
  // Hover interactions stay local.

  const handleRowEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector(".tech-icon");
    gsap.to(e.currentTarget, { x: 5, duration: 0.2, ease: "power2.out" });
    gsap.to(icon, {
      rotate: 8,
      scale: 1.15,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleRowLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector(".tech-icon");
    gsap.to(e.currentTarget, { x: 0, duration: 0.25, ease: "power2.inOut" });
    gsap.to(icon, {
      rotate: 0,
      scale: 1,
      duration: 0.25,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="h-full w-full flex items-center justify-center p-10 select-none">
        <div className="w-full h-full rounded-4xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm overflow-hidden flex flex-col">
          {/* Topbar — targeted by Info.tsx as .info-tech-header */}
          <div className="info-tech-header flex justify-between items-center px-4 pt-5 pb-3">
            <span className="text-xl font-bold text-white">Tecnologias</span>
            <button className="text-tertiary text-2xl leading-none">+</button>
          </div>

          {/* Search — targeted by Info.tsx as .info-tech-search */}
          <div className="info-tech-search mx-3 mb-2 bg-white/8 rounded-xl px-3 py-2 flex items-center gap-2">
            <span className="text-sm text-white/30">Buscar</span>
          </div>

          {/* List */}
          <div className="flex-1 hide-scrollbar" style={hideScrollbarStyle}>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                // info-tech-row → scroll animation | tech-row kept for backwards compat
                className="info-tech-row tech-row flex items-center gap-3 px-4 py-3 border-b border-white/5 cursor-default"
                onMouseEnter={handleRowEnter}
                onMouseLeave={handleRowLeave}
              >
                <div
                  className="info-tech-icon tech-icon w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold text-white shrink-0"
                  style={{ background: tech.bg }}
                >
                  {tech.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-semibold text-white">
                      {tech.name}
                    </span>
                    <span className="text-[11px] text-white/30">
                      {tech.time}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 truncate mt-0.5">
                    {tech.preview}
                  </p>
                </div>
                {tech.badge && (
                  <div className="info-tech-badge tech-badge bg-tertiary text-white text-[11px] font-semibold rounded-full min-w-5 h-5 flex items-center justify-center px-1.5">
                    {tech.badge}
                  </div>
                )}
                <span className="text-white/20 text-sm">›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
