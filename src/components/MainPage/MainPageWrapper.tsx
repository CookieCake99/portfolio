import React from 'react';
import {HeaderSection} from "../HeaderSection/HeaderSection";
import {HomePage} from "../HomePage/HomePage";

export const MainPageWrapper = (): JSX.Element => {

  return <>
    <HeaderSection />
    <HomePage />
  </>
}