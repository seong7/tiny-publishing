import React from 'react';
import PropTypes from 'prop-types';
import AntdIcon from '../../common/AntdIcon';

export default function IconBox({
  className,
  iconName,
  title,
  subtitle,
  children,
}) {
  return (
    <div className={`icon_box ${className}`}>
      <div className="icon_box-circle">
        <AntdIcon name={iconName} className="content-icon" />
      </div>
      <div className="icon_title-wrapper">
        <h3 className="icon_title color-black">{title}</h3>
        {subtitle && <p className="icon_subtitle color-gray">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

IconBox.defaultProps = {
  subtitle: null,
  children: null,
};

IconBox.propTypes = {
  className: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};
