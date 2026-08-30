import { Eyebrow } from "../ui/Eyebrow";
import { home } from "@/content/site-data";

/** §2.11 — Qualitative badges over a blueprint elevation (white). */
export function StatsRow() {
  const { eyebrow, lead, badges } = home.stats;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-[104px]">
      <div className="container-x">
        {/* Row 1 */}
        <div className="flex flex-col gap-4 min-[901px]:flex-row min-[901px]:gap-0">
          <div className="min-[901px]:w-[30%]">
            <Eyebrow label={eyebrow} />
          </div>
          <p className="max-w-[520px] text-[22px] leading-[33px] text-ink min-[901px]:w-[70%]">
            {lead}
          </p>
        </div>

        {/* Row 2 — blueprint */}
        <div className="mt-12 flex justify-center">
          <Blueprint />
        </div>

        {/* Row 3 — badges */}
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.value}
              className={
                i >= 2
                  ? "border-t border-hairline pt-8 sm:pt-8 md:border-t-0 md:pt-0"
                  : ""
              }
            >
              <div className="text-center">
                <div className="text-[20px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[22px]">
                  {b.value}
                </div>
                <div className="mx-auto mt-2 max-w-[200px] text-[11px] leading-[1.5] text-body-muted">
                  {b.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blueprint() {
  return (
    <svg
      viewBox="0 0 640 210"
      className="w-full max-w-[640px] opacity-55"
      fill="none"
      stroke="#1A1A1E"
      strokeWidth="1"
      aria-hidden="true"
    >
      {/* dimension guide lines */}
      <line x1="0" y1="180" x2="640" y2="180" strokeWidth="0.75" />
      <line x1="0" y1="24" x2="640" y2="24" strokeDasharray="3 4" strokeWidth="0.5" />
      {/* roof */}
      <path d="M60 78 L320 26 L580 78" />
      <path d="M60 92 L320 40 L580 92" />
      {/* eaves / building box */}
      <line x1="60" y1="78" x2="60" y2="180" />
      <line x1="580" y1="78" x2="580" y2="180" />
      <line x1="60" y1="150" x2="580" y2="150" />
      {/* vertical column members */}
      {Array.from({ length: 11 }).map((_, i) => {
        const x = 60 + i * 52;
        return <line key={i} x1={x} y1="92" x2={x} y2="180" strokeWidth="0.75" />;
      })}
      {/* roof trusses — follow the underside of the gable */}
      {Array.from({ length: 10 }).map((_, i) => {
        const x1 = 60 + i * 52;
        const x2 = x1 + 52;
        const roofY = (x: number) => 92 - (260 - Math.abs(320 - x)) * 0.2;
        return (
          <line
            key={`t${i}`}
            x1={x1}
            y1={roofY(x1)}
            x2={x2}
            y2={roofY(x2)}
            strokeWidth="0.5"
          />
        );
      })}
      {/* ground ticks extending past building */}
      <line x1="30" y1="180" x2="30" y2="188" strokeWidth="0.5" />
      <line x1="610" y1="180" x2="610" y2="188" strokeWidth="0.5" />
    </svg>
  );
}
