import "./HeroSectionStyles.css"
import {useEffect, useState} from "react";

export const HeroSection = () => {

  const [typedText, setTypedText] = useState<string>("")
  const [remove, setRemove] = useState<boolean>(false)
  const [possibleTextsIndex, setPossibleTextsIndex] = useState<number>(0)
  const [charIndex, setCharIndex] = useState<number>(0)

  const possibleTypedTexts = [
    "web developer",
    "problem solver",
    "creative mind"
  ]

  useEffect(() => {
    setTimeout(() => {
      if(charIndex < possibleTypedTexts[possibleTextsIndex].length) {
        setTypedText(typedText + possibleTypedTexts[possibleTextsIndex][charIndex])
      }
      if(charIndex === possibleTypedTexts[possibleTextsIndex].length + 15) {
        setRemove(true)
      }
      if(remove) {
        setTypedText(typedText.substring(0, typedText.length - 1))
      }
      setCharIndex(charIndex + 1)
      if(typedText.length === 0 && charIndex !== 0) {
        setPossibleTextsIndex( possibleTextsIndex !== possibleTypedTexts.length - 1 ? possibleTextsIndex + 1 : 0)
        setCharIndex(0)
        setRemove(false)
      }
    }, 125)
  }, // eslint-disable-next-line
    [charIndex])

  return <div className={"hero-section-wrapper"}>
    <h1 className={"hero-title"}>Hi. I'm Richard.</h1>
    <h1 className={"hero-title typed-text"}>{"A " + typedText + "."}</h1>
  </div>
}