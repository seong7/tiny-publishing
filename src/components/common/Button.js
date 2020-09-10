import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
