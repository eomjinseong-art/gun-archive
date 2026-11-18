import { gunImage } from "@/lib/gun-images";

/** 위키미디어 커먼스의 같은 모델(또는 같은 계열) 사진. 영화에 쓰인 실제 소품은 아닙니다. */
export function GunPhoto({ slug, alt, variant = "card" }: { slug: string; alt: string; variant?: "card" | "hero" }) {
  const img = gunImage(slug);
  if (!img) return null;
  if (variant === "card") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={img.src} alt={alt} width={img.w} height={img.h} loading="lazy" className="aspect-[16/10] w-full rounded-md border border-line bg-white object-contain" />
    );
  }
  return (
    <figure className="mt-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.src} alt={alt} width={img.w} height={img.h} className="max-h-[480px] w-full rounded-lg border border-line bg-white object-contain" />
      <figcaption className="mt-2 text-[11px] leading-5 text-muted">
        같은 모델·계열의 참고 사진이며 영화에 쓰인 소품은 아닙니다. 사진{" "}
        <a className="underline" href={img.pageUrl} target="_blank" rel="noopener noreferrer">{img.author || "Wikimedia Commons"}</a>
        {" · "}
        {img.licenseUrl ? (
          <a className="underline" href={img.licenseUrl} target="_blank" rel="noopener noreferrer">{img.license}</a>
        ) : (
          img.license
        )}
        {" · Wikimedia Commons"}
      </figcaption>
    </figure>
  );
}
