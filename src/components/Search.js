import React, { useState } from 'react';
import config from "../config";

const SideMenu = () => {
    const [showWindow, setShowWindow] = useState(false);

    const toggleSearch = () => {
        setShowWindow(true);
    };
    const onClose = () => {
        setShowWindow(false);
    };

    return (
        <>
            {
                config.showSearch && <>

                    <button type="button" className="icon-btn searchBoxToggler" onClick={toggleSearch}>
                        <i className="far fa-search" />
                    </button>
                    <div className={`popup-search-box d-none d-lg-block ${showWindow ? 'show' : ''}`}>
                        <button className="searchClose" onClick={onClose}>
                            <i className="fal fa-times" />
                        </button>
                        <form>
                            <input type="text" placeholder="Que recherchez-vous ?" />
                            <button type="submit"><i className="fal fa-search" />
                            </button>
                        </form>
                    </div></>
            }

        </>
    );
}

export default SideMenu
