import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { directors, management } from "@/lib/data";

export default function LeadershipSection() {
  return (
    <section id="team" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="Leadership & Management"
          description="A veteran team of construction professionals with backgrounds in architecture, engineering, construction and IT."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {directors.map((director, index) => (
            <Reveal key={director.name} delay={index * 0.1}>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#c8932c]">
                  {director.role}
                </p>
                <p className="mt-1 text-lg font-semibold text-[#0b2545]">
                  {director.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0b2545] text-white">
              <tr>
                <th className="px-5 py-3 font-semibold">Designation</th>
                <th className="px-5 py-3 font-semibold">Name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {management.map((person) => (
                <tr key={person.role}>
                  <td className="px-5 py-3 text-slate-600">{person.role}</td>
                  <td className="px-5 py-3 font-medium text-[#0b2545]">
                    {person.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
