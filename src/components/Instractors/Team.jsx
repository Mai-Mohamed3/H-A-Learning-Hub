import {
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import adham from "../../assets/Images/Adham.jpeg"
import fatmaa from "../../assets/Images/fatmaa.jpeg"
import hossam from "../../assets/Images/hossam.jpeg"

import { motion } from "framer-motion";

import "../../assets/Style/Team.css";

const instructors = [

  {
    id:1,

    image:
      hossam,

    name:"Hossam El-Din Mohamed",

    role:
      "Senior Data Quality and Reporting",

    experience:
      "Senior Data Quality & Reporting Analyst at Mubasher Financial Services, specializing in financial data analysis, reporting, and business intelligence. I am also a Certified Instructor at the Information Technology Institute (ITI), where I deliver professional training programs in Data Analysis and Business Intelligence, and at the Digital Egypt Pioneers Initiative (DEPI), where I mentor and prepare the next generation of data professionals. Currently, I am pursuing a Master’s Degree in Data Analytics with a focus on advanced analytical methodologies and data-driven decision-making. In addition, I am a Microsoft Certified Trainer through the Training of Trainers (ToT) program. I have strong experience in data analysis, data quality management, reporting automation, dashboard development, and data storytelling, and I am skilled in Power BI, SQL, Python, Excel, and modern Business Intelligence solutions. I also work as a Business Partner alongside Adham Osama under the leadership of Dr. Alaa Essam, contributing to training, consulting, and data-driven business initiatives. I am passionate about simplifying complex analytical concepts and helping individuals and organizations unlock the value of data.",

    linkedin: "https://www.linkedin.com/in/hussamel-din/",


  },

  {
    id:2,

    image:
      fatmaa,

    name:"Fatma Badr",

    role:
      "Sales Analyst | Data Analyst | Instructor",

    experience:
      " Experienced Sales Analyst with a strong background in sales performance analysis, reporting, and business insights. I currently work as a Data Analyst at NeuroTech, contributing to data-driven decision-making through analytics, reporting, and dashboard development. I also work as an instructor and mentor, helping aspiring analysts build practical skills in Data Analysis and Business Intelligence. My expertise is focused on sales analytics, customer behavior analysis, KPI tracking, and performance measurement, with strong ability to transform sales and operational data into actionable insights that support business growth and strategic planning. I have experience in building interactive dashboards and reports using Power BI, Excel, SQL, and other analytical tools. I am passionate about simplifying data concepts and empowering professionals to leverage data effectively in business environments.",

    linkedin: "https://www.linkedin.com/in/fatma-badr5/",

  },

  {
    id:3,

    image:
      adham,

    name:"Adham Osama",

    role:
      "Risk MIS Lead | Senior Data Analyst | Instructor",

    experience:
      "Risk MIS Lead with extensive experience in Risk Management, Financial Analytics, and Business Intelligence. I also serve as an Instructor at the Digital Egypt Pioneers Initiative (DEPI), where I mentor aspiring data professionals in Data Analysis and Business Intelligence, in addition to delivering professional training programs and workshops through multiple private training companies and educational platforms. I am a Microsoft Certified Trainer through the Training of Trainers (ToT) program, with a strong focus on developing analytical thinking and practical business skills. My expertise lies in transforming complex datasets into actionable insights that support executive and strategic decision-making, as well as building reporting systems, executive dashboards, and risk monitoring solutions using Power BI, SQL, and Python. I am also the creator of “The Analyst's Mindset” framework, designed to help analysts develop critical thinking and problem-solving skills beyond technical tools.",
    
      linkedin: "https://www.linkedin.com/in/adhamosama3/",

  },

];

function Team() {

  return (

    <section className="team-page">

      <div className="team-hero">

        <div className="team-overlay"></div>

        <motion.div
          className="team-hero-content"

          initial={{
            opacity:0,
            y:60,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:.8,
          }}
        >

          <span>
            OUR PROFESSIONAL TEAM
          </span>

          <h1>
            Meet Our
            <span> Experts</span>
          </h1>

          <p>
            Learn from experienced instructors
            and industry professionals dedicated
            to helping you grow your technical
            and career skills professionally.
          </p>

        </motion.div>

      </div>

      <div className="instructors-wrapper">

        {instructors.map((item,index) => (

          <motion.div
            key={item.id}

            className={`instructor-section ${
              index % 2 !== 0
              ? "reverse"
              : ""
            }`}

            initial={{
              opacity:0,
              y:80,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              duration:.8,
              delay:index * .2,
            }}
          >

            <motion.div
              className="instructor-image"

              whileHover={{
                scale:1.03,
              }}

              transition={{
                duration:.4,
              }}
            >

              <img
                src={item.image}
                alt={item.name}
              />

            </motion.div>

            <div className="instructor-content">

              <span>
                PROFESSIONAL INSTRUCTOR
              </span>

              <h2>
                {item.name}
              </h2>

              <h4>
                {item.role}
              </h4>

              <p>
                {item.experience}
              </p>

              <div className="instructor-socials">

                <motion.a
                  href={item.linkedin}

                  target="_blank"

                  rel="noreferrer"

                  whileHover={{
                    y:-5,
                    scale:1.08,
                  }}
                >

                  <FaLinkedinIn />

                </motion.a>


              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Team;