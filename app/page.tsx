import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import DocumentationGallery from "@/components/DocumentationGallery";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CoreCompetencies from "@/components/CoreCompetencies";
import EducationCard from "@/components/EducationCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatBar />
        <DocumentationGallery />
        <ExperienceTimeline />
        <CoreCompetencies />
        <EducationCard />
      </main>
      <Footer />
    </>
  );
}
