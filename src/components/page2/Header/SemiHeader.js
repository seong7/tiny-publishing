import React from 'react';
import { Row, Col } from 'antd';

export default function SemiHeader() {
  return (
    <div className="page2__semiheader">
      <Row justify="space-between">
        <Col>
          <div className="page2__semiheader-path">
            <a href="">TINY BLOG</a>
            {'  '}
            &gt; Enhance Bootstrap forms with WYSIWYG editing &gt;{'  '}
            <a href="">Read more</a>
          </div>
        </Col>
        <Col>
          <div className="page2__semiheader-links">
            <a href="">Documentation</a>
            <a href="">Support</a>
            <a href="">Sign in</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
