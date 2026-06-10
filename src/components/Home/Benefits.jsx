import { motion } from "framer-motion";

import { FaCheck } from "react-icons/fa";

import "../../assets/Style/Benefits.css";

const benefits = [

  "Create interactive Power BI dashboards",

  "Write professional SQL queries",

  "Analyze and clean real datasets using Python",

  "Understand statistics for data analysis",

  "Build reports and present insights professionally",

  "Work on real projects ready for your portfolio",

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

  hidden:{},

  visible:{
    transition:{
      staggerChildren:.15,
    },
  },

};

const itemAnimation = {

  hidden:{
    opacity:0,
    x:60,
  },

  visible:{
    opacity:1,
    x:0,

    transition:{
      duration:.7,
    },
  },

};

function Benefits() {

  return (

    <section className="benefits">

      <div className="glow"></div>

      <motion.div
        className="benefits__content"

        variants={fadeLeft}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="benefits__subtitle">
          YOUR RESULTS
        </span>

        <h2 className="benefits__title">

          What Will You Be Able
          <span> To Do?</span>

        </h2>

        <p className="benefits__description">

          By the end of this course, you will gain the practical
          skills, confidence, and professional mindset needed
          to work on real-world data projects and grow your
          career in the tech industry.

        </p>

      </motion.div>


      <motion.div
        className="benefits__list"

        variants={fadeRight}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        {benefits.map((item,index) => (

          <motion.div
            key={index}

            className="benefits__item"

            variants={itemAnimation}

            whileHover={{
              x:10,
              scale:1.02,
            }}
          >

            <div className="benefits__icon">

              <FaCheck />

            </div>

            <p>
              {item}
            </p>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );

}

export default Benefits;