 import ContactSection from "../components/Home/ContactSection"
 import TeamSection from "../components/Home/TeamSection";
import PricingSection from "../components/Home/PricingSection";
import OfferSection from "../components/Home/OfferSection";
 import ProjectsPricingSection from "../components/courses/ProjectsPricingSection";
 import { Helmet } from "react-helmet-async";



function Contact() {

  return (
    <>
     <Helmet>
        <title>Contact | H&A Learning Hub</title>
      </Helmet>
      <ContactSection/>
      <PricingSection/>
      <ProjectsPricingSection/>
      <OfferSection/>
      <TeamSection/>
    </>

  );

}

export default Contact;