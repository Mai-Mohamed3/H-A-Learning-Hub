import { motion } from "framer-motion";

import "../../assets/Style/ContactSection.css";

const fadeUp = {

  hidden:{
    opacity:0,
    y:50,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:.8,
    },
  },

};

const buttonAnimation = {

  hidden:{
    opacity:0,
    y:40,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:.8,
      delay:.3,
    },
  },

};

function ContactSection() {

  return (

    <section
      className="contact"
      id="contact"
    >
      <div className="glow"></div>
      <motion.div
        className="contact__content"

        variants={fadeUp}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <span className="contact__subtitle">
          GET STARTED TODAY
        </span>

        <h2 className="contact__title">

          Ready To Start
          <span> Your Journey?</span>

        </h2>

        <p className="contact__description">

          Contact our team now and reserve your
          seat in the next batch before the offer ends.

        </p>

      </motion.div>

      <motion.div
        className="contact__buttons"

        variants={buttonAnimation}

        initial="hidden"

        whileInView="visible"

        viewport={{ once:true }}
      >

        <a
          href="https://wa.me/201044532533"

          target="_blank"

          rel="noreferrer"

          className="contact__whatsapp"
        >

          Contact Us

        </a>

        <button
          className="contact__book"

          onClick={() => {

            window.dispatchEvent(
              new Event("openBookingModal")
            );

          }}
        >

          Book Now

        </button>

      </motion.div>

    </section>

  );

}

export default ContactSection;