import "./AboutPageStyles.css"
import {CVItem, getCVItems} from "../../config/CVItems";
import {useState} from "react";

export const AboutPage = (): JSX.Element => {
  const cvItems = getCVItems()

  const [selectedCVItem, setSelectedCVItem] = useState<CVItem>(cvItems[0])

  return <div id={"about"} className={"about-section-wrapper"}>
    <div className={"about-section-container"}>
      <div className={"about-me-section"}>
        <h1>About Me</h1>
        <p>My name is Richard. I am a problem solver and creative thinker. My interest in software development was sparked by gaming when I decided to learn more about Minecraft modding.</p>
        <p>Recently I finished my bachelor in mathematics during which I had the opportunity to work as a working student at Software AG for the past 3 years.
          I gathered a lot of experience in frontend development, design and accessibility over the past years.</p>
        <p>Here are some technologies I recently worked with:</p>
        <ul className={"about-list"}>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>PHP</li>
          <li>Drupal</li>
        </ul>
      </div>
      <div className={"about-cv-section"}>
        <h1>What I've done</h1>
        <div className={"about-cv-selection"}>
          <div className={"about-cv-button-section"}>
            {cvItems.map((value) => {
              return <button key={value.key} className={"about-cv-button " + (value.key === selectedCVItem.key ? "selected-cv-item" : "")} onClick={() => setSelectedCVItem(value)}>
                {value.company}
              </button>
            })}
          </div>
          <div className={"about-cv-item"}>
            <h3>{selectedCVItem.title}</h3>
            <p>{selectedCVItem.duration}</p>
            <ul className={"about-cv-list"}>
              {selectedCVItem.bulletPoints.map((value, index) => {
                return <li key={"list-item-" + index}>
                  {value}
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
}