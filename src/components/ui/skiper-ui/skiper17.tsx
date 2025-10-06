"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
  link?: string; // ✅ added link field
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0]) return;

      // Initial state
      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0, opacity: 1 });
      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0, opacity: 0 });
      }

      // Timeline
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      // Animation for each transition
      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: gsap.utils.random(-5, 5),
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          i,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          i,
        );
      }

      // Resize observer to refresh trigger
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[90%] w-full max-w-sm overflow-hidden rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
            containerClassName,
          )}
        >
          {cards.map((card, i) => (
            <a
              key={card.id}
              href={card.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block absolute h-full w-full"
              style={{ zIndex: cards.length - i }}
            >
              <img
                src={card.image}
                alt={card.alt || ""}
                className={cn(
                  "absolute h-full w-full object-cover rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer",
                  imageClassName,
                )}
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example demo wrapper
const Skiper17 = () => {
  const defaultCards: CardData[] = [
    {
      id: 1,
      image: "https://i.ibb.co/jktdKyBT/shadcn.png",
      link: "https://example.com/project-1",
    },
    {
      id: 2,
      image: "https://i.ibb.co/TBqmMcVy/reactbits.png",
      link: "https://example.com/project-2",
    },
    {
      id: 3,
      image: "/images/lummi/img29.png",
      link: "https://example.com/project-3",
    },
    {
      id: 4,
      image: "/images/lummi/img21.png",
      link: "https://example.com/project-4",
    },
    {
      id: 5,
      image: "/images/lummi/img27.png",
      link: "https://example.com/project-5",
    },
  ];

  return (
    <ReactLenis root>
      <div className="h-full w-full">
        <StickyCard002 cards={defaultCards} />
      </div>
    </ReactLenis>
  );
};

export { Skiper17, StickyCard002 };
