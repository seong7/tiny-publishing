import React from 'react';
import { Row, Col } from 'antd';
import SemiHeader from './SemiHeader';
import Header from './Header';

export default function Page2Layout() {
  return (
    <>
      <SemiHeader />

      <Header>
        <Row>
          <Col>
            <Header.Logo />
          </Col>
          <Col>
            <Header.Nav />
          </Col>
        </Row>
      </Header>
    </>
  );
}
