import { motion } from "framer-motion";

import "../../assets/Style/OfferSection.css";

function OfferSection() {

  return (

    <section className="offer-section">

      <div className="offer-section__glow"></div>

      <motion.div
        className="offer-section__left"

        initial={{
          opacity:0,
          x:-80,
        }}

        whileInView={{
          opacity:1,
          x:0,
        }}

        transition={{
          duration:.8,
        }}

        viewport={{
          once:true,
        }}
      >

        <span className="offer-section__subtitle">
          LIMITED TIME OFFER
        </span>

        <h2 className="offer-section__title">

          Unlock The Full
          <br />

          <span>Recorded Program</span>

        </h2>

      </motion.div>

      <motion.div
        className="offer-section__right"

        initial={{
          opacity:0,
          x:80,
        }}

        whileInView={{
          opacity:1,
          x:0,
        }}

        transition={{
          duration:.8,
        }}

        viewport={{
          once:true,
        }}
      >

        <p className="offer-section__text">

          Join now and get full access to all recorded
          technical sessions with a special limited-time
          discount created to help you start your journey
          in the data field professionally.

        </p>

        <div className="offer-section__price-box">

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

        <p className="offer-section__text">

          Don’t miss the chance to learn SQL,
          Python, Statistics, Power BI,
          and professional data analysis skills
          through our complete recorded program.

        </p>

        <motion.button
          className="offer-section__button"

          whileHover={{
            scale:1.05,
          }}

          whileTap={{
            scale:.95,
          }}

          onClick={() => {

            window.dispatchEvent(
              new Event("openBookingModal")
            );

          }}
        >

          Get The Offer Now

        </motion.button>

      </motion.div>

    </section>
  );

}

export default OfferSection;