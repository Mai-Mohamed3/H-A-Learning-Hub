import TechnicalSection
from "../components/courses/TechnicalSection";
import MindsetSection
from "../components/courses/MindsetSection";
import SoftSkillsSection
from "../components/courses/SoftSkillsSection";
import LiveSessionsSection
 from "../components/courses/LiveSessionsSection";
import RecordedSessionsSection
 from "../components/courses/RecordedSessionsSection";
 import ContactSection from "../components/Home/ContactSection"
 import ProjectsSection from "../components/courses/ProjectsSection";
 import ProjectsPricingSection from "../components/courses/ProjectsPricingSection";
 import { Helmet } from "react-helmet-async";


function Courses() {

  return (

    <>
     <Helmet>
        <title>Courses | H&A Learning Hub</title>
      </Helmet>
      <TechnicalSection />
      <MindsetSection />
      <SoftSkillsSection />
      <ProjectsSection/>
      <LiveSessionsSection/>
      <RecordedSessionsSection/>
      <ProjectsPricingSection/>
      <ContactSection/>
    </>

  );

}

export default Courses;