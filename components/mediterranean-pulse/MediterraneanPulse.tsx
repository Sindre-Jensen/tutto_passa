"use client";

import { AnimatePresence, motion } from "motion/react";
import type { PulseSlide } from "./types";
import { useMediterraneanPulse } from "./useMediterraneanPulse";

function PulseSlideContent({ slide }: { slide: PulseSlide }) {
  switch (slide.type) {
    case "weather":
      return (
        <div className="space-y-2.5">
          <p className="text-[13px] leading-snug text-white/90">
            <span className="mr-1.5 opacity-80">📍</span>
            {slide.location}
          </p>
          <p className="font-display text-2xl leading-none text-white">
            <span className="mr-2">{slide.weatherEmoji}</span>
            {slide.airTempC}°C
          </p>
          {slide.seaTempC !== null && (
            <p className="text-[13px] text-white/85">
              <span className="mr-1.5 opacity-80">🌊</span>
              Sea {slide.seaTempC}°C
            </p>
          )}
        </div>
      );
    case "coffee":
      return (
        <div className="space-y-2">
          <p className="text-[13px] text-white/90">
            <span className="mr-1.5">☕</span>
            {slide.title}
          </p>
          <p className="text-[13px] leading-relaxed text-white/80">{slide.text}</p>
        </div>
      );
    case "quote":
      return (
        <div className="space-y-2">
          <p className="font-utility text-[9px] tracking-[0.18em] text-white/65">
            <span className="mr-1">💬</span>
            {slide.label.toUpperCase()}
          </p>
          <p className="font-display text-[15px] italic leading-snug text-white">
            &ldquo;{slide.text}&rdquo;
          </p>
        </div>
      );
    case "fact":
      return (
        <div className="space-y-2">
          <p className="text-[13px] text-white/90">
            <span className="mr-1.5">🍋</span>
            {slide.title}
          </p>
          <p className="text-[13px] leading-relaxed text-white/80">{slide.text}</p>
        </div>
      );
    case "sunset":
      return (
        <div className="space-y-2">
          <p className="text-[13px] text-white/90">
            <span className="mr-1.5">🌅</span>
            Sunset
          </p>
          <p className="font-display text-xl text-white">{slide.location}</p>
          <p className="font-display text-2xl leading-none text-white/95">{slide.time}</p>
        </div>
      );
  }
}

function PulseSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-2 w-24 rounded bg-white/20" />
      <div className="h-6 w-16 rounded bg-white/15" />
      <div className="h-2 w-20 rounded bg-white/10" />
    </div>
  );
}

interface MediterraneanPulseProps {
  className?: string;
}

export function MediterraneanPulse({ className = "" }: MediterraneanPulseProps) {
  const { currentSlide, isLoading, slides, currentIndex } = useMediterraneanPulse();

  return (
    <aside
      className={`pointer-events-none absolute left-4 right-4 top-[4.75rem] z-20 sm:left-auto sm:right-8 sm:top-28 md:right-10 ${className}`}
      aria-live="polite"
      aria-label="Mediterranean Pulse"
    >
      <div
        className="pointer-events-auto ml-auto w-full max-w-[280px] rounded-xl border border-white/20 bg-white/10 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-[260px]"
        style={{ WebkitBackdropFilter: "blur(20px)" }}
      >
        <p className="font-utility mb-3 text-[8px] tracking-[0.2em] text-white/55">
          MEDITERRANEAN PULSE
        </p>

        <div className="relative min-h-[72px]">
          {isLoading ? (
            <PulseSkeleton />
          ) : (
            <AnimatePresence mode="wait">
              {currentSlide && (
                <motion.div
                  key={`${currentSlide.type}-${currentIndex}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PulseSlideContent slide={currentSlide} />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {!isLoading && slides.length > 1 && (
          <div className="mt-3 flex gap-1">
            {slides.map((slide, i) => (
              <span
                key={`${slide.type}-${i}`}
                className={`h-px flex-1 transition-colors duration-500 ${
                  i === currentIndex ? "bg-white/70" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
