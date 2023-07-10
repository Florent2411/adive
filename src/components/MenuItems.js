import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import config from "../config";

const MenuItems = ({ menu }) => {
    const activeItem = localStorage.getItem('activeItem');
    const handleItemClick = (route, item) => {
        localStorage.setItem('activeItem', item);
        window.location.href = route;
        // setActiveItem(item);
        //alert(localStorage.getItem('activeItem'));
    };
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
                        menuItem.hasChildren ? <li key={i} className={'menu-item-has-children ' + (activeItem === menuItem.route ? 'menu-active' : '')} ><a style={{ cursor: "pointer" }} onClick={() => handleItemClick(menuItem.route, menuItem.route)}>{menuItem.name}</a>
                            <ul className="sub-menu">
                                {
                                    menuItem.children && menuItem.children.map((child, f) =>
                                        <li key={f}><a style={{ cursor: "pointer" }} onClick={() => handleItemClick(child.route, menuItem.route)}>{child.name}</a></li>
                                    )
                                }
                            </ul>
                        </li> : <li key={i} className={activeItem === menuItem.route ? 'menu-active' : ''}><a style={{ cursor: "pointer" }} onClick={() => handleItemClick(menuItem.route, menuItem.route)}>{menuItem.name}</a></li>
                    )}
                {
                    config.showLang && <LanguageSwitcher titre="Langue" langues={langues} />
                }

            </ul >
        </>
    );
}

export default MenuItems;
