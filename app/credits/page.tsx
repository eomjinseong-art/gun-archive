import { NadooAd } from "@/components/NadooAd";
import { PageTitle } from "@/components/ui";
import { guns } from "@/data/guns";
import { gunImage } from "@/lib/gun-images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "출처", description: "건 아카이브가 참고한 자료와 권총 사진의 작가·라이선스.", path: "/credits" });

const EXTRA = [
  { label: "IMFDb — Internet Movie Firearms Database", url: "https://www.imfdb.org/" },
  { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/" },
];

export default function CreditsPage() {
  const sources = new Map<string, string>();
  for (const g of guns) for (const s of g.sources) sources.set(s.url, s.label);
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageTitle title="출처" sub="영화 속 등장 기록은 IMFDb(인터넷 영화 총기 데이터베이스)의 권총별·영화별 페이지를, 제조사·연도 같은 기본 정보는 위키백과를 기준으로 했습니다. 설명은 한국어로 새로 썼습니다." />
      <section>
        <h2 className="font-serif text-xl">참고 자료</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
          {[...EXTRA.map((e) => [e.url, e.label] as const), ...Array.from(sources.entries())].map(([url, label]) => (
            <li key={url}><a className="underline" href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>
          ))}
        </ul>
      </section>
      <NadooAd inline />
      <section className="mt-8">
        <h2 className="font-serif text-xl">권총 사진</h2>
        <p className="mt-2 text-sm leading-7 text-muted">포스터와 영화 스틸은 쓰지 않습니다. 권총 사진은 위키미디어 커먼스에 자유 라이선스(CC BY, CC BY-SA, CC0, 퍼블릭 도메인)로 올라온 같은 모델·계열 사진이며, 영화에 쓰인 소품이 아닙니다. 사이트에 맞게 크기만 줄였습니다.</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs leading-6 text-muted">
          {guns.map((g) => {
            const img = gunImage(g.slug);
            if (!img) return null;
            return (
              <li key={g.slug}>
                {g.nameKo}: <a className="underline" href={img.pageUrl} target="_blank" rel="noopener noreferrer">{img.title.replace(/^File:/, "")}</a> — {img.author || "작가 미상"},{" "}
                {img.licenseUrl ? <a className="underline" href={img.licenseUrl} target="_blank" rel="noopener noreferrer">{img.license}</a> : img.license}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
