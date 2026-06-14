import { motion } from "framer-motion";

import {
  FaDatabase,
  FaChartBar,
  FaCode,
  FaPython,
  FaCheckCircle,
  FaFileExcel,
} from "react-icons/fa";

import "../../assets/Style/RecordedSessionsSection.css";

const recordedFeatures = [

  {
    icon:<FaDatabase />,
    title:"SQL",
    desc:
      "Learn how to manage, query, and analyze databases professionally using SQL.",
  },

  {
    icon:<FaPython />,
    title:"Python",
    desc:
      "Build strong programming fundamentals for data analysis and automation.",
  },

  {
    icon:<FaFileExcel />,
    title:"Excel",
    desc:
     "Learn Excel basics for organizing data, simple calculations, and creating easy spreadsheets."
  },

  {
    icon:<FaCode />,
    title:"Power BI",
    desc:
      "Create interactive dashboards and professional business reports.",
  },

];

const fadeUp = {

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

const staggerContainer = {

  hidden:{},

  visible:{
    transition:{
      staggerChildren:.18,
    },
  },

};

function RecordedSessionsSection() {

  return (

    <section className="recordedSessions">

      <div className="glow"></div>

      <motion.div
        className="recordedSessions__header"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="recordedSessions__subtitle">
          RECORDED PROGRAM
        </span>

        <h2 className="recordedSessions__title">

          Only In
          <span> Recorded Sessions</span>

        </h2>

        <p className="recordedSessions__description">

          Get lifetime access to all recorded sessions
          with a special discounted offer available
          only for the recorded program.

        </p>

      </motion.div>

      <div className="recordedSessions__content">
        <motion.div
          className="recordedSessions__features"

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{ once:true }}
        >

          {recordedFeatures.map((item,index) => (

            <motion.div
              key={index}

              className="recordedSessions__card"

              variants={fadeUp}

              whileHover={{
                y:-8,
                scale:1.02,
              }}
            >

              <div className="recordedSessions__icon">

                {item.icon}

              </div>

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

        <motion.div
          className="recordedSessions__pricing"

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={{ once:true }}
        >

          <motion.div
            className="recordedSessions__pricingBox"

            whileHover={{
              y:-10,
            }}
          >

            <span className="recordedSessions__badge">
              LIMITED OFFER
            </span>

            <h3>
              Full Recorded Program
            </h3>

            <p>

              Access all technical recorded sessions
              anytime with complete flexibility and
              lifetime availability.

            </p>

            <div className="recordedSessions__includes">

              <div>

                <FaCheckCircle />

                <span>
                  SQL Fundamentals
                </span>

              </div>

              <div>

                <FaCheckCircle />

                <span>
                  Power BI Dashboards
                </span>

              </div>

              <div>

                <FaCheckCircle />

                <span>
                  Python For Data Analysis
                </span>

              </div>

              <div>

                <FaCheckCircle />

                <span>
                  Excel
                </span>

              </div>

            </div>

            <div className="recordedSessions__prices">

              <h4 className="recordedSessions__oldPrice">

                5000 EGP

              </h4>

              <h2 className="recordedSessions__newPrice">

                3500
                <span> EGP</span>

              </h2>

            </div>

            <motion.button
              className="recordedSessions__button"

              whileHover={{
                scale:1.05,
              }}

              whileTap={{
                scale:.96,
              }}

              onClick={() => {

                window.dispatchEvent(
                  new Event("openBookingModal")
                );

              }}
            >

              Join Now

            </motion.button>

          </motion.div>

        </motion.div>

      </div>

    </section>

  );

}

export default RecordedSessionsSection;