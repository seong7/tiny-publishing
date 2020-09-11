import React from 'react';
import PropTypes from 'prop-types';
import AntdIcon from '../../../common/AntdIcon';
import Button from '../../../common/Button';

export default function Modal({ Buttons, handleClick }) {
  return (
    <div className="modal-wrapper">
      <div className="modal-inner-wrapper">
        <Button className="modal-close" onClick={handleClick}>
          <AntdIcon name="CloseOutlined" />
        </Button>
        <div className="modal-upper-links">
          <a href="">TinyMCE</a>
          <a href="">TinyDrive</a>
          <a href="">Plugins</a>
          <a href="">Customer Success</a>
          <a href="">Blog</a>
          <a href="">Pricing</a>
        </div>
        <div className="modal-mid-links">
          <a href="">Documentation</a>
          <a href="">Support</a>
          <a href="">Sign in</a>
        </div>
        <Buttons className="modal-btns" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  Buttons: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
