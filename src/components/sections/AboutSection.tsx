import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="About Us"
          title={company.name}
          description={`${company.rcNumber} · Incorporated ${company.founded}`}
        />

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <p className="leading-relaxed text-slate-600">{company.about}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-[#0b2545]">
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                {company.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-[#0b2545]">
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                {company.vision}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
