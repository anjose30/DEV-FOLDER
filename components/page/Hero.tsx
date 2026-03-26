"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const card = cardRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (!section || !card || !image || !text) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=110%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(
          card,
          {
            width: "100%",
            height: "100dvh",
            borderRadius: 0,
            ease: "none",
          },
          0,
        )
        .to(
          image,
          {
            filter: "grayscale(0)",
            ease: "none",
          },
          0,
        )
        .to(
          text,
          {
            opacity: 0,
            y: 50,
            ease: "none",
          },
          0,
        );
    });

    mm.add("(max-width: 767px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=90%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(
          card,
          {
            width: "100%",
            height: "100dvh",
            borderRadius: 0,
            ease: "none",
          },
          0,
        )
        .to(
          image,
          {
            filter: "grayscale(0)",
            ease: "none",
          },
          0,
        )
        .to(
          text,
          {
            opacity: 0,
            y: 50,
            ease: "none",
          },
          0,
        );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-dvh flex items-center justify-center overflow-hidden"
    >
      <div
        ref={cardRef}
        className="relative w-full h-120 md:w-120 md:h-140 overflow-hidden bg-black"
      >
        <img
          ref={imageRef}
          src="/bg1.png"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          alt=""
        />

        <div ref={textRef} className="absolute bottom-8 left-6 z-10 text-white">
          <h1 className="text-4xl font-bold tracking-widest uppercase leading-tight">
            INGENIERIA &
            <br />
            DESARROLLO
          </h1>
        </div>
      </div>
    </section>
  );
}
