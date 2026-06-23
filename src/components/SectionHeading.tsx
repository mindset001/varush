import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#c8932c]">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-[#0b2545]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
