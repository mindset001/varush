import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <LeadershipSection />
      <ProjectsSection />
      <ClientsSection />
      <ComplianceSection />
      <ContactSection />
    </>
  );
}
