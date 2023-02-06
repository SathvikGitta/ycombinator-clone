import React from "react";

import { NavlinkData, NavContainer } from "./DataStore";

const Navigation = () => {
    return (
        <>
            <div className="navbar-container">
                <ul>
                    <strong><a href="App.js" className="title-link">Y</a></strong>
                    {NavlinkData.map((item, index) => {
                        return (
                            <ul>
                                <li><a href={`#${item}`} className="navlinks" key={index}>{item}</a></li>
                            </ul>
                        )
                    })}
                </ul>
                <a href="#btn-cta"><button className="button-cta button">Apply</button></a>
            </div>

            <div className="navcontainer-text">
                {NavContainer.map((Text, index) => {
                    return (
                        <div className="navcontainer-text-container">
                            <h3 className="Text-Title"><a href="#Nav">{Text.NavTitle}</a></h3>
                            <p className="Text-Description"><a href="#Nav">{Text.NavDesc}</a></p>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Navigation