import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import Overlay from './Nav/Overlay';
import InlineMenu from './Nav/InlineMenu';
import Button from '../../common/Button';
import AntdIcon from '../../common/AntdIcon';
import menu from './Nav/menu';

export default function Header({ children, ...props }) {
  return (
    <div className="page1_header w100" {...props}>
      <div className="page1_header-wrapper max-width-1100">{children}</div>
    </div>
  );
}

Header.Logo = function HeaderLogo() {
  return (
    <div className="page1__logo-wrapper page1__header-el">
      <a href="">
        <img className="" src="/svg/tiny-color-ondark-rgb.svg" alt="logo" />
      </a>
    </div>
  );
};

Header.Nav = function HeaderNav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleClick = () => setIsMenuVisible((prev) => !prev);

  const Li = ({ name, overlay }) => (
    <li>
      <Dropdown overlay={overlay}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {name} <AntdIcon name="DownOutlined" />
        </a>
      </Dropdown>
    </li>
  );
  Li.propTypes = {
    name: PropTypes.string.isRequired,
    overlay: PropTypes.func.isRequired,
  };

  return (
    <div>
      <div className="page1__nav-hamburger page1__header-el">
        <Button className="page1__nav-icon" onClick={handleClick}>
          <AntdIcon name="MenuOutlined" />
        </Button>
        {isMenuVisible &&
          createPortal(
            <InlineMenu navMenu={menu} />,
            document.querySelector('.page1_header-wrapper'),
          )}
      </div>

      <nav className="page1__header-nav page1__header-el">
        <ul className="page1__nav-list">
          <Li name="Product" overlay={Overlay.Product} />
          <Li name="Support" overlay={Overlay.Support} />
          <Li name="About" overlay={Overlay.About} />
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.Login = function HeaderLogin() {
  return (
    <div className="page1__header-login page1__header-el">
      <div>
        <a href="">
          <span>Login</span>
        </a>
      </div>
    </div>
  );
};

Header.Contact = function HeaderContact() {
  return (
    <div className="page1__header-contact page1__header-el">
      <Button className="page1__header-btn white-border">Contact</Button>
      <Button className="page1__header-btn non-border">
        <img src="/svg/contact-icon-white.svg" alt="contact-btn" />
      </Button>
    </div>
  );
};

Header.Links = function HeaderLinks() {
  return (
    <div className="page1__header-links page1__header-el">
      <div>
        <a className="hover-55ACEE" href="">
          <AntdIcon name="TwitterOutlined" />
        </a>
      </div>
      <div>
        <a className="hover-117EB9" href="">
          <AntdIcon name="LinkedinOutlined" />
        </a>
      </div>
      <div>
        <a className="hover-000" href="">
          <AntdIcon name="GithubOutlined" />
        </a>
      </div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
