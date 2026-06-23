import Container from "./Container";
import { company, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0b2545] text-slate-300">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#c8932c] text-sm font-bold text-white">
              VG
            </span>
            <span className="text-base font-semibold text-white">
              {company.shortName}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300/80">
            {company.tagline}
          </p>
          <p className="mt-3 text-xs text-slate-400">{company.rcNumber}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <p className="text-sm text-slate-300/80">{company.contact.address}</p>
          <p className="mt-2 text-sm text-slate-300/80">{company.contact.website}</p>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
