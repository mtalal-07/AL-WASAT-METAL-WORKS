import { CapabilityCard, type CapabilityCardProps } from "./CapabilityCard";

type Item = Omit<CapabilityCardProps, "imagePosition" | "offset" | "divider">;

type Props = {
  heading?: string;
  items: Item[];
  /** Alternating image/text order + vertical stagger on even cards (plan §2.5). */
  staggered?: boolean;
  /** Desktop column count. */
  columns?: 3 | 4;
};

const cols: Record<3 | 4, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/**
 * Responsive capability/service grid (plan §3.10).
 * 4→2→1 columns, thin hairline rules between columns, stagger disabled below lg.
 */
export function CapabilityGrid({
  heading,
  items,
  staggered = false,
  columns = 4,
}: Props) {
  return (
    <>
      {heading && (
        <h2 className="text-center text-[34px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[50px]">
          {heading}
        </h2>
      )}
      <div
        className={`grid grid-cols-1 gap-y-14 sm:grid-cols-2 ${cols[columns]} ${
          heading ? "mt-12 lg:mt-[72px]" : ""
        }`}
      >
        {items.map((item, i) => {
          const sm = i % 2 !== 0 ? "sm:border-l sm:border-hairline" : "";
          const lg =
            i % columns === 0
              ? "lg:border-l-0"
              : "lg:border-l lg:border-hairline";
          return (
            <CapabilityCard
              key={item.title}
              {...item}
              imagePosition={staggered && i % 2 === 1 ? "top" : "bottom"}
              offset={staggered && i % 2 === 1}
              divider={`${sm} ${lg}`}
            />
          );
        })}
      </div>
    </>
  );
}
