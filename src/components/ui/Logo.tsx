import Link from "next/link";
import { company } from "@/content/site-data";

type Props = {
  color?: "white" | "ink";
  href?: string;
};

/** Angular diamond mark + Al Wasat Metal Works wordmark (plan §2.1 / §3.2). */
export function Logo({ color = "white", href = "/" }: Props) {
  const tone = color === "white" ? "text-white" : "text-ink";
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 ${tone}`}
      aria-label={`${company.name} home`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="9"
          y="0.7"
          width="11.7"
          height="11.7"
          transform="rotate(45 9 0.7)"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M5.6 12V6l3.4 3.1L12.4 6v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.1em] sm:text-[14px] sm:tracking-[0.14em]">
        {company.name}
      </span>
    </Link>
  );
}
