import type { ReactNode } from "react";

type Background = "white" | "indigo" | "yellow";
type PaddingY = "sm" | "md" | "lg";

const bg: Record<Background, string> = {
  white: "bg-white",
  indigo: "on-indigo bg-indigo text-white",
  yellow: "on-yellow bg-yellow text-ink",
};

// Responsive vertical padding — matches the landing page scale (plan §1.6).
const pad: Record<PaddingY, string> = {
  sm: "py-[56px] md:py-[64px] lg:py-[72px]",
  md: "py-12 md:py-16 lg:py-20",
  lg: "py-14 md:py-20 lg:py-[120px]",
};

type Props = {
  children: ReactNode;
  background?: Background;
  paddingY?: PaddingY;
  fullBleed?: boolean;
  className?: string;
  id?: string;
};

/** Section wrapper — handles background, container width and responsive padding (plan §3.5). */
export function Section({
  children,
  background = "white",
  paddingY = "lg",
  fullBleed = false,
  className = "",
  id,
}: Props) {
  return (
    <section id={id} className={`${bg[background]} ${pad[paddingY]} ${className}`}>
      {fullBleed ? children : <div className="container-x">{children}</div>}
    </section>
  );
}
