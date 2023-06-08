import React from "react";

export default function Projects(props) {

  return (
    <>
      {/* Project Section */}
      <section className="project-section">
        <div className="left-curve-box" />
        <div className="right-curve-box" />
        <div className="auto-container">
          <div className="inner-container">
            <div className="gallery-carousel-two owl-carousel owl-theme">
              {/* Project Block */}
              <div className="project-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="assets/images/gallery/1.jpg" alt />
                    <div className="overlay-box">
                      <div className="content">
                        <h3><a href="projects-detail.html">Security Managment</a></h3>
                        <div className="text">High Standard of proffesional</div>
                        <div className="icon icofont-horse-head-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Block */}
              <div className="project-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="assets/images/gallery/1.jpg" alt />
                    <div className="overlay-box">
                      <div className="content">
                        <h3><a href="projects-detail.html">Security Managment</a></h3>
                        <div className="text">High Standard of proffesional</div>
                        <div className="icon icofont-horse-head-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Block */}
              <div className="project-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="assets/images/gallery/1.jpg" alt />
                    <div className="overlay-box">
                      <div className="content">
                        <h3><a href="projects-detail.html">Security Managment</a></h3>
                        <div className="text">High Standard of proffesional</div>
                        <div className="icon icofont-horse-head-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Project Section */}
    </>
  );
}