import "./HomePageStyles.css"
import {AboutPage} from "../About/AboutPage";
import {HeroSection} from "../HeroSection/HeroSection";

export const HomePage = () => {
  return <div className={"homepage-wrapper"}>
    <HeroSection />
    <AboutPage/>
  </div>
}