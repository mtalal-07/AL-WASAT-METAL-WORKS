import Image from "next/image";
import { Button } from "../ui/Button";
import { images } from "@/lib/images";
import { home } from "@/content/site-data";

/** §2.12 — Closing CTA: image pair + contact card (white). */
export function ClosingCta() {
  const { heading, body, button } = home.closing;

  return (
    <section className="bg-white pt-10 pb-24">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-[52fr_46fr]">
          {/* Left — tall image */}
          <div className="relative min-h-[260px] w-full min-[901px]:min-h-[420px]">
            <Image
              src={images.steelWarehouse.src}
              alt={images.steelWarehouse.alt}
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          {/* Right — image over card, no gap */}
          <div className="flex flex-col">
            <div className="relative aspect-video w-full min-[901px]:h-1/2 min-[901px]:flex-1">
              <Image
                src={images.framework.src}
                alt={images.framework.alt}
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="border-x border-b border-hairline bg-white p-8">
              <h2 className="max-w-[280px] text-[14px] font-semibold leading-[1.45] text-ink">
                {heading}
              </h2>
              <p className="mt-3 max-w-[280px] text-[11px] leading-[1.75] text-body-muted">
                {body}
              </p>
              <div className="mt-6">
                <Button
                  label={button.label}
                  href={button.href}
                  variant="primary"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
