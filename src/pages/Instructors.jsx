import Team from "../components/Instractors/Team";
import PricingSection from "../components/Home/PricingSection";
import OfferSection from "../components/Home/OfferSection";
import ContactSection from "../components/Home/ContactSection";
 import ProjectsPricingSection from "../components/courses/ProjectsPricingSection";


function ourTeam() {
  return (
    <>
      <Team/>
      <PricingSection/>
      <ProjectsPricingSection/>
      <OfferSection/>
      <ContactSection/>
    </>
  );
}

export default ourTeam;