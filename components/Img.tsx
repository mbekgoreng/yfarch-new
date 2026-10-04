/* Shared responsive image. Every asset in public/images ships as a
   960w / 1920w WebP pair, so the srcSet is written by hand here rather
   than relying on a Next.js image loader. */

export default function Img({
  src,
  alt,
  className = "",
  sizes = "100vw",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={`/images/${src}-1920.webp`}
      srcSet={`/images/${src}-960.webp 960w, /images/${src}-1920.webp 1920w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}
