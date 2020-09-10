import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Page2({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

Page2.Header = function Page2Header() {
  return <Header />;
};

Page2.propTypes = {
  children: PropTypes.node.isRequired,
};
