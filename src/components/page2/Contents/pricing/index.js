import React from 'react';
import Pricing from './Pricing';

export default function PricingLayout() {
  return (
    <Pricing>
      <div className="flex-column price-card-flex-wrapper">
        <Pricing.Cards
          plans={[
            {
              name: 'CLOUD ESSENTIAL',
              price: 25,
              options: [
                'Ticketing Support',
                'Premium Skins & Icons',
                '+9 Premium Plugins',
              ],
            },
            {
              name: 'CLOUD PROFESSIONAL',
              price: 75,
              options: [
                'Link Checker',
                'Spell Checker Pro',
                'Accessibility Checker',
              ],
            },
          ]}
        />
        <Pricing.Community />
      </div>
      <div className="price__company-wrapper">
        <Pricing.Company />
      </div>
    </Pricing>
  );
}
