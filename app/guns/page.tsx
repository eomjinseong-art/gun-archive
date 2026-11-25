import { NadooAd } from "@/components/NadooAd";
import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { GunList } from "@/components/GunList";
import { PageTitle } from "@/components/ui";
import { COUNTRIES, guns } from "@/data/guns";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "권총 목록", description: `영화에 자주 나온 권총 ${guns.length}종. 자동권총·리볼버, 만든 나라로 골라 보고 역사와 특징, 등장 영화를 확인하세요.`, path: "/guns" });

export default function GunsPage() {
  const items = guns.map((g) => ({ slug: g.slug, nameKo: g.nameKo, nameEn: g.nameEn, type: g.type, country: g.country, year: g.year, tagline: g.tagline, films: new Set(g.appearances.map((a) => a.film)).size }));
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <PageTitle kicker="HANDGUNS" title="권총 목록" sub={`권총만 다룹니다. 소총·산탄총은 빼고, 영화에 자주 나온 ${guns.length}종을 골랐습니다. 영화 속 등장 기록은 IMFDb(인터넷 영화 총기 데이터베이스)로 확인한 것만 적었습니다.`} />
      <GunList items={items} countries={COUNTRIES} />
      <NadooAd inline />
      <CoupangCard />
      <section className="rounded-xl border border-line bg-card p-5 text-sm leading-7 text-muted">
        <h2 className="font-serif text-lg text-paper">소품총은 따로 다루지 않습니다</h2>
        <p className="mt-2">스타워즈 한 솔로의 블래스터, 로보캅의 ‘오토 9’처럼 실제 권총을 꾸민 영화 소품은 별도 항목으로 만들지 않고, 바탕이 된 권총 항목(<Link href="/guns/mauser-c96" className="underline">마우저 C96</Link>, <Link href="/guns/beretta-93r" className="underline">베레타 93R</Link>)에 적었습니다. 블레이드 러너의 블래스터처럼 여러 총을 섞어 만든 소품도 다루지 않습니다.</p>
        <p className="mt-2">사진은 위키미디어 커먼스에 자유 라이선스로 올라온 같은 모델·계열 사진이며, 영화에 쓰인 소품이 아닙니다.</p>
      </section>
    </div>
  );
}
