import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer/Footer';
import Contents from './Contents/Contents';
import './Page1.css';

export default function Page1({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

Page1.Header = function Page1Header() {
  return <Header />;
};

Page1.Title = function Page1Title() {
  return (
    <section className="page1__title w100 pt-lg-68 pb-lg-30 pt-md-80 pt-sm-80">
      <div className="page1__title-img h100 w100" />
      <div className="page1__title-wrapper w100 h100 pt-lg-100 pb-lg-100 pt-md-40 pb-md-40 pt-sm-40 pb-sm-40">
        <h1 className="page1__title-title center text-center color-white text-light">
          ABOUT TINY
        </h1>
        <p className="page1__title-sub text-center color-white">
          POWERFUL AND EASY-TO-USE TOOLS FOR ONLINE CONTENT CREATION
        </p>
      </div>
    </section>
  );
};

Page1.ContentWrapper = function Page1ContentWrapper({
  children,
  className,
  ...props
}) {
  return (
    <section
      className={`page1__content-wrapper center max-width-1100 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

Page1.WideBackground = function Page1WideBackground({ children, className }) {
  return <div className={`content__wide-bg ${className}`}>{children}</div>;
};

Page1.Add = function Page1Add() {
  return (
    <div className="page1__add w100 color-gray">
      <div className="page1__add-wrapper">
        <p>
          Please read this important information about the future of{' '}
          <a href=""> Textbox.io </a>
          and <a href=""> EditLive!</a>
        </p>
      </div>
    </div>
  );
};

Page1.Contents = Contents;

Page1.Footer = Footer;

Page1.propTypes = {
  children: PropTypes.node.isRequired,
};
Page1.ContentWrapper.defaultProps = {
  className: '',
};
Page1.ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Page1.WideBackground.defaultProps = {
  className: '',
};
Page1.WideBackground.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
