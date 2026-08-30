import Image from "next/image";
import { Button } from "./ui/Button";
import { images } from "@/lib/images";
import { home } from "@/content/site-data";

export function Hero() {
  const { heading, subheading, primary, secondary } = home.hero;

  return (
    <section className="on-indigo relative isolate flex min-h-[520px] flex-col overflow-hidden sm:min-h-[560px] lg:min-h-[680px]">
      {/* Background photo */}
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover"
      />

      {/* Gradient overlay — blends into the indigo band that follows */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(75,69,105,0.10) 0%, rgba(75,69,105,0.35) 55%, rgba(75,69,105,0.92) 100%)",
        }}
      />

      <div className="container-x flex flex-1 flex-col items-center pt-[128px] pb-14 text-center lg:pt-[144px]">
        {/* Spacer — centers the heading vertically */}
        <div className="flex-1" />

        <h1 className="max-w-[15ch] text-balance text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:max-w-[20ch] sm:text-[46px] lg:text-[64px]">
          {heading}
        </h1>

        {/* Spacer — pushes the copy + CTAs into the lower third, over the building */}
        <div className="min-h-[140px] flex-1" />

        <p className="max-w-[520px] text-[15px] leading-[24px] text-white/80">
          {subheading}
        </p>

        <div className="mt-6 flex w-full flex-col items-center gap-3 min-[561px]:w-auto min-[561px]:flex-row min-[561px]:gap-3">
          <Button
            label={primary.label}
            href={primary.href}
            variant="primary"
            className="w-full min-[561px]:w-auto"
          />
          <Button
            label={secondary.label}
            href={secondary.href}
            variant="secondary"
            className="w-full min-[561px]:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
