import React, { useEffect } from 'react';
const SortBy = (props) => {
    const { titre } = props;
    return (
        <>
            <div className="widget widget-shortby">
                <div className="inner">
                    <h3 className="widget_title">{titre}</h3>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="radio" id="short-check1" name="courseDateSort" />
                            <label htmlFor="short-check1">Nouveautés</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="radio" id="short-check2" name="courseDateSort" />
                            <label htmlFor="short-check2">Anciens</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="radio" id="short-check3" name="courseDateSort" />
                            <label htmlFor="short-check3">Cours populaires</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="radio" id="short-check4" name="courseDateSort" />
                            <label htmlFor="short-check4">En vedette ce mois-ci</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SortBy;
