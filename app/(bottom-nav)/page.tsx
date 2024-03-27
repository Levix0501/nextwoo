import Link from 'next/link';

export default async function Home() {
  return (
    <div className="p-4">
      <Link href="/about-nextwoo">About NextWoo</Link>
    </div>
  );
}
