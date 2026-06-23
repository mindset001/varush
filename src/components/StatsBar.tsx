import Container from "./Container";
import Reveal from "./Reveal";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <div className="relative -mt-10 sm:-mt-12">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-[#0b2545]">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
