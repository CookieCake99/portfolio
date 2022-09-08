import {HomePage} from "../components/HomePage/HomePage";
import {ProjectsPage} from "../components/ProjectsPage/ProjectsPage";
import {AboutPage} from "../components/About/AboutPage";


export const getHomePageLink = () => {
  return "/"
}

interface QuickLinkProps {
  key: string
  text: string
  path: string
  element: JSX.Element
}

export const getQuickLinkRoutes = (): QuickLinkProps[] => {
  return [
    {
      key: "home",
      text: "Home",
      path: getHomePageLink(),
      element: <HomePage />
    },
    {
      key: "projects",
      text: "Projects",
      path: "/projects",
      element: <ProjectsPage />
    },
    {
      key: "about",
      text: "About",
      path: "/about",
      element: <AboutPage/>
    }
  ]
}