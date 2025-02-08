import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import Ncal from "./Ncal";
import Footer from "./components/FooterComp/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavBar } from "./components/NavBarComp/NavBar";
import Tcal from "./Tcal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import KeyCollect from "./KeyCollect";

import CalcProvider from "./context/CalcContext";

import KeyProvider from "./context/KeyContext";
import PlainComponent from "./PlainComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CalcProvider>
    <KeyProvider>
      <HashRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Ncal />} />
          <Route path="/signup" element={<Tcal />} />
          {/* <Route path="/projects" element={<KeyCollect />} /> */}
          <Route path="/Explore" element={<PlainComponent />} />
        </Routes>

        <Footer />
      </HashRouter>
    </KeyProvider>
  </CalcProvider>
);
