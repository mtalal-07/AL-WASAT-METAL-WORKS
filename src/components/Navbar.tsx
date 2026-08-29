"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { nav } from "@/content/site-data";

type Variant = "transparent" | "solid";

export function Navbar({ variant }: { variant?: Variant }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Home: transparent over the hero, turns solid after 80px of scroll.
  // Every other route: solid from the start (no hero behind it).
  const solid = variant === "solid" || !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bar = !isHome
    ? "sticky top-0 h-[72px] bg-indigo shadow-[0_1px_0_rgba(255,255,255,0.12)]"
    : solid
      ? "fixed top-0 h-16 bg-indigo shadow-[0_1px_0_rgba(255,255,255,0.12)]"
      : "absolute top-6 h-[72px] bg-transparent";

  return (
    <header className="on-indigo">
      <div
        className={`left-0 right-0 z-50 transition-[height,background-color,box-shadow] duration-[240ms] ease-out ${bar}`}
      >
        <nav className="container-x flex h-full items-center justify-between">
          <Logo color="white" />

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 min-[901px]:flex">
            {nav.links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-[13px] font-medium transition-colors hover:text-white ${
                      active ? "text-white" : "text-white/90"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-white transition-[width] duration-200 ease-out ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center min-[901px]:hidden"
          >
            <span className="relative block h-[10px] w-6">
              <span
                className={`absolute left-0 block h-0.5 w-full bg-white transition-transform duration-200 ${
                  open ? "top-1 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-0.5 w-full bg-white transition-transform duration-200 ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] overflow-hidden min-[901px]:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-[320px] flex-col bg-indigo px-8 py-8 transition-transform duration-[240ms] ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-12 flex items-center justify-between">
            <Logo color="white" />
          </div>
          <ul className="flex flex-col gap-5">
            {nav.links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="text-[15px] font-medium text-white/90 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button
              label={nav.cta.label}
              href={nav.cta.href}
              variant="primary"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
