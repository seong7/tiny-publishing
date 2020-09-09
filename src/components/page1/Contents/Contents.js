import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import IconBox from './IconBox';
import 'antd/dist/antd.css';
import Button from '../../common/Button';
import AntdIcon from '../../common/AntdIcon';

const Contents = {};

Contents.Title = function ContentsTitle({ title, subtitle }) {
  return (
    <div className="page1__content-title">
      <h2 className="color-black">{title}</h2>
      <p className="color-gray">{subtitle}</p>
    </div>
  );
};

Contents.TextEditor = function ContentsTextEditor({ title, subtitle, icons }) {
  return (
    <>
      <Contents.Title title={title} subtitle={subtitle} />
      <div>
        <Row>
          {icons &&
            icons.map((icon, idx) => (
              <Col xs={24} sm={24} md={8} lg={8} xl={8} key={idx}>
                <IconBox
                  className="flex-column"
                  iconName={icon.iconName}
                  title={icon.title}
                  subtitle={icon.subtitle}
                />
              </Col>
            ))}
        </Row>
      </div>
      <div className="content-button-wrapper">
        <Button className="content-button bg-green color-white">
          Compare Rich Text Editor
        </Button>
      </div>
    </>
  );
};

Contents.IBM = function ContentsIBM({ title, subtitle, icons }) {
  return (
    <div className="content__ibm">
      <Contents.Title title={title} subtitle={subtitle} />
      <div>
        <Row>
          {icons &&
            icons.map((icon, idx) => (
              <Col xs={24} sm={24} md={12} lg={12} xl={12} key={idx}>
                <IconBox
                  className="flex-row mg-5per"
                  iconName={icon.iconName}
                  title={icon.title}
                  subtitle={icon.subtitle}
                />
              </Col>
            ))}
        </Row>
      </div>
      <div className="content-button-wrapper">
        <Button className="content-button bg-black color-white">
          Learn more about solutions for IBM
        </Button>
      </div>
    </div>
  );
};

Contents.FileAndImage = function ContentsFileAndImage({
  title,
  subtitle,
  icons,
}) {
  return (
    <>
      <Contents.Title title={title} subtitle={subtitle} />
      <div>
        <Row>
          {icons &&
            icons.map((icon, idx) => (
              <Col xs={24} sm={24} md={12} lg={12} xl={12} key={idx}>
                <IconBox
                  className="flex-column"
                  iconName={icon.iconName}
                  title={icon.title}
                  subtitle={icon.subtitle}
                >
                  <a className="icon-a color-blue" href="">
                    Learn more »
                  </a>
                </IconBox>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

Contents.Websites = function ContentsWebsites({ title, subtitle, websites }) {
  return (
    <>
      <Contents.Title title={title} subtitle={subtitle} />
      <Row>
        {websites &&
          websites.map((website, idx) => (
            <Col xs={12} sm={6} md={6} lg={4} xl={4} key={idx}>
              <div className="d-flex flex-column">
                <img
                  className="content__websites-img"
                  src={website.imgSrc}
                  alt="website"
                />
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};

Contents.Reviews = function ContentsReviews({ reviews }) {
  return (
    <div className="content__review">
      <Row>
        {reviews &&
          reviews.map((review, idx) => (
            <Col xs={24} sm={24} md={12} lg={12} xl={12} key={idx}>
              <blockquote className="d-flex mt-20">
                <AntdIcon
                  name="MessageFilled"
                  className="content__review-icon mr-20"
                />
                <div>
                  <p className="color-gray">{review.review}</p>
                  <div className="d-flex flex-row mt-16">
                    <img
                      className="content__review-img"
                      src={review.imgSrc}
                      alt="person"
                    />
                    <div className="content__review-name d-flex flex-column align-left">
                      <h6 className="color-gray">{review.reviewer}</h6>
                      <p>{review.companyAndPosition}</p>
                    </div>
                  </div>
                </div>
              </blockquote>
            </Col>
          ))}
      </Row>
    </div>
  );
};

Contents.TinyNumbers = function ContentsTinyNumbers({ data }) {
  return (
    <>
      <Contents.Title
        title="Tiny Numbers"
        subtitle="Tiny’s technology is embedded in applications you use every day from Eventbrite to Meetup.com."
      />
      <div className="content__tinynumbers">
        <Row>
          {data &&
            data.map((info, idx) => (
              <Col xs={24} sm={24} md={6} lg={6} xl={6} key={idx}>
                <div className="text-center">
                  <p className="fs-60">{info.number}</p>
                  <h6 className="tinynumbers-subtitle">{info.explanation}</h6>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

Contents.AdditionalLinks = function ContentsAdditionalLinks({ icons }) {
  return (
    <div>
      <Row>
        {icons &&
          icons.map((icon, idx) => (
            <Col xs={24} sm={24} md={8} lg={8} xl={8} key={idx}>
              <a href="">
                <IconBox
                  className="flex-row mg-5per"
                  iconName={icon.iconName}
                  title={icon.title}
                />
              </a>
            </Col>
          ))}
      </Row>
    </div>
  );
};

Contents.Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Contents.TextEditor.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
};

Contents.IBM.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
};

Contents.FileAndImage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
};

Contents.Websites.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  websites: PropTypes.array.isRequired,
};

Contents.Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

Contents.TinyNumbers.propTypes = {
  data: PropTypes.array.isRequired,
};

Contents.AdditionalLinks.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default Contents;
