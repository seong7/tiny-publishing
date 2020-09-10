import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

const Overlay = {};

export default Overlay;

Overlay.Product = function OverlayProduct() {
  const TinyMCE = [
    'Features',
    'Extenstions',
    'Demos',
    'Dowload',
    'Docs',
    'Pricing',
  ];

  const MoreRichTextEditors = [
    'Textbox.io',
    'Textbox.io for IBM Connections',
    'Textbox.io for IBM WCM',
    'Compare Rich Text Editors ',
  ];

  const FileManagement = ['Tiny Drive', 'Moxie Manager', 'Plupload'];

  return (
    <Menu className="product_overlay">
      <div className="product_overlay-flex">
        <div className="mr-200">
          <h6>TinyMCE</h6>
          <ul>
            {TinyMCE &&
              TinyMCE.map((text, idx) => (
                <li key={idx}>
                  <a href="" className="nav__support-item color-gray">
                    {text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="mr-100">
          <h6>More Rich Text Editors</h6>
          <ul>
            {MoreRichTextEditors &&
              MoreRichTextEditors.map((text, idx) => (
                <li key={idx}>
                  <a href="" className="nav__support-item color-gray">
                    {text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="mr-100">
          <h6>File Management</h6>
          <ul>
            {FileManagement &&
              FileManagement.map((text, idx) => (
                <li key={idx}>
                  <a href="" className="nav__support-item color-gray">
                    {text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Menu>
  );
};

Overlay.Item = ({ children }) => (
  <a href="" className="nav__support-item color-gray">
    {children}
  </a>
);

Overlay.Support = function OverlaySupport() {
  return (
    <Menu>
      <Overlay.Item>TinyMCE Docs</Overlay.Item>
      <Overlay.Item>Other Product Doc</Overlay.Item>
      <Overlay.Item>Help Desk</Overlay.Item>
    </Menu>
  );
};

Overlay.About = function OverlayAbout() {
  return (
    <Menu>
      <Overlay.Item>Team</Overlay.Item>
      <Overlay.Item>Careers</Overlay.Item>
      <Overlay.Item>Contact</Overlay.Item>
    </Menu>
  );
};

Overlay.Item.propTypes = {
  children: PropTypes.node.isRequired,
};
