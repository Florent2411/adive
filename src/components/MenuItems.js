import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import config from "../config";

const MenuItems = ({ menu }) => {

    // console.log({ menu });
    const langues = [
        {
            name: "Anglais",
            value: "en"
        },
        {
            name: "Français",
            value: "fr"
        }
    ];

    return (
        <>
            <ul>
                {
                    menu.length && menu.map((menuItem, i) =>
                        menuItem.hasChildren ? <li key={i} className="menu-item-has-children"><a href={menuItem.route}>{menuItem.name}</a>
                            <ul className="sub-menu">
                                {
                                    menuItem.children && menuItem.children.map((child, f) =>
                                        <li key={f}><a href={child.route}>{child.name}</a></li>
                                    )
                                }
                            </ul>
                        </li> : <li key={i} ><a href={menuItem.route}>{menuItem.name}</a></li>
                    )}
                {
                    config.showLang && <LanguageSwitcher titre="Langue" langues={langues} />
                }

            </ul>
        </>
    );
}

export default MenuItems;
