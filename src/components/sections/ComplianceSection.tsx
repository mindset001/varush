import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { certifications } from "@/lib/data";

export default function ComplianceSection() {
  return (
    <section id="compliance" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Compliance"
          title="Fully Registered & Compliant"
          description="Varush Global Services Limited maintains current statutory registrations and clearances across all regulatory bodies."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={(index % 6) * 0.06}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b2545]/10 text-xs font-bold text-[#0b2545]">
                  ✓
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#0b2545]">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {cert.issuer}
                </p>
                <p className="mt-3 text-sm text-slate-600">{cert.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
