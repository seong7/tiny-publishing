import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import qnaData from './qna/data';
import QnaList from './qna/qnaList';

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
      <Contents.Section>Test</Contents.Section>
    </div>
  );
};

Contents.Included = function ContentsIncluded() {
  return (
    <div>
      <div className="page2__contents-blue">
        <Contents.Title title="What's Included:" />
      </div>
      <Contents.Section>Test</Contents.Section>
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
