import { SplitStatement } from "../SplitStatement";
import { home } from "@/content/site-data";

/** §2.3 — "Built on Strength" intro band (indigo, continuous with the hero). */
export function BuiltOnStrength() {
  const { heading, paragraphs, link } = home.about;
  return (
    <section className="on-indigo bg-indigo pt-[72px] pb-14">
      <div className="container-x">
        <SplitStatement
          tone="light"
          heading={heading}
          paragraphs={paragraphs}
          link={link}
        />
      </div>
    </section>
  );
}
