import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import AntdIcon from '../../../common/AntdIcon';

const Overlay = {};

export default Overlay;

Overlay.Title = function OverlayTitle({ title }) {
  return <p className="overlay__title">{title}</p>;
};

Overlay.Subtitle = function OverlaySubtitle({ subtitle }) {
  return <p className="overlay__subtitle">{subtitle}</p>;
};

Overlay.List = function OverlayList({ items }) {
  return (
    <ul className="overlay__list">
      {items.map((item, idx) => (
        <li key={idx}>
          <a href="">&gt; {item}</a>
        </li>
      ))}
    </ul>
  );
};

Overlay.ImageList = function OverlayList({ items }) {
  return (
    <ul className="overlay__list img-list">
      {items.map((item, idx) => (
        <li key={idx}>
          <a href="">
            <img src={item.imgSrc} alt="popular partners" />
            <div className="d-inline-block">
              <p>{item.title}</p>
              <span className="overlay__subtitle">{item.subtitle}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

Overlay.IconList = function OverlayList({ items, className }) {
  return (
    <ul className={`overlay__list img-list icon-list ${className}`}>
      {items.map((item, idx) => (
        <li key={idx}>
          <a href="">
            <div>
              <div className="icon-wrapper">
                <AntdIcon name={item.iconName} />
              </div>
            </div>
            <div>
              <p>{item.title}</p>
              <span className="overlay__subtitle">{item.subtitle}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

Overlay.Product = function OverlayProduct() {
  return (
    <div>
      <Row className="header__overlay-wrapper">
        <Col className="overlay_content-wrapper mr-20" flex="240px">
          <a href="">
            <Overlay.Title title="TinyMCE" />
            <Overlay.Subtitle subtitle="The world's most popular JavaScript library for rich text editing." />
          </a>
          <Overlay.List
            items={['Premium Plugins', 'Core Plugins', 'Technology Partners']}
          />
        </Col>
        <Col className="overlay_content-wrapper" flex="240px">
          <a href="">
            <Overlay.Title title="Tiny Drive" />
            <Overlay.Subtitle subtitle="Awesome Image upload and asset management in the cloud." />
          </a>
          <Overlay.List
            items={[
              'Tiny Drive Features',
              'Demos',
              'Documentation',
              'Get Tiny Drive',
            ]}
          />
        </Col>
        <Col className="overlay_content-wrapper" flex="auto" />
        <Col
          className="overlay_content-wrapper last"
          xs={{ flex: 6 }}
          sm={{ flex: 6 }}
          md={{ flex: 6 }}
          lg={{ flex: '600px' }}
        >
          <img
            className="overlay__elroboto-img"
            src="/image/elroboto.png"
            alt="elroboto"
          />
          <div className="overlay__featured-wrapper">
            <Overlay.Title title="Featured Success Story" />
            <Overlay.Subtitle subtitle="Discover how El Roboto saves clients thousands of dollars every month with Tiny." />
            <div className="overlay__review">
              <p>
                TinyMCE is an easy-to-use, intuitive tool, and everyone is happy
                using it. The way that we have been able to customize the editor
                is fantastic.
              </p>
              <span>— Paul Caisley, Owner</span>
            </div>
            <Overlay.List items={['See all Case Studies']} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

Overlay.Plugins = function OverlayPlugins() {
  return (
    <div>
      <Row className="header__overlay-wrapper">
        <Col className="overlay_content-wrapper mr-20" flex="240px">
          <Overlay.Title title="Plugins" />
          <Overlay.Subtitle subtitle="The TinyMCE playform contains more than 50 plugins, both premium and free." />
          <Overlay.List
            items={['Premium Plugins', 'Core Plugins', 'Technology Partners']}
          />
        </Col>
        <Col className="overlay_content-wrapper" flex="auto" />
        <Col className="overlay_content-wrapper mr-30">
          <Overlay.Title title="Popular Premium Plugins" />
          <div className="d-flex">
            <Overlay.IconList
              items={[
                {
                  title: 'Tiny Essential Plan',
                  subtitle:
                    'Our Essential plan contains all Tiny productivity solutions.',
                  iconName: 'AntDesignOutlined',
                },
                {
                  title: 'Format Painter',
                  subtitle:
                    'Copy and paste formatting, such as font style and size between content.',
                  iconName: 'FormatPainterOutlined',
                },
                {
                  title: 'Spellchecker Pro',
                  subtitle:
                    'Because spelling matters to you and your customers, Spell Checker Pro is for you.',
                  iconName: 'FormOutlined',
                },
              ]}
            />
            <Overlay.IconList
              className="removable-list"
              items={[
                {
                  title: 'Tiny Professional Plan',
                  subtitle:
                    'This plan contains all premium plugins needed for professional software teams.',
                  iconName: 'AntDesignOutlined',
                },
                {
                  title: 'PowerPaste',
                  subtitle:
                    'Provides clean copy and paste of content from Word, Excel, and other popular tools.',
                  iconName: 'ExportOutlined',
                },
                {
                  title: 'Enhanced Media Embed',
                  subtitle:
                    'Add enriched media previews to TinyMCE from the most popular web sources.',
                  iconName: 'PlaySquareOutlined',
                },
              ]}
            />
          </div>
          <Overlay.List items={['View all Premium Plugins']} />
        </Col>
        <Col className="overlay_content-wrapper" flex="220px">
          <Overlay.Title title="Popular Tech Partners" />
          <Overlay.ImageList
            items={[
              {
                title: 'LoopIndex',
                subtitle: 'Track changes and comments.',
                imgSrc: '/image/loopindex.png',
              },
              {
                title: 'Wiris',
                subtitle: 'Math and equation editing.',
                imgSrc: '/image/wiris.png',
              },
              {
                title: 'Nifty Images',
                subtitle: 'Dynamic email content.',
                imgSrc: '/image/nifty.png',
              },
            ]}
          />
          <Overlay.List items={['View all Tech Partners']} />
        </Col>
      </Row>
    </div>
  );
};

Overlay.Title.propTypes = {
  title: PropTypes.string.isRequired,
};
Overlay.Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
Overlay.List.propTypes = {
  items: PropTypes.array.isRequired,
};
Overlay.ImageList.propTypes = {
  items: PropTypes.array.isRequired,
};

Overlay.IconList.defaultProps = {
  className: '',
};
Overlay.IconList.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};
