import Container from "./Container";
import MobileNav from "./MobileNav";
import { company, nav } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="relative flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0b2545] text-sm font-bold text-white">
            VG
          </span>
          <span className="text-lg font-semibold text-[#0b2545]">
            {company.shortName}
          </span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#0b2545]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-[#c8932c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#b27e1f] md:inline-block"
        >
          Get in Touch
        </a>
        <MobileNav />
      </Container>
    </header>
  );
}
