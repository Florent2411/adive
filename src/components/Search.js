import React from "react";

const SideMenu = ({ isShow, onClose }) => {
    console.log(isShow)
    return (
        <>
            <div className={`popup-search-box d-none d-lg-block ${isShow ? 'show' : ''}`}>
                <button className="searchClose" onClick={onClose}>
                    <i className="fal fa-times" />
                </button>
                <form>
                    <input type="text" placeholder="Que recherchez-vous ?" />
                    <button type="submit"><i className="fal fa-search" />
                    </button>
                </form>
            </div>
        </>
    );
}

export default SideMenu
