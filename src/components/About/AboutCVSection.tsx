import {CVItem, getCVItems} from "../../config/CVItems";
import {useState} from "react";

export const AboutCVSection = () => {
  const cvItems = getCVItems()

  const [selectedCVItem, setSelectedCVItem] = useState<CVItem>(cvItems[0])

  return <div className={"about-cv-section"}>
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
}