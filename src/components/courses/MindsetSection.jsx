import { motion } from "framer-motion";

import "../../assets/Style/MindsetSection.css";

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
      delay:.2,
    },
  },

};

function MindsetSection() {

  return (

    <section className="mindset">
      <div className="glow"></div>

      <motion.div
        className="mindset__content"

        variants={fadeLeft}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="mindset__subtitle">
          MINDSET & CAREER
        </span>

        <h2 className="mindset__title">

          Beyond
          <span> Technical Skills</span>

        </h2>

      </motion.div>

      {/* Right */}

      <motion.div
        className="mindset__texts"

        variants={fadeRight}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <p>

          This course is not only about learning tools,
          but also about building the mindset needed
          to succeed in the real industry.

        </p>

        <p>

          Students will understand how technical skills
          connect directly with solving business problems,
          teamwork, communication, and real-world projects.

        </p>

        <p>

          We help learners think like professionals,
          not just course attendees.

        </p>

      </motion.div>

    </section>

  );

}

export default MindsetSection;