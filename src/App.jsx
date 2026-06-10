import {
  Routes,
  Route,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import ScrollTopButton from "./components/ScrollTopButton";

const Home =
lazy(() => import("./pages/Home"));

const Courses =
lazy(() => import("./pages/Courses"));

const Contact =
lazy(() => import("./pages/Contact"));

const Instructors =
lazy(() => import("./pages/Instructors"));

function App() {

  return (

    <>

      <ScrollToTop />

      <Navbar />

      <Suspense
        fallback={
          <div className="page-loader">
            Loading...
          </div>
        }
      >

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/courses"
            element={<Courses />}
          />

          <Route
            path="/instructors"
            element={<Instructors />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </Suspense>

      <BookingModal />

      <ScrollTopButton/>
      <Footer />

    </>

  );

}

export default App;