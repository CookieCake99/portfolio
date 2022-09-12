import "./AboutPageStyles.css"
import {AboutCVSection} from "./AboutCVSection";
import {AboutMeSection} from "./AboutMeSection";

export const AboutPage = (): JSX.Element => {

  return <div id={"about"} className={"about-section-wrapper"}>
    <div className={"about-section-container"}>
      <AboutMeSection/>
      <AboutCVSection/>
    </div>
  </div>
}