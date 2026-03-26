"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "../ui/Button";
import Tecno from "../Tecno";

gsap.registerPlugin(ScrollTrigger);

export default function Info() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const tecnoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Shared ScrollTrigger config
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%", // fires when section top hits 75% of viewport
        once: true, // only animate in once
      };

      // --- Left column: stagger each element from slightly below ---
      const leftItems = [
        logoRef.current,
        headingRef.current,
        taglineRef.current,
        buttonsRef.current,
      ];

      gsap.fromTo(
        leftItems,
        { opacity: 0, y: 32, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: trigger,
        },
      );

      // --- Right column: Tecno card slides in from right ---
      gsap.fromTo(
        tecnoWrapRef.current,
        { opacity: 0, x: 60, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { ...trigger, start: "top 80%" },
          delay: 0.2,
        },
      );

      // --- Tecno internals: header, search, rows, icons, badges ---
      // These fire a tiny bit after the card itself appears
      const innerTrigger = {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      };

      gsap.fromTo(
        [".info-tech-header", ".info-tech-search"],
        { opacity: 0, x: -14 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: innerTrigger,
          delay: 0.45,
        },
      );

      gsap.fromTo(
        ".info-tech-row",
        { opacity: 0, y: 16, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.36,
          stagger: 0.055,
          ease: "power3.out",
          scrollTrigger: innerTrigger,
          delay: 0.6,
        },
      );

      gsap.fromTo(
        ".info-tech-icon",
        { scale: 0.55, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.055,
          ease: "back.out(1.8)",
          scrollTrigger: innerTrigger,
          delay: 0.6,
        },
      );

      gsap.fromTo(
        ".info-tech-badge",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          stagger: 0.1,
          ease: "back.out(2.5)",
          scrollTrigger: innerTrigger,
          delay: 0.85,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-dvh flex items-center justify-center bg-linear-to-b from-transparent via-background/70 to-background px-50"
    >
      {/* Left column */}
      <div className="h-full w-full flex flex-col items-start justify-center gap-5">
        <div
          ref={logoRef}
          className="bg-background py-5 px-2 flex justify-center items-center rounded-3xl shadow-md"
        >
          <Image
            src="/svg/AM.svg"
            alt="Info Image"
            width={800}
            height={600}
            className="w-20"
          />
        </div>

        <h2
          ref={headingRef}
          className="text-2xl font-bold tracking-widest uppercase leading-tight"
        >
          Andres Martinez <br />
          Desarrollos modernos y <br />
          adaptables
        </h2>

        <p
          ref={taglineRef}
          className="text-lg"
          style={{
            background: "linear-gradient(90deg, #000 25%, #fff 50%, #000 75%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 6.5s linear infinite",
          }}
        >
          Tu lo pides, yo lo creo.
        </p>

        <div ref={buttonsRef} className="flex gap-3">
          <Button
            backgroundColor="bg-black"
            colorType="dark"
            customClass="py-4 px-7"
          >
            Contactame
          </Button>
          <Button
            backgroundColor="bg-gray-100/60"
            colorType="light"
            customClass="py-4 px-7"
          >
            Mi Curriculum
          </Button>
        </div>
      </div>

      {/* Right column — Tecno wrapped so we can animate the outer shell */}
      <div
        ref={tecnoWrapRef}
        className="h-full w-full flex flex-col items-end justify-center p-10"
      >
        {/*
          Pass class-name prefixes down to Tecno so ScrollTrigger can
          target the rows/icons/badges from this file's context.
          If you don't want to modify Tecno's props, keep the default
          class names and just use .tech-row / .tech-icon / .tech-badge
          — the selectors above already match those.
        */}
        <Tecno />
      </div>
    </section>
  );
}
