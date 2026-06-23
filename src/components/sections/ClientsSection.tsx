import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { clients } from "@/lib/data";

export default function ClientsSection() {
  return (
    <section id="clients" className="bg-[#0b2545] py-24 text-white">
      <Container>
        <SectionHeading
          eyebrow="Clients"
          title="Who We Work With"
          description="Government agencies and private organizations that have trusted us to deliver."
          light
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {clients.map((client, index) => (
            <Reveal key={client} delay={index * 0.08}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200 backdrop-blur-sm transition-colors duration-300 hover:border-[#c8932c]/50 hover:bg-white/10">
                {client}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
