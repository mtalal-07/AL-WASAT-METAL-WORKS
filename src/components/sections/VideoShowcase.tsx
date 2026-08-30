import Image from "next/image";
import { images } from "@/lib/images";

/** §2.4 — Process showcase image (indigo band). */
export function VideoShowcase() {
  return (
    <section className="on-indigo bg-indigo pb-6">
      <div className="container-x">
        <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/7]">
          <Image
            src={images.video.src}
            alt={images.video.alt}
            fill
            sizes="(max-width: 1320px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
