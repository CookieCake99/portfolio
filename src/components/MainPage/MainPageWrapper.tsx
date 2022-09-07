import React from 'react';
import {HeaderSection} from "../HeaderSection/HeaderSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { HomePage } from '../HomePage/HomePage';
import {ProjectsPage} from "../ProjectsPage/ProjectsPage";

export interface MainPageWrapperProps {

}

export const MainPageWrapper = (props: MainPageWrapperProps): JSX.Element => {
  return <BrowserRouter>
    <HeaderSection />
    <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/projects"} element={<ProjectsPage/>}/>
    </Routes>

  </BrowserRouter>
}