type Props = {
  value: string;
  label: string;
  align?: "center" | "left";
};

/** Stat number over a caption label (plan §3.15). */
export function StatBlock({ value, label, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div className="text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[42px]">
        {value}
      </div>
      <div className="mt-2.5 text-[11px] leading-[1.5] text-body-muted">{label}</div>
    </div>
  );
}
