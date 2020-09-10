import React from 'react';
import { Row, Col } from 'antd';
import Header from './Header';

export default function HeaderLayout() {
  return (
    <Header>
      <Row
        className="h100 w100 page1__header-padding"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {/* Logo */}
        <Col className="gutter-row" order="1">
          <Header.Logo />
        </Col>

        {/* Nav */}
        <Col
          className="gutter-row"
          xs={{ flex: '50px', order: 5 }}
          sm={{ flex: '50px', order: 2 }}
          md={{ flex: '300px', order: 2 }}
          lg={{ flex: '300px', order: 2 }}
        >
          <Header.Nav />
        </Col>

        {/* 여백 */}
        <Col
          className="gutter-row"
          flex="auto"
          xs={{ order: 2 }}
          sm={{ order: 3 }}
          md={{ order: 3 }}
          lg={{ order: 3 }}
        />

        {/* Login */}
        <Col
          className="gutter-row"
          xs={{ flex: '30px', order: 6 }}
          sm={{ flex: '50px', order: 6 }}
          md={{ flex: '50px', order: 6 }}
          lg={{ flex: '50px', order: 4 }}
        >
          <Header.Login />
        </Col>

        {/* Contact */}
        <Col
          className="gutter-row"
          xs={{ flex: '0px', order: 3 }}
          sm={{ flex: '50px', order: 5 }}
          md={{ flex: '50px', order: 5 }}
          lg={{ flex: '50px', order: 5 }}
        >
          <Header.Contact />
        </Col>

        {/* Links */}
        <Col
          className="gutter-row"
          xs={{ flex: '0px', order: 4 }}
          sm={{ flex: '0px', order: 4 }}
          md={{ flex: '120px', order: 4 }}
          lg={{ flex: '120px', order: 6 }}
        >
          <Header.Links />
        </Col>
      </Row>
    </Header>
  );
}
