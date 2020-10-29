import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from './Nav/Overlay';
import LiWithOverlay from './Nav/LiWithOverlay';
import Modal from './Nav/Modal';
import Button from '../../common/Button';
import AntdIcon from '../../common/AntdIcon';

export default function Header({ children, ...props }) {
  return (
    <div className="page2_header w100" {...props}>
      <div className="page2_header-wrapper h100">{children}</div>
    </div>
  );
}

Header.Logo = function HeaderLogo() {
  return (
    <div className="page2__logo-wrapper page2__header-el">
      <a href="">
        <img className="" src="/svg/tiny-color-onlight-rgb.svg" alt="logo" />
      </a>
    </div>
  );
};

Header.Buttons = function HeaderButtons({ className }) {
  return (
    <div className={`page2__header-buttons ${className}`}>
      <a className="h100 header-talk-btn" href="">
        <AntdIcon name="CommentOutlined" />
        Talk to an expert
      </a>
      <Button className="page2__header-button">Get TinyMCE For Free</Button>
    </div>
  );
};

Header.Nav = function HeaderNav() {
  const [isProductVisible, setIsProductVisible] = useState(false);
  const [isPluginsVisible, setIsPluginsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = (setVisible, setRestNotVisible) => {
    setVisible((prev) => !prev);
    if (setRestNotVisible) setRestNotVisible(false);
  };

  const handleModalClick = () => handleClick(setIsModalVisible);

  return (
    <div className="page2__nav-wrapper">
      <div className="page2__nav-hamburger page2__header-el">
        <Button className="page2__nav-icon" onClick={handleModalClick}>
          <AntdIcon name="MenuOutlined" />
        </Button>
        {isModalVisible &&
          createPortal(
            <Modal Buttons={Header.Buttons} handleClick={handleModalClick} />,
            document.body,
          )}
      </div>

      <nav className="page2__header-nav page2__header-el">
        <ul className="page2__nav-list">
          <LiWithOverlay
            name="Product"
            overlay={Overlay.Product()}
            onClick={() =>
              handleClick(setIsProductVisible, setIsPluginsVisible)
            }
            isOverlayVisible={isProductVisible}
          />
          <LiWithOverlay
            name="Plugins"
            overlay={Overlay.Plugins()}
            onClick={() =>
              handleClick(setIsPluginsVisible, setIsProductVisible)
            }
            isOverlayVisible={isPluginsVisible}
          />
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
Header.Buttons.defaultProps = {
  className: '',
};
Header.Buttons.propTypes = {
  className: PropTypes.string,
};
