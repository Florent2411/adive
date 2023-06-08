import React from "react";

export default function Sponsors(props) {

  return (
    <>
       {/* Clients Section */}
       <section className="clients-section-two">
            <div className="auto-container">
              <div className="inner-container">
                <div className="carousel-outer">
                  {/*Sponsors Slider*/}
                  <ul className="sponsors-carousel owl-carousel owl-theme">
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/1.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/2.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/3.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/4.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/5.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/1.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/2.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/3.png" alt /></a></div></li>
                    <li><div className="image-box"><a href="index-2.html#"><img src="assets/images/clients/4.png" alt /></a></div></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* End Clients Section */}
    </>
  );
}