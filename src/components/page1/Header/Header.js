import React from 'react';

export default function Header({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
