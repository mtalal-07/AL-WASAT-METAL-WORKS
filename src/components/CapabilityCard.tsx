import Image from "next/image";

export type CapabilityCardProps = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  imagePosition?: "top" | "bottom";
  /** Vertical stagger — pushes content down within its (equal-height) grid cell. */
  offset?: boolean;
  /** Responsive left-hairline classes supplied by the grid. */
  divider?: string;
};

function CardText({
  title,
  description,
}: Pick<CapabilityCardProps, "title" | "description">) {
  return (
    <div className="text-center">
      <h3 className="text-[19px] font-semibold leading-[1.35] text-ink">{title}</h3>
      <p className="mx-auto mt-2 max-w-[220px] text-[14px] leading-[1.65] text-body-muted">
        {description}
      </p>
    </div>
  );
}

function CardImage({ image }: Pick<CapabilityCardProps, "image">) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[200px] overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="200px"
        className="object-cover transition-transform duration-[400ms] ease-out group-hover/cap:scale-[1.04] motion-reduce:transform-none"
      />
    </div>
  );
}

/** A single capability / service card (plan §3.9). Hard-corner image, hairline column rule. */
export function CapabilityCard({
  title,
  description,
  image,
  imagePosition = "bottom",
  offset = false,
  divider = "",
}: CapabilityCardProps) {
  const imageFirst = imagePosition === "top";
  return (
    <div className={`group/cap h-full sm:px-6 lg:px-8 ${divider}`}>
      <div className={`flex h-full flex-col gap-6 ${offset ? "lg:pt-12" : ""}`}>
        {imageFirst ? (
          <>
            <CardImage image={image} />
            <CardText title={title} description={description} />
          </>
        ) : (
          <>
            <CardText title={title} description={description} />
            <CardImage image={image} />
          </>
        )}
      </div>
    </div>
  );
}
