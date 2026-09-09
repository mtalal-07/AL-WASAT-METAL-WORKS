import { Hero } from "@/components/Hero";
import { BuiltOnStrength } from "@/components/sections/BuiltOnStrength";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Capabilities } from "@/components/sections/Capabilities";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Industries } from "@/components/sections/Industries";
import { CapabilitiesDetail } from "@/components/sections/CapabilitiesDetail";
import { RefineryPhoto } from "@/components/sections/RefineryPhoto";
import { FeatureTriptych } from "@/components/sections/FeatureTriptych";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { YellowPanel } from "@/components/sections/YellowPanel";
import { StatsRow } from "@/components/sections/StatsRow";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <BuiltOnStrength />
      <VideoShowcase />
      <Capabilities />
      <FeaturedProducts />
      <Industries />
      <CapabilitiesDetail />
      <RefineryPhoto />
      <FeatureTriptych />
      <FeaturedProjects />
      <YellowPanel />
      <StatsRow />
      <ClosingCta />
    </main>
  );
}
