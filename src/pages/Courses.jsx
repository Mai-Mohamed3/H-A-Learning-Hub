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

function Courses() {

  return (

    <>
      <TechnicalSection />
      <MindsetSection />
      <SoftSkillsSection />
      <LiveSessionsSection/>
      <RecordedSessionsSection/>
      <ContactSection/>
    </>

  );

}

export default Courses;