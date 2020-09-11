import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import AntdIcon from '../../common/AntdIcon';
import footerMenu from './footerMenu';

export default function Footer({ children, ...props }) {
  return <footer {...props}>{children}</footer>;
}

Footer.List = function FooterList({ items }) {
  return (
    <>
      {items.map((item, idx1) => (
        <div className="semiFooter__list-wrapper" key={idx1}>
          <p className="semiFooter__title">{item.title}</p>
          <ul className="semiFooter__list">
            {item.children.map((children, idx2) => (
              <li key={idx2}>
                <a href="">&gt; {children}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

Footer.SemiFooter = function FooterSemiFooter() {
  return (
    <section className="page2__semi-footer">
      <div className="center max-width-1100 page2__semifooter-flex">
        <div className="footer-subscribe">
          <AntdIcon name="AntDesignOutlined" />
          <p>
            Tiny helps developers create great content creation applications.
            Sign up for our newsletter to stay in touch.
          </p>
          <div className="subscribe-wrapper">
            <input type="text" placeholder="Email Address" />
            <Button className="subscribe-button">Subscribe</Button>
          </div>
        </div>
        <div className="footer-list">
          <Footer.List items={footerMenu} />
        </div>
      </div>
    </section>
  );
};

Footer.Copyright = function FooterCopyright() {
  return (
    <section className="page2__copyright-wrapper">
      <div className="center max-width-1100 page2__copyright-flex">
        <div className="page2__copyright-links">
          <AntdIcon name="GithubOutlined" />
          <AntdIcon name="TwitterOutlined" />
          <AntdIcon name="LinkedinFilled" />
        </div>
        <div className="page2__copyright">
          <p>
            <a href=""> © 2020 Tiny Technologies Inc. </a>|
            <a href=""> Terms </a>|<a href=""> Privacy </a>
          </p>
          <br />
          <div className="color-a09f9f font-size-decrease">
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
Footer.List.propTypes = {
  items: PropTypes.array.isRequired,
};
