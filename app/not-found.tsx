import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-gold">찾는 페이지가 없습니다</h1>
      <p className="mt-3 text-muted">주소가 바뀌었거나 아직 정리하지 않은 권총입니다.</p>
      <Link href="/" className="mt-6 inline-block underline hover:text-gold">홈으로</Link>
    </div>
  );
}
