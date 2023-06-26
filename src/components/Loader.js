import React from "react";

export default function Loader(props) {

    return (
        <>
            <div className="preloader"><button className="as-btn style3 preloaderCls">Annuler le chargement</button>
                <div className="preloader-inner"><span className="loader" /></div>
            </div>
        </>
    );
}
