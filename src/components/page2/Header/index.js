import React from 'react';
import { Row, Col } from 'antd';
import SemiHeader from './SemiHeader';
import Header from './Header';

export default function Page2Layout() {
  return (
    <div className="header-fixed">
      <SemiHeader />

      <Header>
        <Row>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 1 }}
            md={{ order: 1 }}
            lg={{ order: 1 }}
          >
            <Header.Logo />
          </Col>
          <Col
            xs={{ order: 4 }}
            sm={{ order: 4 }}
            md={{ order: 4 }}
            lg={{ order: 2 }}
          >
            <Header.Nav />
          </Col>
          <Col
            flex="auto"
            xs={{ order: 3 }}
            sm={{ order: 3 }}
            md={{ order: 3 }}
            lg={{ order: 3 }}
          />
          <Col
            xs={{ order: 2 }}
            sm={{ order: 2 }}
            md={{ order: 2 }}
            lg={{ order: 4 }}
          >
            <Header.Buttons />
          </Col>
        </Row>
      </Header>
    </div>
  );
}
