type Props = {
  label: string;
  tone?: "ink" | "white";
  className?: string;
};

/** 11px / 600 label with light tracking (plan §1.2 / §3.20). */
export function Eyebrow({ label, tone = "ink", className = "" }: Props) {
  return (
    <span
      className={`text-[11px] font-semibold tracking-[0.02em] ${
        tone === "white" ? "text-white" : "text-ink"
      } ${className}`}
    >
      {label}
    </span>
  );
}
