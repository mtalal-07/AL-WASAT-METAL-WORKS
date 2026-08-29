import Image from "next/image";

export type PostCardProps = {
  title: string;
  excerpt: string;
  date: string;
  image: { src: string; alt: string };
};

/** Blog post preview card — hard-corner image, date, title, excerpt. */
export function PostCard({ title, excerpt, date, image }: PostCardProps) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      </div>
      {date && (
        <p className="mt-5 text-[11px] leading-[1.5] tracking-[0.02em] text-body-muted">
          {date}
        </p>
      )}
      <h3 className={`${date ? "mt-2" : "mt-5"} text-[17px] font-semibold leading-[1.35] text-ink`}>
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-[22px] text-body">{excerpt}</p>
    </article>
  );
}
