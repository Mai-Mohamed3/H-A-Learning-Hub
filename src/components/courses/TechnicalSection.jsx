import { motion } from "framer-motion";

import {
  FaDatabase,
  FaPython,
  FaChartLine,
  FaBrain,
  FaLaptopCode,
  FaUsers,
  FaFileExcel,
} from "react-icons/fa";
import {
  TbTable,
} from "react-icons/tb";

import "../../assets/Style/TechnicalSection.css";

const courses = [

  {
    icon:<FaDatabase />,
    title:"SQL",
    desc:
      "Build databases, write advanced queries, and analyze structured data professionally.",
  },

  {
    icon:<FaPython />,
    title:"Python",
    desc:
      "Create automation scripts, analyze datasets, and build real-world projects.",
  },

  {
    icon:<FaChartLine />,
    title:"Statistics",
    desc:
      "Understand data interpretation, probabilities, and business insights.",
  },

  {
    icon:<FaLaptopCode />,
    title:"Power BI",
    desc:
      "Design interactive dashboards and visualize business performance professionally.",
  },

  {
    icon:<FaBrain />,
    title:"Data Introduction",
    desc:
      "Understand the fundamentals of data analysis and modern data workflows.",
  },

  {
    icon:<FaUsers />,
    title:"MindSet",
    desc: 
    "Develop a growth mindset that encourages continuous learning, resilience, and adapting positively to challenges in personal and professional life."
  },
  {
    icon:<FaFileExcel />,
    title:"Excel",
    desc: 
    "Build strong Excel skills for data analysis, formulas, and organizing data efficiently for business and reporting purposes."
  },
  {
    icon:<TbTable />,
    title:"Tableau",
    desc: 
    "Learn Tableau to create interactive dashboards and data visualizations that turn complex data into clear, insightful visuals."
  },

];

const containerVariants = {

  hidden:{},

  visible:{
    transition:{
      staggerChildren:.15,
    },
  },

};

const cardVariants = {

  hidden:{
    opacity:0,
    y:50,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:.7,
    },
  },

};

const fadeUp = {

  hidden:{
    opacity:0,
    y:40,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:.8,
    },
  },

};

function TechnicalSection() {

  return (

    <section className="technical">

      <div className="glow"></div>

      {/* Header */}

      <motion.div
        className="technical__header"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="technical__subtitle">
          TECHNICAL TRACK
        </span>

        <h2 className="technical__title">

          Build Strong
          <span> Technical Skills</span>

        </h2>

        <p className="technical__description">

          Learn the most important tools and technologies
          required in the data and analytics industry.

        </p>

      </motion.div>

      <motion.div
        className="technical__grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        {courses.map((item,index) => (

          <motion.div
            key={index}

            className="technical__card"

            variants={cardVariants}

            whileHover={{
              y:-10,
              scale:1.02,
            }}
          >

            <div className="technical__icon">

              {item.icon}

            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

          </motion.div>

        ))}

      </motion.div>

    </section>

  );

}

export default TechnicalSection;