import Image from "next/image";
import { images } from "@/lib/images";
import { home } from "@/content/site-data";

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="max-w-[220px]">
      <h3 className="text-[15px] font-semibold leading-[1.4] text-ink">{title}</h3>
      <p className="mt-3 text-[13px] leading-[1.8] text-body-muted">{body}</p>
    </div>
  );
}

/** §2.9 — Engineered metal works feature (centered heading + flanking blocks). */
export function FeatureTriptych() {
  const { heading, left, right } = home.feature;

  return (
    <section className="bg-white py-14 md:py-20 lg:pt-[120px] lg:pb-[100px]">
      <div className="container-x">
        <h2 className="mx-auto max-w-[760px] text-center text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[50px]">
          {heading}
        </h2>

        <div className="mt-12 flex flex-col items-center gap-10 lg:mt-16 lg:flex-row lg:justify-between">
          <Block title={left.title} body={left.body} />

          <div className="relative aspect-[4/3] w-full max-w-[440px] lg:w-[40%]">
            <Image
              src={images.feature.src}
              alt={images.feature.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          </div>

          <Block title={right.title} body={right.body} />
        </div>
      </div>
    </section>
  );
}
