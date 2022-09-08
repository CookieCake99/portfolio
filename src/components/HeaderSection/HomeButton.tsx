import React from 'react';
import "./HeaderStyles.css"
import {Link} from "react-router-dom";
import {getHomePageLink} from "../../config/Routes";
import {ReactComponent as CatFace} from "./icon/cat-face-icon.svg";
import {ReactComponent as Logo} from "./icon/logo64.svg";

export const HomeButton = (): JSX.Element => {
    return <Link to={getHomePageLink()} className={"home-button"}>
        <CatFace className={"cat-face"}/>
        <Logo className={"logo"}/>
    </Link>
}