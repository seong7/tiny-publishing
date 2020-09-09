import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, className }) {
  return <button className={className}>{children}</button>;
}

Button.defaultProps = {
  className: '',
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
