import Link from "next/link";
import { Section } from "../ui/Section";
import { CapabilityGrid } from "../CapabilityGrid";
import { homeServices } from "@/content/services-data";

/** §2.5 — "Our Services" teaser (staggered 4-up grid + link to the full list). */
export function Capabilities() {
  return (
    <Section background="white" paddingY="lg">
      <CapabilityGrid heading="Our Services" items={homeServices} staggered />

      <div className="mt-16 flex justify-center">
        <Link
          href="/services"
          className="text-link text-ink hover:text-indigo"
        >
          View All Services →
        </Link>
      </div>
    </Section>
  );
}
