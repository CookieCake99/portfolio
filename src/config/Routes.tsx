export const getHomePageLink = () => {
  return "/"
}

interface QuickLinkProps {
  key: string
  text: string
  path: string
}

export const getQuickLinkRoutes = (): QuickLinkProps[] => {
  return [
    {
      key: "home",
      text: "Home",
      path: getHomePageLink(),
    },
    {
      key: "about",
      text: "About",
      path: "#about"
    }
  ]
}