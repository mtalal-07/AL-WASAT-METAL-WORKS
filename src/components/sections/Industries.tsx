"use client";

import { useState } from "react";
import Image from "next/image";
import { TextLink } from "../ui/TextLink";
import { images } from "@/lib/images";
import { home } from "@/content/site-data";

/** §2.6 — Indigo band: commitment statement + services list. */
export function Industries() {
  const { statement, link, items } = home.servicesBand;
  const [active, setActive] = useState(1);

  return (
    <section className="on-indigo bg-indigo pt-[72px] pb-[72px]">
      <div className="container-x">
        {/* Statement */}
        <div className="max-w-[520px]">
          <p className="text-[13px] leading-[22px] text-white/78">{statement}</p>
          <div className="mt-6">
            <TextLink label={link.label} href={link.href} tone="light" />
          </div>
        </div>

        {/* Services list + image */}
        <div className="mt-[72px] flex flex-col gap-8 min-[901px]:flex-row min-[901px]:gap-8">
          <ul className="min-[901px]:w-[68%]">
            {items.map((item, i) => {
              const isActive = i === active;
              const last = i === items.length - 1;
              return (
                <li key={item} className={last ? "" : "border-b border-white/[0.18]"}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`block w-full px-1 py-3 text-left text-[18px] font-medium leading-[1.4] tracking-[-0.01em] transition-colors duration-200 sm:text-[22px] ${
                      isActive ? "bg-white text-ink" : "text-white"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="min-[901px]:w-[30%]">
            <div className="relative aspect-video w-full min-[901px]:aspect-[4/3]">
              <Image
                src={images.industries.src}
                alt={images.industries.alt}
                fill
                sizes="(max-width: 900px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
