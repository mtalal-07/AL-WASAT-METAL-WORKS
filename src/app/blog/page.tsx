import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { PostCard } from "@/components/PostCard";
import { blogPage } from "@/content/site-data";

export const metadata: Metadata = {
  title: blogPage.meta.title,
  description: blogPage.meta.description,
};

export default function BlogPage() {
  const { header, posts } = blogPage;

  return (
    <main>
      <PageHeader heading={header.heading} lead={header.lead} image={header.image} />

      <Section background="white" paddingY="lg">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard
              key={p.title}
              title={p.title}
              excerpt={p.excerpt}
              date={p.date}
              image={p.image}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
