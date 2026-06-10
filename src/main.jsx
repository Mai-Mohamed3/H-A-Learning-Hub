
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/Style/global.css";
import {BrowserRouter,} from "react-router-dom";
import App from "./App";
import "./index.css";

const redirect =
sessionStorage.redirect;

delete sessionStorage.redirect;

if (redirect) {

  history.replaceState(
    null,
    null,
    redirect
  );

}

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter basename="/H-A-Learning-Hub">

      <App />

    </BrowserRouter>

  </React.StrictMode>

);