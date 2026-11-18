import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { GunChip, PageTitle } from "@/components/ui";
import { films } from "@/data/films";
import { gunsForFilm } from "@/data/guns";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "영화별 보기", description: `영화 ${films.length}편과 그 영화에 나온 권총. 더티 해리, 007, 다이 하드, 존 윅까지 작품에서 권총으로 찾아가 보세요.`, path: "/films" });

export default function FilmsPage() {
  const sorted = [...films].sort((a, b) => a.year - b.year || a.titleKo.localeCompare(b.titleKo, "ko"));
  const mid = Math.floor(sorted.length / 2);
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <PageTitle kicker="BY FILM" title="영화별 보기" sub={`이 사이트에 정리한 권총이 나오는 영화·드라마 ${films.length}편. 개봉 연도 순입니다.`} />
      <ul className="divide-y divide-line rounded-lg border border-line">
        {sorted.map((f, i) => (
          <li key={f.slug} className="px-4 py-3">
            {i === mid ? <div className="-mx-4 -mt-3 mb-3 border-b border-line px-4 py-2"><CoupangCard /></div> : null}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="w-12 font-serif text-gold tabular-nums">{f.year}</span>
              <Link href={`/films/${f.slug}`} className="font-semibold hover:text-gold">{f.titleKo}</Link>
              <span className="text-xs text-muted">{f.titleEn}{f.kind === "TV" ? " · TV" : ""}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1 pl-0 sm:pl-[3.75rem]">{gunsForFilm(f.slug).map((g) => <GunChip key={g.slug} slug={g.slug} />)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
