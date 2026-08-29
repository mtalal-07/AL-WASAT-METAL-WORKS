import Link from "next/link";

type Props = {
  label: string;
  href?: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Uppercase 11/600 label with a 1px underline at 7px offset (plan §3.4). */
export function TextLink({ label, href = "#", tone = "dark", className = "" }: Props) {
  const color =
    tone === "light"
      ? "text-white hover:text-yellow"
      : "text-ink hover:text-indigo";
  return (
    <Link href={href} className={`text-link ${color} ${className}`}>
      {label}
    </Link>
  );
}
