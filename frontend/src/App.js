import React from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Header/Footer";
import Home from "./component/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
