import { motion } from "framer-motion";

import "../../assets/Style/hero.css";

import {
  FaDatabase,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";

import {
  SiPython,
} from "react-icons/si";

import {
  BsBarChartFill,
} from "react-icons/bs";

const cards = [

  {
    id:1,
    icon:<BsBarChartFill />,
    title:"Power BI",
  },

  {
    id:2,
    icon:<FaDatabase />,
    title:"SQL",
  },

  {
    id:3,
    icon:<SiPython />,
    title:"Python",
  },

  {
    id:4,
    icon:<FaChartBar />,
    title:"Statistics",
  },

  {
    id:5,
    icon:<FaDatabase />,
    title:"Data Introduction",
  },

  {
    id:6,
    icon:<FaUsers />,
    title:"Soft Skills",
  },

];

const heroAnimation = {

  hidden:{
    opacity:0,
    y:50,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:1,
    },
  },

};

function Hero() {

  return (

    <section className="hero">

      <div className="glow"></div>
      <div className="hero__overlay"></div>
      <motion.div
        className="hero__content"

        variants={heroAnimation}

        initial="hidden"

        animate="visible"
      >

        <span className="hero__subtitle">
          ONLINE LEARNING
        </span>

        <h1 className="hero__title">

          Learn From
          <span> Top Instructors</span>

          <br />

          Around The World

        </h1>

        <p className="hero__description">

          Discover premium online courses and grow your skills
          with expert instructors in data analysis, AI,
          business intelligence, and career development.

        </p>

      </motion.div>

      {cards.map((card,index) => (

        <motion.div
          key={card.id}

          className={`hero__card hero__card--${index}`}

          animate={{

            y:[0,-18,0],

            x:[0,12,0],

            rotate:[0,2,-2,0],

          }}

          transition={{

            duration:7 + index,

            repeat:Infinity,

            ease:"easeInOut",

          }}

          whileHover={{

            scale:1.08,

            y:-12,

          }}
        >

          <div className="hero__icon">

            {card.icon}

          </div>

          <h3>
            {card.title}
          </h3>

        </motion.div>

      ))}

    </section>

  );

}

export default Hero;