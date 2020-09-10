import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// import { Dropdown } from 'antd';
import Overlay from './Nav/Overlay';
import Button from '../../common/Button';
import AntdIcon from '../../common/AntdIcon';

export default function Header({ children, ...props }) {
  return (
    <div className="page2_header w100" {...props}>
      <div className="page2_header-wrapper max-width-1100">{children}</div>
    </div>
  );
}

Header.Logo = function HeaderLogo() {
  return (
    <div className="page2__logo-wrapper page2__header-el">
      <a href="">
        <img
          className=""
          src="/public/svg/tiny-color-onlight-rgb.svg"
          alt="logo"
        />
      </a>
    </div>
  );
};

Header.Nav = function HeaderNav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleClick = () => setIsMenuVisible((prev) => !prev);

  const Li = ({ name, overlay }) => (
    <>
      <li>
        {/* <Dropdown overlay={overlay}> */}
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {name} <AntdIcon name="DownOutlined" />
        </a>
        {/* </Dropdown> */}
      </li>
      {createPortal(overlay, document.querySelector('.page2_header-wrapper'))}
      {/* document.querySelector('.page2_header-wrapper')) */}
    </>
  );
  Li.propTypes = {
    name: PropTypes.string.isRequired,
    overlay: PropTypes.node.isRequired,
  };

  return (
    <div>
      {/* <div className="page1__nav-hamburger page1__header-el">
          <Button className="page1__nav-icon" onClick={handleClick}>
            <AntdIcon name="MenuOutlined" />
          </Button>
          {isMenuVisible &&
            createPortal(
              <InlineMenu navMenu={menu} />,
              document.querySelector('.page1_header-wrapper'),
            )}
        </div> */}

      <nav className="page1__header-nav page1__header-el">
        <ul className="page1__nav-list">
          <Li name="Product" overlay={Overlay.Product} />
          <Li name="Plugins" overlay={Overlay.Plugins} />
          <li>
            <a href="">Case Studies</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
