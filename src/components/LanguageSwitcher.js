import React, { useState } from "react";
import config from "../config";

const LanguageSwitcher = ({ titre, langues }) => {
    return (
        <>
            <li className="menu-item-has-children"><a href="#">{titre} </a>
                <ul className="sub-menu">
                    {
                        langues && langues.map((langue, i) =>
                            <li key={i}><a href={'#' + langue.value}>{langue.name}</a></li>
                        )
                    }
                </ul>
            </li>
        </>
    );
}

export default LanguageSwitcher;
