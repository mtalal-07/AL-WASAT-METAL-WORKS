import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Dark section heading — matches the landing "H2 (section, dark)" scale (plan §1.2). */
export function SectionHeading({
  children,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  return (
    <h2
      className={`text-[34px] font-semibold leading-[1.18] tracking-[-0.02em] sm:text-[42px] lg:text-[50px] ${
        tone === "light" ? "text-white" : "text-ink"
      } ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}
