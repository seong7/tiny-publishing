import React from 'react';
import PropTypes from 'prop-types';
import PriceCard from './PriceCard';
import Button from '../../../common/Button';
import AntdIcon from '../../../common/AntdIcon';

export default function Pricing({ children, ...props }) {
  return (
    <div className="page2__pricing-wrapper" {...props}>
      {children}
    </div>
  );
}

Pricing.Cards = function PricingCards({ plans }) {
  return (
    <div className="price__card-wrapper">
      {plans.map((plan, idx) => (
        <PriceCard plan={plan} key={idx} />
      ))}
    </div>
  );
};

Pricing.Community = function PricingCommunity() {
  return (
    <div className="price__community-wrapper page2__bg-blue">
      <h6>COMMUNITY</h6>
      <h3>Free Forever</h3>
      <p>
        The open source editor you know and love, free forever and ready for
        commercial use.
      </p>
      <div className="flex-row price__community-buttons">
        <Button className="page2__button">Get Started</Button>
        <AntdIcon name="GithubOutlined" />
        <a href="">View on GitHub</a>
      </div>
    </div>
  );
};

Pricing.Company = function PricingCompany() {
  return (
    <div className="price__company">
      <div className="company-header">
        <AntdIcon name="CheckCircleFilled" className="check-svg" />
        <span>Custom plans for self-hosted and OEM purchases</span>
      </div>
      <h3>Custom</h3>
      <p className="price__company-subtitle">
        Everything in Cloud Professional plus:
      </p>
      <div className="company-plus">
        <p>Comments & AtMentions</p>
        <p>Dual Deployment</p>
        <p>Enterprise Support</p>
        <p>Self-Hosted Option</p>
        <p>Account Manager</p>
        <p>OEM Pricing</p>
        <p>SLA Agreements</p>
        <p>Real-time Collaboration</p>
      </div>
      <p>You&#39;re in good company</p>
      <div className="company-img-wrapper">
        <img src="/public/svg/salseloft-logo.svg" alt="company" height={29} />
        <img src="/public/svg/adobe-logo.svg" alt="company" height={31} />
      </div>
      <div className="company-img-wrapper">
        <img src="/public/svg/boeing-logo.svg" alt="company" height={31} />
        <img src="/public/svg/nasdaq-logo.svg" alt="company" height={32} />
      </div>
      <div className="company-img-wrapper">
        <img src="/public/svg/microsoft-logo.svg" alt="company" height={27} />
        <img src="/public/svg/hcl-logo.svg" alt="company" height={15} />
      </div>
      <div className="company-img-wrapper">
        <img src="/public/svg/visa-logo.svg" alt="company" height={23} />
        <img src="/public/svg/atlassian-logo.svg" alt="company" height={21} />
      </div>
      <Button className="page2__button company-button">Contact Sales</Button>
    </div>
  );
};

Pricing.propTypes = {
  children: PropTypes.node.isRequired,
};
Pricing.Cards.propTypes = {
  plans: PropTypes.array.isRequired,
};
