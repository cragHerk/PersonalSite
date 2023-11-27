import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ShuffleHero from "./Components/Hero/ShuffleHero";
import ChipTabs from "./Components/Nav/ChipTabs";
import { BouncyCardsFeatures } from "./Components/BouncyCard/BouncyCardFeatures";

import LogoFooter from "./Components/Footer/LogoFooter";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  return (
    <>
      <ChipTabs />
      <ShuffleHero />
      <Portfolio />
      <BouncyCardsFeatures />
      <Contact />
      <LogoFooter />
    </>
  );
};

export default App;
