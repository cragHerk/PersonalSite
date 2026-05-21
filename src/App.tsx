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
  // Lighthouse na mobile: nie opóźniaj renderowania początkowego.
  // Loader zostanie wyświetlony tylko w bardzo krótkim momencie (1 klatka),
  // a właściwa zawartość i tak jest renderowana praktycznie natychmiast.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // zamiast setTimeout(300) -> usuń opóźnienie
    setIsLoading(false);
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
