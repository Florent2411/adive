import React from "react";

export default function Loader(props) {

  return (
    <>
      {/* Preloader */}
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">x</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner" />
              <div className="txt-loading">
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="D" className="letters-loading">
                  D
                </span>
                <span data-text-preloader="I" className="letters-loading">
                  I
                </span>
                <span data-text-preloader="V" className="letters-loading">
                  V
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Preloader End */}
    </>
  );
}