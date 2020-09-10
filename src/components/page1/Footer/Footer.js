import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Button from '../../common/Button';
import AntdIcon from '../../common/AntdIcon';

const Footer = {};

export default Footer;

Footer.Contact = function FooterContact() {
  return (
    <section className="page1__footer-contact">
      <Row
        justify="space-between"
        style={{ width: '100%' }}
        className="footer-contact-row"
      >
        <Col
          xs={24}
          sm={24}
          md={14}
          lg={12}
          xl={12}
          className="footer-contact-col"
        >
          <div className="color-white">
            <h2>Get in touch</h2>
            <p>
              Talk to us about how to take your content creation applications to
              the next level.
            </p>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          xl={6}
          className="footer-contact-col"
        >
          <Button className="page1__footer-btn">CONTACT US</Button>
        </Col>
      </Row>
    </section>
  );
};

Footer.About = function FooterAbout() {
  return (
    <section className="page1__footer-about">
      <Row className="footer-about-row">
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-about-col">
          <div>
            <h4>About</h4>
            <p>
              Tiny helps developers create great content creation applications.
            </p>
            <div>
              <a href="">
                <AntdIcon name="GithubOutlined" />
              </a>
              <a href="">
                <AntdIcon name="TwitterOutlined" />
              </a>
              <a href="">
                <AntdIcon name="LinkedinFilled" />
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-about-col">
          <div className="page1__footer-resource">
            <h4>Resources</h4>
            <div>
              <a href="">&gt; Docs</a>
              <a href="">&gt; Support</a>
              <a href="">&gt; Our Team</a>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

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
