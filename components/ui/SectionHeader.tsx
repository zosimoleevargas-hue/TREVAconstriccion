import FadeIn from "./FadeIn";
import type { SectionHeaderProps } from "@/lib/types";

export default function SectionHeader({
  label,
  title,
  subtitle,
  badge,
  center = true,
  dark = false,
}: SectionHeaderProps) {
  return (
    <FadeIn className={`mb-16 ${center ? "text-center" : ""}`}>
      <span className={`text-sm font-medium uppercase tracking-widest ${dark ? "text-accent" : "text-primary"}`}>
        {label}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight ${dark ? "text-white" : "text-hero-title"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
      {badge && (
        <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-accent/5 text-accent text-sm sm:text-base font-semibold px-6 py-2.5 rounded-full border border-accent/30 shadow-sm shadow-accent/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          {badge}
        </div>
      )}
    </FadeIn>
  );
}
