import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { publishedArticles, getPublishedArticle } from "@/lib/journal";
import JournalArticle from "@/components/journal/JournalArticle";

export async function generateStaticParams() {
  // Published articles only — drafts are not routable.
  return publishedArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getPublishedArticle(slug);
  if (!a) return { title: "Artikel — YF ARCH" };
  const url = `https://www.yfarch.my.id/journal/${a.slug}`;
  const ogImage = `https://www.yfarch.my.id/images/${a.featuredImage}-1920.webp`;
  return {
    title: a.seoTitle,
    description: a.seoDescription,
    keywords: a.primaryKeyword,
    alternates: { canonical: url },
    openGraph: {
      title: a.seoTitle,
      description: a.seoDescription,
      url,
      type: "article",
      publishedTime: a.publishedAt,
      ...(a.updatedAt ? { modifiedTime: a.updatedAt } : {}),
      authors: ["YF ARCH"],
      section: a.category,
      tags: [a.primaryKeyword, a.category],
      images: [{ url: ogImage, width: 1920, height: 1080, alt: a.featuredImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.seoTitle,
      description: a.seoDescription,
      images: [ogImage],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getPublishedArticle(slug)) notFound();
  return <JournalArticle slug={slug} />;
}
