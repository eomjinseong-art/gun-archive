import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { GunPhoto } from "@/components/GunPhoto";
import { PageTitle } from "@/components/ui";
import { filmBySlug } from "@/data/films";
import { gunBySlug } from "@/data/guns";
import { scenes } from "@/data/scenes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "명장면", description: "더티 해리의 “운이 좋다고 생각하나?”, 본드의 발터 PPK, 다이 하드의 마지막 대면, 존 윅의 소믈리에까지 권총이 기억에 남는 영화 장면.", path: "/scenes" });

export default function ScenesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageTitle kicker="SCENES" title="명장면" sub={`권총이 오래 기억에 남는 장면 ${scenes.length}개. 영화 속 장면과 그 뒤 이야기만 적었습니다.`} />
      <ol className="space-y-6">
        {scenes.map((s, i) => {
          const f = filmBySlug(s.film);
          const g = gunBySlug(s.gun);
          return (
            <li key={s.slug} id={s.slug} className="scroll-mt-24">
              {i === 6 ? <CoupangCard /> : null}
              <div className="grid gap-4 rounded-xl border border-line bg-card p-5 sm:grid-cols-[200px_1fr]">
                <GunPhoto slug={s.gun} alt={`${g?.nameEn} (참고 사진)`} />
                <div>
                  <p className="text-xs text-blood">{f?.titleKo} ({f?.year})</p>
                  <h2 className="mt-1 font-serif text-xl text-gold">{s.title}</h2>
                  {s.quote ? <p className="mt-2 border-l-2 border-gold/60 pl-3 text-sm italic text-paper/90">{s.quote}</p> : null}
                  <p className="mt-2 text-sm leading-7 text-paper/90">{s.text}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <Link href={`/guns/${s.gun}`} className="rounded-full border border-gold/50 px-3 py-1 text-gold hover:bg-gold/10">{g?.nameKo} →</Link>
                    <Link href={`/films/${s.film}`} className="rounded-full border border-line px-3 py-1 text-muted hover:text-gold">{f?.titleKo} 속 권총</Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
