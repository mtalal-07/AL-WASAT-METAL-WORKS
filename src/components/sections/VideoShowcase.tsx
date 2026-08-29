"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlayButton } from "../ui/PlayButton";
import { images } from "@/lib/images";

/** §2.4 — Video / process showcase (indigo band). */
export function VideoShowcase() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayButton onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Facility video"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[80] flex items-center justify-center p-6"
          style={{ background: "rgba(26,26,30,0.88)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="aspect-video w-full max-w-[960px] bg-black"
          >
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dtN0Q6qJp1o?autoplay=1"
              title="Facility video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-6 top-6 text-[24px] leading-none text-white/80 hover:text-white"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
