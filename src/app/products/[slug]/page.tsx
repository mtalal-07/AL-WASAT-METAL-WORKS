import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { products, getProduct } from "@/content/products-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} — Al Wasat Metal Works`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main>
      <PageHeader heading={product.title} lead={product.category} />

      <Section background="white" paddingY="lg">
        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            priority
            sizes="(max-width: 1320px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <div className="max-w-[680px]">
          <Eyebrow label={product.category} />
          <p className="mt-4 text-[16px] leading-[28px] text-body">
            {product.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button label="Request a Quote" href="/contact" variant="dark" />
            <Link
              href="/products"
              className="text-link text-ink hover:text-indigo"
            >
              ← All Products
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
