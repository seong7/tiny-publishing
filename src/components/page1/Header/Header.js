import React from 'react';
import PropTypes from 'prop-types';
// import { Row, Col } from 'antd';

export default function Header({ children, ...props }) {
  return (
    <div className="page1_header w100" {...props}>
      <div className="page1_header-wrapper">{children}</div>
    </div>
  );
}

Header.Logo = function HeaderLogo() {
  return (
    <div className="page1__logo-wrapper mr-20 h100">
      <a href="">
        <img
          className=""
          src="./public/svg/tiny-color-ondark-rgb.svg"
          alt="logo"
        />
        <img
          className="d-none"
          src="./public/svg/tiny-color-onlight-rgb.svg"
          alt="logo"
        />
      </a>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
