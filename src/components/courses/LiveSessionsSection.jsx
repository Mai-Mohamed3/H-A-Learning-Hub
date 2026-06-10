import { motion } from "framer-motion";

import {
  FaRobot,
  FaBrain,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import "../../assets/Style/LiveSessionsSection.css";

const features = [

  {
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    desc:
      "Learn how AI is transforming the data analysis industry and how to use AI tools effectively in your career.",
  },

  {
    icon: <FaBrain />,
    title: "Advanced Data Mindset",
    desc:
      "Develop analytical thinking and understand how real companies solve business problems using data.",
  },

  {
    icon: <FaChartLine />,
    title: "Career Growth",
    desc:
      "Stand out in the market by gaining practical experience and professional-level skills.",
  },

  {
    icon: <FaUsers />,
    title: "Professional Soft Skills",
    desc:
      "Improve communication, teamwork, interview confidence, and personal branding.",
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

function LiveSessionsSection() {

  return (

    <section className="liveSessions">

      <div className="glow"></div>

      <motion.div
        className="liveSessions__header"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="liveSessions__subtitle">
          EXCLUSIVE LIVE EXPERIENCE
        </span>

        <h2 className="liveSessions__title">

          Only In
          <span> Live Sessions</span>

        </h2>

        <p className="liveSessions__description">

          Advanced AI learning, real-time interaction,
          career mentoring, and professional soft skills
          are available exclusively in the live program.

        </p>

      </motion.div>


      <div className="liveSessions__content">


        <motion.div
          className="liveSessions__features"

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{ once:true }}
        >

          {features.map((item,index) => (

            <motion.div
              key={index}

              className="liveSessions__card"

              variants={fadeUp}

              whileHover={{
                y:-8,
                scale:1.02,
              }}
            >

              <div className="liveSessions__icon">

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
          className="liveSessions__pricing"

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={{ once:true }}
        >

          <motion.div
            className="liveSessions__pricingBox"

            whileHover={{
              y:-10,
            }}
          >

            <span className="liveSessions__badge">
              PREMIUM PROGRAM
            </span>

            <h3>
              30 Live Sessions
            </h3>

            <p>

              A complete interactive program including
              technical skills, AI integration,
              career preparation, and advanced soft skills.

            </p>

            <div className="liveSessions__includes">

              <div>

                <FaCheckCircle />

                <span>
                  AI For Data Analysis
                </span>

              </div>

              <div>

                <FaCheckCircle />

                <span>
                  Portfolio & CV Building
                </span>

              </div>

              <div>

                <FaCheckCircle />

                <span>
                  LinkedIn Optimization
                </span>

              </div>

              <div>

                <FaCheckCircle />

                <span>
                  Interview Preparation
                </span>

              </div>

            </div>

            <h2 className="liveSessions__price">

              6000
              <span> EGP</span>

            </h2>

            <motion.button
              className="liveSessions__button"

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

export default LiveSessionsSection;