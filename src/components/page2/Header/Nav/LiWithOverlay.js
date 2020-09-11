import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import AntdIcon from '../../../common/AntdIcon';

export default function LiWithOverlay({
  name,
  overlay,
  onClick,
  isOverlayVisible,
}) {
  return (
    <>
      <li>
        <a
          className={isOverlayVisible ? 'selected' : ''}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          {name} <AntdIcon name="DownOutlined" />
        </a>
      </li>
      {isOverlayVisible &&
        createPortal(overlay, document.querySelector('.page2_header'))}
    </>
  );
}

LiWithOverlay.propTypes = {
  name: PropTypes.string.isRequired,
  overlay: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isOverlayVisible: PropTypes.bool.isRequired,
};
