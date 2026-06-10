import {
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

/* import instructor1 from "../../assets/Images/instructor1.jpg";
import instructor2 from "../../assets/Images/instructor2.jpg";
import instructor3 from "../../assets/Images/instructor3.jpg"; */

import { motion } from "framer-motion";

import "../../assets/Style/Team.css";

const instructors = [

  {
    id:1,

    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a",

    name:"Ahmed Hassan",

    role:
      "Senior Data Analyst & Power BI Instructor",

    experience:
      "Ahmed has over 6 years of experience in data analysis, business intelligence, and dashboard development. He has trained hundreds of students to build professional Power BI dashboards and solve real business problems using data-driven strategies.",

    linkedin:"#",

    email:"mailto:ahmed@example.com",
  },

  {
    id:2,

    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",

    name:"Mariam Ali",

    role:
      "Python & SQL Instructor",

    experience:
      "Mariam specializes in Python programming, SQL databases, and data cleaning workflows. She focuses on helping students understand how technical skills connect directly with real-world projects and career opportunities.",

    linkedin:"#",

    email:"mailto:mariam@example.com",
  },

  {
    id:3,

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

    name:"Omar Khaled",

    role:
      "Career Coach & Soft Skills Mentor",

    experience:
      "Omar helps students build strong communication skills, optimize LinkedIn profiles, prepare professional CVs, and confidently handle technical interviews. His mentorship focuses on preparing students for the actual job market.",

    linkedin:"#",

    email:"mailto:omar@example.com",
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

            {/* IMAGE */}

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

                <motion.a
                  href={item.email}

                  whileHover={{
                    y:-5,
                    scale:1.08,
                  }}
                >

                  <FaEnvelope />

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