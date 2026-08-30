import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "@/content/projects-data";

/** Slugs of the projects surfaced on the landing page — order matters. */
const FEATURED_SLUGS = [
  "acoustic-barrier-works",
  "industrial-metal-platforms",
  "commercial-handrails-staircases",
  "fencing-walls-barriers",
] as const;

const featured = FEATURED_SLUGS.map(
  (slug) => projects.find((p) => p.slug === slug)!,
).filter(Boolean);

/** §2.9b — Featured Projects teaser (white). Pulls from the shared projects-data source. */
export function FeaturedProjects() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-[120px]">
      <div className="container-x">
        <SectionHeading align="center">Featured Projects</SectionHeading>
        <p className="mx-auto mt-4 max-w-[460px] text-center text-[15px] leading-[24px] text-body">
          A glimpse at our recent fabrication and installation work.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                />
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-body-muted">
                {project.category}
              </p>
              <h3 className="mt-2 text-[19px] font-semibold leading-[1.35] text-ink transition-colors group-hover:text-indigo">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button label="View All Projects →" href="/projects" variant="dark" />
        </div>
      </div>
    </section>
  );
}
