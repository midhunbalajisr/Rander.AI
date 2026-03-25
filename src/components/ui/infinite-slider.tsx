import { cn } from "@/lib/utils";
import React from "react";

export function InfiniteSlider({
  children,
  gap = 16,
  reverse = false,
  speed = 20,
  speedOnHover,
  className,
}: {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
  className?: string;
}) {
  return (
    <>
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - ${gap}px)); }
        }
        .animate-custom-marquee {
          animation: custom-marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"};
        }
        .pause-on-hover:hover .animate-custom-marquee {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className={cn("flex w-full overflow-hidden", speedOnHover ? "pause-on-hover" : "", className)}
        style={{ gap: `${gap}px` }}
      >
        <div
          className="flex shrink-0 min-w-full items-center justify-around animate-custom-marquee"
          style={{ gap: `${gap}px` }}
        >
          {children}
          {children}
          {children}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 min-w-full items-center justify-around animate-custom-marquee"
          style={{ gap: `${gap}px` }}
        >
          {children}
          {children}
          {children}
        </div>
      </div>
    </>
  );
}
