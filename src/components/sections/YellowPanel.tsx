import Image from "next/image";
import { Fragment } from "react";
import { Button } from "../ui/Button";
import { images } from "@/lib/images";
import { home } from "@/content/site-data";

/** §2.10 — Yellow split panel (full-bleed 50/50). */
export function YellowPanel() {
  const { headingLines, body, button } = home.panel;

  return (
    <section className="on-yellow bg-white">
      <div className="flex flex-col min-[901px]:flex-row">
        {/* Left — yellow panel, content bottom-left */}
        <div className="flex bg-yellow px-6 py-14 min-[901px]:w-1/2 min-[901px]:items-end min-[901px]:px-16 min-[901px]:pb-16 lg:pl-[120px]">
          <div>
            <h2 className="text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink sm:text-[30px] sm:leading-[40px]">
              {headingLines.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h2>
            <p className="mt-5 max-w-[360px] text-[11px] leading-[1.8] text-[#3b3b42]">
              {body}
            </p>
            <div className="mt-7">
              <Button label={button.label} href={button.href} variant="dark" />
            </div>
          </div>
        </div>

        {/* Right — image, flush to the screen edge */}
        <div className="relative min-h-[280px] w-full min-[901px]:min-h-[360px] min-[901px]:w-1/2">
          <Image
            src={images.automated.src}
            alt={images.automated.alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
