import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import Button from '../../../common/Button';

export default function PriceCard({ plan }) {
  function handleChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className="price__card flex-column page2__bg-blue">
      <h6>{plan.name}</h6>
      <div className="flex-row price__card-price">
        <span className="dollar">$</span>
        <div className="flex-column">
          <h2>{plan.price}</h2>
          <span>per month</span>
        </div>
      </div>
      <i>Billed Annually (2 months free)</i>
      <div className="price__switch-wrapper">
        <span>Monthly</span>
        <Switch
          defaultChecked
          onChange={handleChange}
          className="price__switch"
        />
        <span>Annually</span>
      </div>
      <span className="price__extra">
        {plan.name === 'CLOUD ESSENTIAL'
          ? 'Everything in Community plus:'
          : 'Everything in Cloud Essential plus:'}
      </span>
      <ul className="price__option-list flex-column">
        {plan.options.map((option, idx) => (
          <li key={idx}>{option}</li>
        ))}
      </ul>
      <Button className="page2__button price__button">Start Your Trial</Button>
      <p>14 day free trial</p>
    </div>
  );
}

PriceCard.propTypes = {
  plan: PropTypes.object.isRequired,
};
