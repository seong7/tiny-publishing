import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ children, ...props }) {
  return <footer {...props}>{children}</footer>;
}

Footer.Copyright = function FooterCopyright() {
  return (
    <section className="page1__copyright-wrapper">
      <div className="center">
        <div className="page1__copyright text-center">
          © 2020
          <a href=""> Tiny Technologies Inc. </a>|<a href=""> Terms </a>|
          <a href=""> Privacy </a>
          <br />
          <br />
          <br />
          <div>
            TinyMCE® and Tiny® are registered trademarks of Tiny Technologies,
            Inc.
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
