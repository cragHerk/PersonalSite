import { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ShuffleHero from "./Components/Hero/ShuffleHero";
import ChipTabs from "./Components/Nav/ChipTabs";
import { BouncyCardsFeatures } from "./Components/BouncyCard/BouncyCardFeatures";
import LogoFooter from "./Components/Footer/LogoFooter";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { SuspenseSpinner } from "./Components/SuspenseSpinnner/SuspenseSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <SuspenseSpinner />
            ) : (
              <Suspense fallback={<SuspenseSpinner />}>
                <Home />
              </Suspense>
            )
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
