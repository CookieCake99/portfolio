import React from 'react';
import "./HeaderStyles.css"
import {QuickLinks} from "./QuickLinks";
import {HomeButton} from "./HomeButton";
import {SocialMediaLinks} from "./SocialMediaLinks";

export const HeaderSection = () => {
  return <div className={"header-section"}>
    <div className={"header-nav"}>
      <QuickLinks/>
      <HomeButton/>
      <SocialMediaLinks/>
    </div>
  </div>
}