import Image from "next/image";
import { images } from "@/lib/images";

/** §2.8 — Full-bleed facility photo (no text, hard edges). */
export function RefineryPhoto() {
  return (
    <section className="bg-white">
      <div className="relative aspect-[16/9] w-full sm:aspect-[16/6.5]">
        <Image
          src={images.refinery.src}
          alt={images.refinery.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
