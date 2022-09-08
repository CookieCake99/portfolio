import {GoMail} from "react-icons/go";
import {FaLinkedin} from "react-icons/fa";

interface SocialMediaLink {
  key: string
  text: string
  hover_text: string
  url: string
  icon: JSX.Element
}

export const getSocialMediaLinks = (): SocialMediaLink[] => {
  return [
    {
      key: "email",
      text: "Email",
      hover_text: "Send an email",
      url: "mailto:mohr.richard.1999@gmail.com",
      icon: <GoMail size={"1.5em"}/>
    },
    {
      key: "linkedin",
      text: "LinkedIn",
      hover_text: "LinkedIn profile",
      url: "https://www.linkedin.com/in/richard-mohr-7a8585245",
      icon: <FaLinkedin size={"1.5em"}/>
    }
  ]
}