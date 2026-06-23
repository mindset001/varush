import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-[#0b2545] py-16 text-white">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c8932c]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-slate-300">{description}</p>
        )}
      </Container>
    </section>
  );
}
