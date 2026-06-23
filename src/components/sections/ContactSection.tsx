import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="We would love to hear about your next project."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <Reveal delay={0.1} className="md:col-span-1">
            <h3 className="text-lg font-semibold text-[#0b2545]">Address</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {company.contact.address}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0b2545]">
              Website
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {company.contact.website}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0b2545]">
              Company
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {company.rcNumber}
              <br />
              Incorporated {company.founded}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
