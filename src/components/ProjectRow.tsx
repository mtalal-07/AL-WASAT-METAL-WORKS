import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects-data";

type Props = {
  project: Project;
  index: number; // 0-based; drives the 01–NN badge and the left/right alternation
};

/** Wide project row — image on one side, details on the other, alternating per index. */
export function ProjectRow({ project, index }: Props) {
  const number = String(index + 1).padStart(2, "0");
  const imageRight = index % 2 === 1;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden ${
          imageRight ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      </div>

      <div className={imageRight ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-body-muted">
          <span className="border border-hairline px-2.5 py-1 text-ink">
            {number}
          </span>
          <span>{project.category}</span>
        </div>

        <h3 className="mt-5 text-[25px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink transition-colors group-hover:text-indigo sm:text-[29px]">
          {project.title}
        </h3>

        <p className="mt-3 max-w-[460px] text-[15px] leading-[24px] text-body">
          {project.description}
        </p>

        <span className="text-link mt-6 inline-block text-ink group-hover:text-indigo">
          View Project →
        </span>
      </div>
    </Link>
  );
}
