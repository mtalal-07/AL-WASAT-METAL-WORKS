import { TextLink } from "./ui/TextLink";

type Props = {
  heading: string;
  paragraphs: string[];
  link?: { label: string; href: string };
  tone?: "light" | "dark";
};

/** Two-column heading / body block (plan §3.7). Used by §2.3 and the About page. */
export function SplitStatement({ heading, paragraphs, link, tone = "dark" }: Props) {
  const headingColor = tone === "light" ? "text-white" : "text-ink";
  const bodyColor = tone === "light" ? "text-white/78" : "text-body";

  return (
    <div className="flex flex-col gap-10 min-[901px]:flex-row min-[901px]:gap-[130px]">
      <h2
        className={`text-[30px] font-semibold leading-[1.25] tracking-[-0.01em] sm:text-[40px] min-[901px]:w-[42%] ${headingColor}`}
      >
        {heading}
      </h2>

      <div className="min-[901px]:w-[44%]">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-[15px] leading-[24px] ${bodyColor} ${
              i > 0 ? "mt-[18px]" : ""
            }`}
          >
            {p}
          </p>
        ))}
        {link && (
          <div className="mt-7">
            <TextLink label={link.label} href={link.href} tone={tone} />
          </div>
        )}
      </div>
    </div>
  );
}
