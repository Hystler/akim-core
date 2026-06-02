import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="font-semibold text-frost transition hover:text-electric-cyan">
            Аким Коваленко
          </Link>
          <p className="mt-2">Digital Builder / AI Systems / Business Analysis / Event Production</p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href="mailto:hello@akimkovalenko.ru" className="transition hover:text-frost">
            hello@akimkovalenko.ru
          </a>
          <p>© {year}</p>
        </div>
      </div>
    </footer>
  );
}
