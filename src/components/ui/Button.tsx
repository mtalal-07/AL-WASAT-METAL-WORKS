import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "dark";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center rounded-none font-semibold uppercase tracking-[0.08em] text-[12px] leading-none transition-[background-color,transform,border-color] duration-[180ms] ease-out hover:-translate-y-px motion-reduce:transform-none";

const sizes: Record<Size, string> = {
  md: "px-[34px] py-[17px]",
  sm: "px-[28px] py-[15px]",
};

const variants: Record<Variant, string> = {
  primary: "bg-yellow text-ink hover:bg-yellow-hover",
  secondary:
    "bg-transparent text-white border border-white/55 hover:bg-white/12 hover:border-white",
  dark: "bg-ink text-white hover:bg-ink-hover",
};

type Props = {
  label: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** When set, renders a real <button> (e.g. a form submit) instead of a link. */
  type?: "submit" | "button";
} & Omit<ComponentProps<"a">, "href" | "className" | "type">;

export function Button({
  label,
  href = "#",
  variant = "primary",
  size = "md",
  className = "",
  type,
  ...rest
}: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (type) {
    return (
      <button type={type} className={cls}>
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {label}
    </Link>
  );
}
