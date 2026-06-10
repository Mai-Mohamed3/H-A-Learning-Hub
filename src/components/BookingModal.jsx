import { useEffect, useState } from "react";

import axios from "axios";

import "../assets/Style/bookingModel.css";

function BookingModal() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const [showMessage, setShowMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });


  useEffect(() => {

    const handleOpenModal = () => {

      setOpen(true);

    };

    window.addEventListener(
      "openBookingModal",
      handleOpenModal
    );

    return () => {

      window.removeEventListener(
        "openBookingModal",
        handleOpenModal
      );

    };

  }, []);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwKL--bNK_0NyW0tNG42GLFifyZuN5nRWhjbbsHja9mI3BElkWwCuSegpNpPPOWr-7k/exec",
        formData,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );

      // Duplicate Email

      if (response.data.status === "exists") {

        setSuccess(false);

        setMessage(
          "You have already submitted a registration using this email."
        );

        setShowMessage(true);

        return;

      }

      setSuccess(true);

      setMessage(
        "Your request has been submitted successfully. Our team will contact you as soon as possible."
      );

      setShowMessage(true);

      setOpen(false);


      setFormData({
        name: "",
        phone: "",
        email: "",
        comment: "",
      });

    } catch (error) {

      console.log(error);

      setSuccess(false);

      setMessage(
        "Something went wrong while sending your request. Please try again later or contact us directly."
      );

      setShowMessage(true);

    }

  };

  return (

    <>
      {showMessage && (

        <div className="message-overlay">

          <div className="message-box">

            <div
              className={
                success
                ? "message-icon success"
                : "message-icon error"
              }
            >

              {success ? "✓" : "!"}

            </div>

            <h3>
              {success
                ? "Request Sent"
                : "Submission Failed"}
            </h3>

            <p>{message}</p>

            <button
              onClick={() => setShowMessage(false)}
            >
              OK
            </button>

          </div>

        </div>

      )}


      {open && (

        <div className="modal-overlay">

          <div className="booking-modal">

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h3>Reserve Your Seat</h3>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Any Comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
              />

              <button type="submit">
                Submit
              </button>

            </form>

          </div>

        </div>

      )}

    </>

  );

}

export default BookingModal;
