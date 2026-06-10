import { motion } from "framer-motion";

import {
  FaCheckCircle,
} from "react-icons/fa";

import "../../assets/Style/SoftSkillsSection.css";

const skills = [

  "Professional Portfolio Building",

  "CV Creation & Optimization",

  "LinkedIn Profile Enhancement",

  "Interview Preparation",

  "Communication Skills",

  "Personal Branding",

];

/* Animations */

const fadeLeft = {

  hidden:{
    opacity:0,
    x:-70,
  },

  visible:{
    opacity:1,
    x:0,

    transition:{
      duration:.8,
    },
  },

};

const fadeRight = {

  hidden:{
    opacity:0,
    x:70,
  },

  visible:{
    opacity:1,
    x:0,

    transition:{
      duration:.8,
      staggerChildren:.15,
    },
  },

};

const itemAnimation = {

  hidden:{
    opacity:0,
    y:30,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:.6,
    },
  },

};

function SoftSkillsSection() {

  return (

    <section className="softSkills">

      <div className="glow"></div>


      <motion.div
        className="softSkills__content"

        variants={fadeLeft}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="softSkills__subtitle">
          SOFT SKILLS
        </span>

        <h2 className="softSkills__title">

          Prepare For
          <span> The Job Market</span>

        </h2>

        <p className="softSkills__description">

          Gain the professional skills needed to present
          yourself confidently and increase your chances
          of landing opportunities in the tech industry.

        </p>

      </motion.div>


      <motion.div
        className="softSkills__skills"

        variants={fadeRight}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        {skills.map((item,index) => (

          <motion.div
            key={index}

            className="softSkills__item"

            variants={itemAnimation}

            whileHover={{
              x:8,
              scale:1.02,
            }}
          >

            <div className="softSkills__icon">

              <FaCheckCircle />

            </div>

            <span>
              {item}
            </span>

          </motion.div>

        ))}

      </motion.div>

    </section>

  );

}

export default SoftSkillsSection;