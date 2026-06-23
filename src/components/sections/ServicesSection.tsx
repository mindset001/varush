import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  DraftingIcon,
  CraneIcon,
  ChecklistIcon,
  SupplyIcon,
} from "@/components/icons";
import { services } from "@/lib/data";

const ICONS = {
  drafting: DraftingIcon,
  crane: CraneIcon,
  checklist: ChecklistIcon,
  supply: SupplyIcon,
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What We Do"
          description="From planning and design to procurement, construction, and occupancy, we manage every phase of a project."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0b2545] text-[#c8932c] transition-colors duration-300 group-hover:bg-[#c8932c] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#0b2545]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
