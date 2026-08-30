import Link from "next/link";
import { footer } from "@/content/site-data";

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[17px] font-semibold leading-[1.4] text-ink">{children}</h3>
  );
}

const LINK = "text-[12px] leading-[2] text-body hover:text-ink transition-colors";

/** Column border rules: stacked → horizontal, 2-up → cross, 4-up → vertical only. */
function colBorders(i: number) {
  return [
    i > 0 && "border-t border-hairline",
    i === 1 && "sm:border-t-0",
    (i === 1 || i === 3) && "sm:border-l sm:border-hairline",
    "lg:border-t-0",
    i > 0 && "lg:border-l lg:border-hairline",
  ]
    .filter(Boolean)
    .join(" ");
}

const CELL =
  "px-0 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-14 lg:first:pl-0 lg:last:pr-0";

/** §2.13 — Footer. */
export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-x">
        <div className="border-t border-hairline" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr_1fr]">
          {/* Column 1 — about */}
          <div className={`${CELL} ${colBorders(0)}`}>
            <ColHeading>{footer.about.heading}</ColHeading>
            <p className="mt-5 max-w-[260px] text-[11px] leading-[1.8] text-body-muted">
              {footer.about.body}
            </p>
          </div>

          {/* Column 2 — quick links */}
          <div className={`${CELL} ${colBorders(1)}`}>
            <ColHeading>{footer.quickLinks.heading}</ColHeading>
            <ul className="mt-5">
              {footer.quickLinks.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — contact */}
          <div className={`${CELL} ${colBorders(2)}`}>
            <ColHeading>{footer.contact.heading}</ColHeading>
            <ul className="mt-5 flex flex-col gap-2.5">
              {footer.contact.items.map((item) => (
                <li
                  key={item.text}
                  className="max-w-[260px] text-[12px] leading-[1.6] text-body"
                >
                  {"href" in item && item.href ? (
                    <Link href={item.href} className="hover:text-ink">
                      {item.text}
                    </Link>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — social */}
          <div className={`${CELL} ${colBorders(3)}`}>
            <ColHeading>{footer.social.heading}</ColHeading>
            <ul className="mt-5">
              {footer.social.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-hairline pt-5 pb-6 text-center">
          <span className="text-[11px] text-body-muted">{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
