import "./HomePageStyles.css"
import {AboutPage} from "../About/AboutPage";

export const HomePage = () => {
  return <div className={"homepage-wrapper"}>
    <div className={"about-text-wrapper"}>
      <h1 className={"title"}>
        Hi. I'm Richard.<br/>
        A web developer.
      </h1>
      <p className={"sub-text"}>
        I enjoy solving complex problems and building creative products.
      </p>
    </div>
    <AboutPage/>
  </div>
}