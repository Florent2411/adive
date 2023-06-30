import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Loader from "../components/Loader";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage"
import ServicesPage from "../pages/ServicesPage";
import JobsPage from "../pages/services/JobsPage";
import ContactPage from "../pages/ContactPage";
import Search from '../components/Search';
import ErrorPage from '../pages/ErrorPage';
import BlogPage from '../pages/BlogPage';
import TrainingsPage from '../pages/TrainingsPage';

function Routers() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const toggleSearch = () => {
    setIsShow(true);
  };

  const tabs = [
    {
      route: "/welcome",
      icon: "fa fa-home",
      label: "Accueil"
    }, {
      route: "/services",
      icon: "fa fa-list",
      label: "Services"
    }, {
      route: "/login",
      icon: "fa fa-user",
      label: "Connexion"
    }, {
      route: "/contact",
      icon: "fa fa-phone",
      label: "Contact"
    }
  ]

  return (
    <BrowserRouter>
      <div>
        <Loader />
        <SideMenu isOpen={isSideMenuOpen} onClose={() => {
          setIsSideMenuOpen(false);
        }} />
      </div>
      <div>
        <Search isShow={isShow} onClose={() => {
          setIsShow(false);
        }} />
        <Header onMenuButtonClick={toggleSideMenu} showSearch={toggleSearch} />
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/*" element={<ErrorPage />} />
        <Route exact path="/welcome" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route exact path="/services/jobs" element={<JobsPage />} />
        <Route exact path="/services/trainings" element={<TrainingsPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <div className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation"
        style={{ backgroundColor: "white" }}>
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) => (
              <a href={tab.route} className="nav-link" activeClassName="active">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <i className={tab.icon} />
                  {/* <div>{tab.label}</div> */}
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Routers;