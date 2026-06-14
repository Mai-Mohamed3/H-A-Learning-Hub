import { motion } from "framer-motion";

import {
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

import "../../assets/Style/CourseFocus.css";

const fadeUp = {

  hidden:{
    opacity:0,
    y:50,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:.8,
    },
  },

};

const cardsContainer = {

  hidden:{},

  visible:{
    transition:{
      staggerChildren:.2,
    },
  },

};
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "files/course-agenda.pdf";
  link.download = "course-agenda.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const cardAnimation = {

  hidden:{
    opacity:0,
    y:60,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:.8,
    },
  },

};

function CourseFocus() {

  return (

    <section className="courseFocus">

      <div className="courseFocus__glow"></div>

      <motion.div
        className="courseFocus__header"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <h2 className="courseFocus__title">

          What Will You
          <span> Focus On?</span>

        </h2>

        <p className="courseFocus__description">

          This course is designed to build both the professional mindset
          and the technical skills required to become industry-ready
          in the modern data field.

        </p>

      </motion.div>

      <motion.div
        className="courseFocus__cards"

        variants={cardsContainer}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <motion.div
          className="courseFocus__card"

          variants={cardAnimation}

          whileHover={{
            y:-10,
            scale:1.02,
          }}
        >

          <div className="courseFocus__icon">

            <FaBrain />

          </div>

          <h3>
            Mindset & Career Growth
          </h3>

          <p>

            Learn how to think like a professional analyst,
            solve real-world problems, communicate insights,
            and develop the confidence needed for teamwork,
            freelancing, and career growth.

          </p>

        </motion.div>

        <motion.div
          className="courseFocus__card"

          variants={cardAnimation}

          whileHover={{
            y:-10,
            scale:1.02,
          }}
        >

          <div className="courseFocus__icon">

            <FaLaptopCode />

          </div>

          <h3>
            Technical Skills & Tools
          </h3>

          <p>

            Master SQL, Python, Statistics, Excel, Power BI,
            dashboards, data visualization, reporting,
            and practical workflows used in real companies.

          </p>

        </motion.div>

      </motion.div>
      
      <motion.div
        className="courseFocus__button"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

    <button onClick={handleDownload} className="courseFocus__download">
      Download Course Agenda
    </button>

      </motion.div>

    </section>
  );

}

export default CourseFocus;