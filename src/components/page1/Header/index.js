import React from 'react';
import { Row, Col } from 'antd';
import Header from './Header';

export default function HeaderLayout() {
  return (
    <Header>
      <Row className="h100">
        <Col className="h100" xs={1} sm={1} md={1} lg={1} xl={1}>
          <Header.Logo />
        </Col>
      </Row>
    </Header>
  );
}
