import {getQuickLinkRoutes} from "../../config/Routes";
import "./HeaderStyles.css"

export const QuickLinks = (): JSX.Element => {
  const routes = getQuickLinkRoutes()

  return <div className={"quick-links-wrapper"}>
    {routes.map((value, index) => {
      return <a key={index} href={value.path} className={"quick-link"}>
        <span>{value.text}</span>
      </a>
    })}
  </div>
}