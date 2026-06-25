import Container from "@/components/Container";
import HeroSceneLoader from "@/components/HeroSceneLoader";
import { company } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b2545] text-white"
    >
      <div className="absolute inset-0">
        <HeroSceneLoader />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b2545] via-[#0b2545]/70 to-transparent" />
      <Container className="relative py-28 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c8932c]">
          {company.rcNumber} &middot; Est. {company.founded}
        </p>
        <h1 className="mt-4 max-w-xl text-4xl font-bold sm:text-5xl">
          {company.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300">
          {company.name} manages the entire infrastructure and building
          construction process from concept and design, through procurement
          and construction, to closeout and client occupancy.
        </p>
        <p className="mt-3 max-w-xl text-sm italic text-slate-400">
          &ldquo;{company.motto}&rdquo;
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-md bg-[#c8932c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b27e1f]"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Our Projects
          </a>
        </div>
        <p className="pointer-events-none mt-10 text-xs text-slate-400">
          Drag to explore the 3D scene
        </p>
      </Container>
    </section>
  );
}
