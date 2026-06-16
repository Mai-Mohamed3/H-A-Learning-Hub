import Team from "../components/Instractors/Team";
import PricingSection from "../components/Home/PricingSection";
import OfferSection from "../components/Home/OfferSection";
import ContactSection from "../components/Home/ContactSection";
 import ProjectsPricingSection from "../components/courses/ProjectsPricingSection";
 import { Helmet } from "react-helmet-async";



function ourTeam() {
  return (
    <>
     <Helmet>
        <title>Instractor | H&A Learning Hub</title>
      </Helmet>

      <Team/>
      <PricingSection/>
      <ProjectsPricingSection/>
      <OfferSection/>
      <ContactSection/>
    </>
  );
}

export default ourTeam;