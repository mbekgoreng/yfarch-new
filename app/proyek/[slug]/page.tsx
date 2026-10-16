import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import ProjectDetail from "@/components/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: "Project — YF ARCH" };
  const description = p.tagline ?? p.narrative.slice(0, 160);
  const url = `https://www.yfarch.my.id/proyek/${p.slug}`;
  const ogImage = `/images/${p.hero}-1920.webp`;
  return {
    title: `${p.name} — YF ARCH`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.name} — YF ARCH`,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} — YF ARCH`,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <Nav />
      <main>
        <ProjectDetail project={p} />
      </main>
      <Contact />
    </>
  );
}
