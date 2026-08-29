import Image from "next/image";
import { Button } from "../ui/Button";
import { images } from "@/lib/images";
import { home } from "@/content/site-data";

/** §2.7 — Workshop / manufacturing text: intro paragraph + spec list + CTA (white). */
export function CapabilitiesDetail() {
  const { body, bullets, button } = home.manufacturing;

  return (
    <section className="bg-white pt-[88px] pb-14">
      <div className="container-x">
        {/* Top zone — lead paragraph, offset right */}
        <div className="min-[901px]:pl-[30%]">
          <p className="max-w-[520px] text-[19px] leading-[30px] text-ink">{body}</p>
        </div>

        {/* Bottom zone */}
        <div className="mt-14 flex flex-col gap-8 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between">
          <div className="relative h-[116px] w-[132px] shrink-0 overflow-hidden">
            <Image
              src={images.pipes.src}
              alt={images.pipes.alt}
              fill
              sizes="132px"
              className="object-cover"
            />
          </div>

          <ul className="min-[901px]:flex-1 min-[901px]:pl-[calc(30%-132px-32px)]">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex gap-2 py-[3.5px] text-[11px] leading-[1.9] text-body"
              >
                <span className="text-body-muted">–</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="shrink-0 min-[901px]:pt-[34px]">
            <Button label={button.label} href={button.href} variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
