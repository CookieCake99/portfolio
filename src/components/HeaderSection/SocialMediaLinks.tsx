import {getSocialMediaLinks} from "../../config/SocialMediaLinks";
import "./HeaderStyles.css"

export const SocialMediaLinks = (): JSX.Element => {
  const socialMediaLinks = getSocialMediaLinks()

  return <div className={"socials-wrapper"}>
    {socialMediaLinks.map(value => {
      return <a
        key={value.key}
        href={value.url}
        title={value.hover_text}
        className={"socials-link"}
      >
        {value.icon}
      </a>
    })}
  </div>
}