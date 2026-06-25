import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Our Track Record"
          description="A selection of construction, supply, and infrastructure projects delivered across Nigerian states, drawn from our executed contracts."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 6) * 0.06}>
              <div className="group flex h-full gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c8932c]/40 hover:shadow-lg">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b2545] text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-[#c8932c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {project.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{project.client}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
