import { motion } from "framer-motion";

import {
  FaDatabase,
  FaChartBar,
  FaPython,
  FaProjectDiagram,
  FaFileExcel,
  FaCheckCircle,
} from "react-icons/fa";

import {
  MdDashboard,
} from "react-icons/md";

import "../../assets/Style/ProjectsPricingSection.css";

const projects = [

  {
    icon:<FaFileExcel />,
    title:"Excel Sales & Operations",
    desc:
      "Advanced Excel project with sales analysis, operations tracking, KPIs, and business reporting.",
  },

  {
    icon:<MdDashboard />,
    title:"Power BI Banking",
    desc:
      "Interactive banking dashboard with financial KPIs, customer insights, and performance analysis.",
  },

  {
    icon:<MdDashboard />,
    title:"Power BI Risk Analysis",
    desc:
      "Risk management and loans analysis project with professional dashboards and reports.",
  },

  {
    icon:<MdDashboard />,
    title:"Power BI Manufacturing",
    desc:
      "Production and manufacturing analysis project with operational performance visualization.",
  },

  {
    icon:<FaPython />,
    title:"Python Descriptive Analysis",
    desc:
      "Analyze and clean datasets using Python with descriptive statistics and visualization.",
  },

  {
    icon:<FaDatabase />,
    title:"SQL Business Database",
    desc:
      "Database project with 30 real business questions and advanced SQL query solutions.",
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

function ProjectsPricingSection() {

  return (

    <section className="projectsPricing">

      <div className="glow"></div>

      <motion.div
        className="projectsPricing__header"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="projectsPricing__subtitle">
          REAL PROJECTS
        </span>

        <h2 className="projectsPricing__title">

          Professional
          <span> Business Projects</span>

        </h2>

        <p className="projectsPricing__description">

          Work on real-world projects designed to help
          you gain practical experience and build a
          strong professional portfolio.

        </p>

      </motion.div>

      <div className="projectsPricing__content">

        <motion.div
          className="projectsPricing__projects"

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{ once:true }}
        >

          {projects.map((item,index) => (

            <motion.div
              key={index}

              className="projectsPricing__card"

              variants={fadeUp}

              whileHover={{
                y:-8,
                scale:1.02,
              }}
            >

              <div className="projectsPricing__icon">

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
          className="projectsPricing__pricing"

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={{ once:true }}
        >

          <motion.div
            className="projectsPricing__pricingBox"

            whileHover={{
              y:-10,
            }}
          >

            <span className="projectsPricing__badge">
              SPECIAL OFFER
            </span>

            <h3>
              Full Projects Bundle
            </h3>

            <p>

              Get access to 6 professional projects, complete solutions, dashboards,
               and real business case studies across <span>18+ hours of comprehensive</span> , hands-on learning.

            </p>

            <div className="projectsPricing__includes">

              <div>

                <FaCheckCircle />

                <span>
                  6 Real Business Projects
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
                  SQL & Python Analysis
                </span>

              </div>

              <div>

                <FaCheckCircle />

                <span>
                  Professional Case Studies
                </span>

              </div>

            </div>

            <div className="projectsPricing__singlePrice">

              <h4>
                Each Project
              </h4>

              <h2>

                100
                <span> EGP</span>

              </h2>

            </div>

            <div className="projectsPricing__prices">

              <h4 className="projectsPricing__oldPrice">

                600 EGP

              </h4>

              <h2 className="projectsPricing__newPrice">

                400
                <span> EGP</span>

              </h2>

            </div>

            <motion.button
              className="projectsPricing__button"

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

              Get All Projects

            </motion.button>

          </motion.div>

        </motion.div>

      </div>

    </section>

  );

}

export default ProjectsPricingSection;