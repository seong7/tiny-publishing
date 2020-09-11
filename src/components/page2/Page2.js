import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Contents from './Contents';

export default function Page2({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

Page2.Header = function Page2Header() {
  return <Header />;
};

Page2.Footer = function Page2Footer() {
  return <Footer />;
};

Page2.Contents = function Page2Contents() {
  return <Contents />;
};

Page2.propTypes = {
  children: PropTypes.node.isRequired,
};
