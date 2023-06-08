import React from "react";

export default function Header(props) {

    return (
        <>
            {/* Main Header / Hedare Style Two */}
            <header className="main-header header-style-two">
                {/* Header Top */}
                <div className="header-top-two">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/* Top Left */}
                            <div className="top-left clearfix">
                                <div className="text" style={{ color: "#000" }}>Des solutions sur mesure adaptées à votre entreprise. <a href="contact.html">Conseil gratuit</a></div>
                            </div>
                            {/* Top Right */}
                            <div className="top-right pull-right clearfix">
                                <div className="location" style={{ color: "#000" }}>684 West College St. Sun City, USA</div>
                                {/* Language */}
                                <div className="language-dropdown">
                                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        English &nbsp;<span className="fa fa-angle-down" />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <li><a className="dropdown-item" href="index-2.html#">French</a></li>
                                        <li><a className="dropdown-item" href="index-2.html#">Arbic</a></li>
                                        <li><a className="dropdown-item" href="index-2.html#">Urdu</a></li>
                                        <li><a className="dropdown-item" href="index-2.html#">Hindi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="inner-container d-flex justify-content-between align-items-center">
                            {/* Logo */}
                            <div>
                                <div><a href="index.html"><img src="assets/images/adiveLogo.png" alt title
                                width={70} /></a></div>
                            </div>
                            {/* Nav Outer */}
                            <div className="nav-outer clearfix">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler"><span className="icon flaticon-menu" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md">
                                    <div className="navbar-header">
                                        {/* Toggle Button */}
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown"><a href="index-2.html#">Home</a></li>
                                            <li className="dropdown"><a href="index-2.html#">About</a></li>
                                            <li className="dropdown"><a href="index-2.html#">Services</a></li>
                                            <li className="dropdown"><a href="index-2.html#">Projects</a></li>
                                            <li className="dropdown"><a href="index-2.html#">Blog</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/* Main Menu End*/}
                            <div className="outer-box clearfix">
                                {/* User Box */}
                                <a href="contact.html" className="user-box fas fa-user" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Header Lower */}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container clearfix">
                        {/*Logo*/}
                        <div>
                            <a href="index.html"><img src="assets/images/adiveLogo.png" alt title width={50} /></a>
                        </div>
                        {/*Right Col*/}
                        <div className="pull-right">
                            {/* Main Menu */}
                            <nav className="main-menu">
                                {/*Keep This Empty / Menu will come through Javascript*/}
                            </nav>
                            {/* Main Menu End*/}
                            {/* Mobile Navigation Toggler */}
                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1" /></div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    <div className="close-btn"><span className="icon flaticon-multiply" /></div>
                    <nav className="menu-box">
                        <div className="nav-logo"><a href="index.html"><img src="assets/images/adiveLogo.png" alt title width={70} /></a></div>
                        <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                    </nav>
                </div>{/* End Mobile Menu */}
            </header>
            {/* End Main Header */}
        </>
    );
}