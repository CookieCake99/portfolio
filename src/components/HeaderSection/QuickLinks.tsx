import {getQuickLinkRoutes} from "../../config/Routes";
import {Link} from "react-router-dom";

export const QuickLinks = (): JSX.Element => {
  const routes = getQuickLinkRoutes()

  return <div className={"quick-links-wrapper"}>
    {routes.map((value, index) => {
      return <Link key={index} to={value.path} className={"quick-link"}>
        <span>{value.text}</span>
      </Link>
    })}
  </div>
}