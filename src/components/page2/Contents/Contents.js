import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import qnaData from './qna/data';
import QnaList from './qna/QnaList';
import Pricing from './pricing';

export default function Contents({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

Contents.Title = function ContetnsTitle({ title, renderButton }) {
  return (
    <div className="page2__contents-titleWrapper max-width-1100 center">
      <h2>{title}</h2>
      {renderButton && <Button className="page2__button">Contact Sales</Button>}
    </div>
  );
};

Contents.Section = function ContentsSection({ children, className }) {
  return (
    <section
      className={`max-width-1100 center page2__contents-section ${className}`}
    >
      {children}
    </section>
  );
};

Contents.Pricing = function ContentsPricing() {
  return (
    <div>
      <Contents.Title title="Pricing Plans" />
      <Contents.Section>
        <Pricing />
      </Contents.Section>
    </div>
  );
};

Contents.Included = function ContentsIncluded() {
  return (
    <div>
      <Contents.Title title="What's Included:" />
      <Contents.Section>Test</Contents.Section>
    </div>
  );
};

Contents.GetStarted = function ContentsGetStarted() {
  return (
    <div>
      <div className="page2__contents-blue">
        <Contents.Title title="Get Started" />
      </div>
      <Contents.Section>
        <div className="getStarted-wrapper">
          <div className="getStarted-card page2__bg-blue">
            <h6>Community</h6>
            <Button className="page2__button">Get Started</Button>
          </div>
          <div className="getStarted-card page2__bg-blue">
            <h6>Cloud Essential</h6>
            <Button className="page2__button">Start Your Trial</Button>
          </div>
          <div className="getStarted-card page2__bg-blue">
            <h6>Cloud Professional</h6>
            <Button className="page2__button">Start Your Trial</Button>
          </div>
          <div className="getStarted-card page2__bg-blue getStarted-img-card">
            <h6>Custom</h6>
            <Button className="page2__button">Contact Sales</Button>
          </div>
        </div>
      </Contents.Section>
    </div>
  );
};

Contents.Qna = function ContentsQna() {
  return (
    <div>
      <div className="page2__contents-blue">
        <Contents.Title title="Have a question?" renderButton />
      </div>
      <Contents.Section>
        <QnaList items={qnaData} />
      </Contents.Section>
    </div>
  );
};

Contents.propTypes = {
  children: PropTypes.node.isRequired,
};
Contents.Title.defaultProps = {
  renderButton: false,
};
Contents.Title.propTypes = {
  title: PropTypes.string.isRequired,
  renderButton: PropTypes.bool,
};
Contents.Section.defaultProps = {
  className: '',
};
Contents.Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
