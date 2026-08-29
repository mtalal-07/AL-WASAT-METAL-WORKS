import Image from "next/image";

type Props = {
  heading: string;
  lead?: string;
  /** Optional photo behind the header band (kept under an indigo wash). */
  image?: { src: string; alt: string };
};

/**
 * Page heading band. Sits flush under the solid navbar on interior routes —
 * same indigo palette, type scale and spacing as the landing page's bands.
 * With `image`, a photo shows behind an indigo gradient so text stays legible.
 */
export function PageHeader({ heading, lead, image }: Props) {
  return (
    <section className="on-indigo relative isolate overflow-hidden bg-indigo">
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-[0.38]"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(75,69,105,0.70) 0%, rgba(65,59,92,0.88) 100%)",
            }}
          />
        </>
      )}

      <div className="container-x py-[72px] md:py-[96px] lg:py-[120px]">
        <h1 className="max-w-[820px] text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[44px]">
          {heading}
        </h1>
        {lead && (
          <p className="mt-5 max-w-[560px] text-[13px] leading-[22px] text-white/80">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
