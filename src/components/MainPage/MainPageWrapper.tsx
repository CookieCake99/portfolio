import React from 'react';
import {HeaderSection} from "../HeaderSection/HeaderSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {getQuickLinkRoutes} from "../../config/Routes";

export const MainPageWrapper = (): JSX.Element => {
  const routes = getQuickLinkRoutes()

  return <BrowserRouter>
    <HeaderSection />
    <Routes>
      {routes.map((value) => {
        return <Route
          key={value.key}
          path={value.path}
          element={value.element}
        />
      })}
    </Routes>
  </BrowserRouter>
}