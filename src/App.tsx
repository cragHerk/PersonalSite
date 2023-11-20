import "./App.css";
import ShuffleHero from "./Components/Hero/ShuffleHero";
import ChipTabs from "./Components/Nav/ChipTabs";
import { BouncyCardsFeatures } from "./Components/About/BouncyCardFeatures";
import { HoverImageLinks } from "./Components/Links/HoverImageLinks";
import LogoFooter from "./Components/Footer/LogoFooter";

function App() {
  return (
    <div>
      <ChipTabs />
      <ShuffleHero />

      <HoverImageLinks />
      <BouncyCardsFeatures />
      <LogoFooter />
    </div>
  );
}

export default App;
