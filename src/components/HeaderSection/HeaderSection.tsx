import React from 'react';
import "../css/styles.css"
import {QuickLinks} from "./QuickLinks";
import {HomeButton} from "./HomeButton";
import {SocialMediaLinks} from "./SocialMediaLinks";

export interface HeaderSectionProps {

}

export const HeaderSection = (props: HeaderSectionProps) => {
    return <div className={"headerSection"}>
        <QuickLinks/>
        <HomeButton/>
        <SocialMediaLinks/>
    </div>
}