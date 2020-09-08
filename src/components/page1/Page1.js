import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import './Page1.css';

export default function Page1({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

Page1.Header = function Page1Header() {
  return <Header />;
};

Page1.Title = function Page1Title() {
  return (
    <div className="page1__title w100 pt-lg-68 pb-lg-30 pt-md-80 pt-sm-80">
      <div className="page1__title-img h100 w100" />
      <div className="page1__title-wrapper w100 h100 pt-lg-100 pb-lg-100 pt-md-40 pb-md-40 pt-sm-40 pb-sm-40">
        <h1 className="page1__title-title center text-center color-white text-light">
          ABOUT TINY
        </h1>
        <p className="page1__title-sub text-center color-white">
          POWERFUL AND EASY-TO-USE TOOLS FOR ONLINE CONTENT CREATION
        </p>
      </div>
    </div>
  );
};

Page1.Footer = function Page1Footer() {
  return <Footer />;
};

Page1.propTypes = {
  children: PropTypes.node.isRequired,
};
