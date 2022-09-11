import React from 'react';
import "./HeaderStyles.css"
import {QuickLinks} from "./QuickLinks";
import {SocialMediaLinks} from "./SocialMediaLinks";

export const HeaderSection = () => {
  return <div className={"header-section"}>
    <div className={"header-nav"}>
      <QuickLinks/>
      <SocialMediaLinks/>
    </div>
  </div>
}