import { motion } from "framer-motion";

import {
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../../assets/Style/TeamSection.css";
import adham from "../../assets/Images/Adham.jpeg"
import fatmaa from "../../assets/Images/fatmaa.jpeg"
import hossam from "../../assets/Images/hossam.jpeg"

const teamMembers = [

  {
    id: 1,

    image:
      hossam,

    name: "Hossam El-Din Mohamed",

    role: "Senior Data Quality and Reporting",

    linkedin: "https://www.linkedin.com/in/hussamel-din/",
  },

  {
    id: 2,

    image:
      adham,

    name: "Adham Osama",

    role: "Senior Data Analyst | Risk Analyst",

    linkedin: "https://www.linkedin.com/in/adhamosama3/",
  },

  {
    id: 3,

    image:
      fatmaa,

    name: "Fatma Badr",

    role: "Sales & Reporting Analyst",

    linkedin: "https://www.linkedin.com/in/fatma-badr5/",
  },

];

function TeamSection() {

  return (

    <section className="team-section">

      <div className="glow"></div>

      <div className="team-section__content">

        <motion.div
          className="team-section__text"

          initial={{
            opacity: 0,
            x: -80,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <span className="team-section__subtitle">
            OUR TEAM
          </span>

          <h2 className="team-section__title">

            Learn From
            <span> Industry Experts</span>

          </h2>

          <p className="team-section__description">

            Our instructors and mentors bring real-world
            experience from the tech and data industry,
            helping students gain both practical skills
            and professional guidance throughout the journey.

          </p>

        </motion.div>

        <motion.div
          className="team-section__cards"

          initial={{
            opacity: 0,
            x: 80,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
          }}
        >

          <div className="cards-slider">

            {teamMembers.map((member) => (

              <motion.div
                key={member.id}

                className="team-card"

                whileHover={{
                  y: -10,
                }}

                transition={{
                  duration: 0.3,
                }}
              >

                <img
                  src={member.image}
                  alt={member.name}

                  className="team-card__image"
                />

                <div className="team-card__overlay">

                  <h3 className="team-card__name">
                    {member.name}
                  </h3>

                  <p className="team-card__role">
                    {member.role}
                  </p>

                  <a
                    href={member.linkedin}

                    target="_blank"

                    rel="noreferrer"

                    className="team-card__link"
                  >

                    <FaLinkedinIn />

                  </a>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

      <motion.div
        className="team-section__button"

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >

        <Link to="/instructors">
          Our Team
        </Link>

      </motion.div>

    </section>

  );

}

export default TeamSection;