import {
  FaDatabase,
  FaChartLine,
  FaPython,
  FaBrain,
  FaLaptopCode,
  FaUsers,
  FaRobot,
  FaFileAlt,
  FaLinkedin,
  FaUserTie,
  FaFileExcel,
} from "react-icons/fa";

import { motion } from "framer-motion";

import "../../assets/Style/PricingSection.css";

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

function PricingSection() {

  return (

    <section className="pricing-section">

      <div className="glow"></div>
      <motion.div
        className="pricing-section__header"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once:true,
        }}
      >

        <span className="pricing-section__subtitle">
          PRICING PLANS
        </span>

        <h2 className="pricing-section__title">

          Choose Your
          <span> Learning Path</span>

        </h2>

        <p className="pricing-section__description">

          Flexible learning options designed to help you
          build strong technical and professional skills
          with real-world practical experience.

        </p>

      </motion.div>
      <div className="pricing-section__cards">
        <motion.div
          className="pricing-card"

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once:true,
          }}

          whileHover={{
            y:-10,
          }}
        >

          <div className="pricing-card__top">

            <h3>
              Recorded Sessions
            </h3>

            <p>
              Learn anytime with premium recorded content.
            </p>

          </div>

          <div className="pricing-card__items pricing-card__items recorded">

            <div className="pricing-item">
              <FaDatabase />
              <span>SQL</span>
              <strong>1250 EGP</strong>
            </div>

            <div className="pricing-item">
              <FaPython />
              <span>Python</span>
              <strong>1250 EGP</strong>
            </div>

            <div className="pricing-item">
              <FaLaptopCode />
              <span>Power BI</span>
              <strong>1250 EGP</strong>
            </div>

            <div className="pricing-item">
              <FaFileExcel />
              <span>Excel</span>
              <strong>1250 EGP</strong>
            </div>

            <div className="pricing-item">
              <FaLaptopCode />
              <span>
                18+ Hours Of Recorded
                Real Projects Training
              </span>
            </div>

          </div>

          <div className="pricing-card__price price-record">
            <span className="offer-section__old-price">
              5000 EGP
            </span>

            <span className="offer-section__arrow">
              →
            </span>

            <span className="offer-section__new-price">
              3500 EGP
            </span>
          </div>
        </motion.div>

        <motion.div
          className="pricing-card pricing-card--featured"

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once:true,
          }}

          whileHover={{
            y:-10,
          }}
        >

          <div className="pricing-card__badge">
            MOST POPULAR
          </div>

          <div className="pricing-card__top">

            <h3>
              Live Sessions Program
            </h3>

            <p>
              Interactive live sessions with mentors,
              projects, and career preparation.
            </p>

          </div>

          <div className="pricing-card__items">

            <div className="pricing-item">
              <FaDatabase />
              <span>SQL</span>
            </div>

            <div className="pricing-item">
              <FaPython />
              <span>Python</span>
            </div>

            <div className="pricing-item">
              <FaChartLine />
              <span>Statistics</span>
            </div>

            <div className="pricing-item">
              <FaLaptopCode />
              <span>Power BI</span>
            </div>

            <div className="pricing-item">
              <FaRobot />
              <span>Artificial Intelligence</span>
            </div>

            <div className="pricing-item">
              <FaFileAlt />
              <span>CV Building & Interview Preparation</span>
            </div>

            <div className="pricing-item">
              <FaLinkedin />
              <span>LinkedIn Optimization</span>
            </div>

            <div className="pricing-item">
              <FaFileExcel />
              <span>Excel</span>
            </div>

            <div className="pricing-item">
              <FaLaptopCode />
              <span>
                18+ Hours Of Recorded
                Real Projects Training
              </span>
            </div>

          </div>

          <div className="pricing-card__price">

            <h4 className="offer-section__new-price">
              6000 EGP
            </h4>

          </div>

        </motion.div>

      </div>

    </section>
  );

}

export default PricingSection;