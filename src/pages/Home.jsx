import Hero from "../components/Home/Hero";
import CourseFocus from "../components/Home/CourseFocus";
import Benefits from "../components/Home/Benefits";
import TeamSection from "../components/Home/TeamSection";
import PricingSection from "../components/Home/PricingSection";
import OfferSection from "../components/Home/OfferSection";
import ContactSection from "../components/Home/ContactSection";
import { Helmet } from "react-helmet-async";


function Home() {
  return (
    <>
     <Helmet>
        <title>Home | H&A Learning Hub</title>
      </Helmet>
      <Hero />
      <CourseFocus/>
      <Benefits/>
      <TeamSection/>
      <PricingSection/>
      <OfferSection/>
      <ContactSection/>
    </>
  );
}

export default Home;