import React, { useState } from 'react';
import { Switch, Row, Col } from 'antd';
import { GithubOutlined, CheckCircleFilled } from '@ant-design/icons';

const plans = [
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
    options: ['Link Checker', 'Spell Checker Pro', 'Accessibility Checker'],
  },
];

const tableColumns = [
  'COMMUNITY',
  'CLOUD ESSENTIAL',
  'CLOUD PROFESSIONAL',
  'CUSTOM',
];

const tableData = [
  {
    title: 'Core Editor',
    table2_flag: [true, true, true, true],
    columns: [
      {
        title: 'Open Source TinyMCE',
        subtitle:
          'The Open Source editor known and loved around the world. Includes all core community plugins, localized into 46 languages.',
        flag: [true, true, true, true],
      },
    ],
  },
  {
    title: 'Customization',
    table2_flag: [true, true, true, true],
    columns: [
      {
        title: 'Full CSS Control',
        subtitle: 'Control the CSS of your editor with ease.',
        flag: [true, true, true, true],
      },
      {
        title: 'Premium Skins & Icons',
        subtitle:
          'Quickly match your editor UI to popular design systems. Bootstrap, Material Design & more. Learn more',
        flag: [false, true, true, true],
      },
    ],
  },
  {
    title: 'Premium Plugins',
    table2_flag: [true, true, true, true],
    columns: [
      {
        title: 'Tiny Drive',
        subtitle:
          'Effortless file and image management in the cloud for any application. Free storage and bandwidth with your Tiny Account. ',
        flag: [true, true, true, true],
      },
      {
        title: 'PowerPaste',
        subtitle:
          'PowerPaste provides clean/copy html paste of content from Word, Excel, and other popular content tools.',
        flag: [false, true, true, true],
      },
      {
        title: 'Advanced Code Editor',
        subtitle:
          'Get an IDE in TinyMCE, and make it easier to modify the HTML underneath your WYSIWYG content.',
        flag: [false, true, true, true],
      },
      {
        title: 'Enhanced Media Embed',
        subtitle:
          'Get more beautiful content with media previews from the most popular sources, including Facebook, YouTube and Spotify.',
        flag: [false, true, true, true],
      },
      {
        title: 'Format Painter',
        subtitle:
          'Copy and paste formatting, such as font style and size, from one content location to another.',
        flag: [false, true, true, true],
      },
      {
        title: 'Page Embed',
        subtitle:
          'The Page Embed plugin allows you to insert an iframe and embed a webpage at any point in the content.',
        flag: [false, true, true, true],
      },
      {
        title: 'Permanent Pen',
        subtitle:
          'Used when distinctly styled text needs to be repeatedly added. Great time saver!',
        flag: [false, true, true, true],
      },
      {
        title: 'Case Change',
        subtitle:
          'Toggle selected text quickly between Title Case, UPPERCASE and lowercase.',
        flag: [false, true, true, true],
      },
      {
        title: 'Checklists',
        subtitle:
          'Help your users organise critical tasks and improve productivity with this universal tool.',
        flag: [false, true, true, true],
      },
      {
        title: 'Advanced Tables',
        subtitle:
          'Take your tables to the next level with advanced sorting and table functionality.',
        flag: [false, true, true, true],
      },
      {
        title: 'Advanced Export',
        subtitle:
          'Soon to be released - export your content to your favourite file types',
        flag: [false, 'Coming 2020', 'Coming 2020', 'Coming 2020'],
      },
      {
        title: 'Spell Checker Pro',
        subtitle:
          'Typos are a thing of the past with multilingual spell checking and custom dictionaries.',
        flag: [false, false, true, true],
      },
      {
        title: 'Link Checker',
        subtitle:
          'Automatically check if a URL is valid and never again frustrate your users with a broken link.',
        flag: [false, false, true, true],
      },
      {
        title: 'Accessibility Checker',
        subtitle:
          'Reach more users and ensure your content complies with WCAG and Aria standards.',
        flag: [false, false, true, true],
      },
      {
        title: 'AtMentions',
        subtitle:
          'Kickstart conversations in your site or app by allowing users to @mention others in your content.',
        flag: [false, false, false, true],
      },
      {
        title: 'Tiny Comments',
        subtitle:
          'Improve team collaboration and engagement through comments and threaded conversations.',
        flag: [false, false, false, true],
      },
      {
        title: 'Real-time Collaboration',
        subtitle:
          'The next revolution - Collaboration in your application with the best UX on the market.',
        flag: [false, false, false, 'Coming 2020'],
      },
    ],
  },
  {
    title: 'Support',
    table2_flag: [false, true, true, true],
    columns: [
      {
        title: 'Online Ticketing Support (monthly)',
        subtitle:
          'Access personalized support through our dedicated support team.',
        flag: [false, '2x Tickets', '2x Tickets', 'Unlimited'],
      },
      {
        title: 'Phone Support',
        subtitle:
          'If speaking with someone on the phone is important to your team you have the ability to purchase phone support as an additional add-on.',
        flag: [false, false, false, 'Available'],
      },
      {
        title: 'Customer Success Manager',
        subtitle:
          'Have your own dedicated Customer Success Manager to help onboard and manage your account throughout your Tiny journey.',
        flag: [false, false, false, true],
      },
      {
        title: 'Invoice Billing',
        subtitle: 'If you require an invoice in order to purchase TinyMCE.',
        flag: [false, false, false, true],
      },
    ],
  },
  {
    title: 'Deployment',
    table2_flag: [true, true, true, true],
    columns: [
      {
        title: 'Cloud Usage (monthly)',
        subtitle:
          'The number of editor loads you are entitled to use each month under this plan. Tiny Cloud serves the JavaScript and related front-end files from a specially configured AWS CloudFront-based content delivery network.',
        flag: ['Unlimited', '2,500 loads', '10,000 loads', 'Unlimited'],
      },
      {
        title: 'Tiny Drive Usage (monthly)',
        flag: [
          '500 MB storage / 2.5 GB of bandwidth',
          '2.5 GB storage / 25 GB of bandwidth',
          '10 GB storage / 100 GB of bandwidth',
          'Unlimited storage / unlimited bandwidth',
        ],
      },
      {
        title: 'Domains',
        subtitle:
          'A specific website domain including all sub-domains associated with the main website.',
        flag: ['Unlimited', '1', '1', 'Unlimited'],
      },
      {
        title: 'SaaS/OEM',
        subtitle:
          'Your customers pay a subscription and/or you onsell TinyMCE as part of your own solution.',
        flag: [true, true, true, true],
      },
      {
        title: 'White Label',
        subtitle: 'The ability to remove “powered by Tiny” from your instance.',
        flag: [false, true, true, true],
      },
      {
        title: 'Commercial Agreement',
        subtitle:
          'Access our commercial agreement options allowing you to utilise TinyMCE outside of our Open Source licence.',
        flag: [false, true, true, true],
      },
      {
        title: 'Self-Hosted Deployments',
        subtitle: 'The option to host TinyMCE on your own servers.',
        flag: [false, false, false, true],
      },
      {
        title: 'Dual Deployments',
        subtitle:
          'You can deploy the editor and plugins in a mixed Cloud and Self-Hosted environment. For example, you could host the core editor for maximum up-time and selected extensions in the Cloud for ease of maintenance and scaling.',
        flag: [false, false, false, true],
      },
      {
        title: 'Custom Licensing',
        subtitle:
          'Available for customers who need custom licensing in order to suit their business and environment.',
        flag: [false, false, false, true],
      },
    ],
  },
  {
    title: 'Integrations',
    table2_flag: [true, true, true, true],
    columns: [
      {
        title: 'React',
        subtitle:
          'The Official TinyMCE React component integrates TinyMCE into React projects.',
        flag: [true, true, true, true],
      },
      {
        title: 'Angular',
        subtitle:
          'The Official TinyMCE Angular 4+ component integrates TinyMCE into Angular projects.',
        flag: [true, true, true, true],
      },
      {
        title: 'Vue',
        subtitle:
          'The Official TinyMCE Vue.js component integrates TinyMCE into Vue.js projects.',
        flag: [true, true, true, true],
      },
      {
        title: 'Swing',
        subtitle:
          'Users can easily configure the TinyMCE editor in Swing through the TinyMCE for Swing integration.',
        flag: [false, false, false, true],
      },
    ],
  },
  {
    title: 'Security',
    table2_flag: [true, true, true, true],
    columns: [
      {
        title: 'Account Usage Metrics',
        subtitle:
          'The ability to see how end users are interacting with TinyMCE including editor load usage.',
        flag: ['Coming 2020', 'Coming 2020', 'Coming 2020', 'Coming 2020'],
      },
      {
        title: 'Domain Management',
        subtitle:
          'Manage what web domains are able to access your instance of TinyMCE.',
        flag: [true, true, true, true],
      },
      {
        title: 'JSON Web Tokens',
        subtitle:
          'Gain access to JSON Web Token to security transmit information.',
        flag: [true, true, true, true],
      },
      {
        title: 'Private RSA Keys',
        subtitle:
          'Private RSA Key is used for authentication and a symmetric key exchange during establishment of an SSL/TLS session.',
        flag: [true, true, true, true],
      },
    ],
  },
];

const qnaData = [
  {
    question: 'What is an "editor load" when talking about Tiny Cloud Usage?',
    answer:
      'An editor load occurs each time TinyMCE is initialized in your application. For example, if 100 users load TinyMCE 10 times each, there were 1,000 editor loads. This is recorded with a request to our server when the "init" function is called in TinyMCE. <a href="">More details in this blog post.</a>',
  },
  {
    question: 'How many "loads" do I need?',
    answer:
      'This depends on your use. However, all of our plans have been developed to take in the average editor load number.',
  },
  {
    question: 'How do I estimate how many "loads" I need?',
    answer:
      'Take the number of times you imagine a developer, or user, will load your editor on a page in a normal month and this is how many editor loads you will need.',
  },
  {
    question: 'What do you mean by OEM or SaaS?',
    answer:
      'An OEM or SaaS partnership refers to a software company embedding our technology into its product offering for resale. Pricing is often customized to use case and you should contact our sales team to discuss your scenario.',
  },
  {
    question: 'What happens if I go over the limits?',
    answer:
      'At this stage, we do not bill for usage over your limits during the current month. However, you may be required to purchase an additional editor load package in the future.',
  },
  {
    question: 'Can I change my plan?',
    answer: 'Yes. Please reach out to our sales support team for help.',
  },
  {
    question: 'How will you notify me if I go over my editor loads?',
    answer:
      'We will notify you at the end of the calendar month if you exceed your usage quotas.',
  },
  {
    question: 'How is the price calculated?',
    answer:
      'Cloud pricing is based on the maximum number of editor loads during a month.',
  },
  {
    question: 'Can I cancel my subscription at anytime?',
    answer:
      'We offer monthly and annual subscription terms. You can cancel your subscription at the end of the term.',
  },
  {
    question: 'How is usage tracked?',
    answer:
      'For Cloud, editor loads are tracked on a calendar month basis. In 2020 we will be introducing usage data into your account systems so you can keep an eye on how many editor loads you use each month.',
  },
  {
    question: 'What are the detailed terms?',
    answer:
      'The <a href="">Cloud Services Subscription Agreement</a> and the <a href="">Self-Hosted Software License Agreement</a> explain rights, responsibilities, and support levels. For open source users, the terms of the <a href="">GNU Lesser General Public License version 3</a>. If you have any queries, please contact us.',
  },
  {
    question: 'What if my usage fluctuates?',
    answer:
      'In general, your plan should cover your maximum usage of the TinyMCE editor. Contact the sales team to discuss your needs if your usage fluctuates significantly.',
  },
];

export default function ContentsLayout() {
  function handleChange() {
    console.log('Change');
  }
  return (
    <div>
      <div>
        <div className="page2__contents-titleWrapper max-width-1100 center">
          <h2>Pricing Plans</h2>
        </div>
        <section className="max-width-1100 center page2__contents-section">
          <div className="page2__pricing-wrapper">
            <div className="flex-column price-card-flex-wrapper">
              <div className="price__card-wrapper">
                {plans.map((plan, idx) => (
                  <div
                    className="price__card flex-column page2__bg-blue"
                    key={idx}
                  >
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
                      {plan.options.map((option, idx2) => (
                        <li key={idx2}>{option}</li>
                      ))}
                    </ul>
                    <button className="page2__button price__button">
                      Start Your Trial
                    </button>
                    <p>14 day free trial</p>
                  </div>
                ))}
              </div>

              <div className="price__community-wrapper page2__bg-blue">
                <h6>COMMUNITY</h6>
                <h3>Free Forever</h3>
                <p>
                  The open source editor you know and love, free forever and
                  ready for commercial use.
                </p>
                <div className="flex-row price__community-buttons">
                  <button className="page2__button">Get Started</button>
                  <GithubOutlined />
                  <a href="">View on GitHub</a>
                </div>
              </div>
            </div>

            <div className="price__company-wrapper">
              <div className="price__company">
                <div className="company-header">
                  <CheckCircleFilled className="check-svg" />
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
                  <img
                    src="/public/svg/salseloft-logo.svg"
                    alt="company"
                    height={29}
                  />
                  <img
                    src="/public/svg/adobe-logo.svg"
                    alt="company"
                    height={31}
                  />
                </div>
                <div className="company-img-wrapper">
                  <img
                    src="/public/svg/boeing-logo.svg"
                    alt="company"
                    height={31}
                  />
                  <img
                    src="/public/svg/nasdaq-logo.svg"
                    alt="company"
                    height={32}
                  />
                </div>
                <div className="company-img-wrapper">
                  <img
                    src="/public/svg/microsoft-logo.svg"
                    alt="company"
                    height={27}
                  />
                  <img
                    src="/public/svg/hcl-logo.svg"
                    alt="company"
                    height={15}
                  />
                </div>
                <div className="company-img-wrapper">
                  <img
                    src="/public/svg/visa-logo.svg"
                    alt="company"
                    height={23}
                  />
                  <img
                    src="/public/svg/atlassian-logo.svg"
                    alt="company"
                    height={21}
                  />
                </div>
                <button className="page2__button company-button">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="page2__contents-titleWrapper max-width-1100 center">
          <h2>What's Included:</h2>
        </div>

        {/* table1 */}
        <section className="max-width-1100 center page2__contents-section page2__contents-table1">
          {tableData.map((table, idx) => (
            <section className="page2__contents-table" key={idx}>
              <Row className="title-row">
                <Col className="contents-table-titleWrapper">
                  <h2>{table.title}</h2>
                </Col>
                <Col>
                  <p className="contents__tabe-coloumn">COMMUNITY</p>
                </Col>
                <Col>
                  <p className="contents__tabe-coloumn">CLOUD ESSENTIAL</p>
                </Col>
                <Col>
                  <p className="contents__tabe-coloumn">CLOUD PROFESSIONAL</p>
                </Col>
                <Col>
                  <p className="contents__tabe-coloumn">CUSTOM</p>
                </Col>
              </Row>
              {table.columns.map((column, idx1) => (
                <Row
                  key={idx1}
                  className={`contents__table-rowWrapper ${
                    idx1 % 2 === 0 ? 'page2__bg-blue' : ''
                  }`}
                >
                  <Col className="contents__table-rowTitle">
                    <TableList item={column} />
                  </Col>
                  {column.flag.map((flag, idx2) => {
                    const component =
                      typeof flag === 'string' ? (
                        <p className="table-rowText">{flag}</p>
                      ) : (
                        <CheckCircleFilled className="contents__table-icon" />
                      );
                    return (
                      <Col key={idx2} className="contents__table-flagWrapper">
                        {flag ? (
                          component
                        ) : (
                          <CheckCircleFilled className="contents__table-icon invisible" />
                        )}
                      </Col>
                    );
                  })}
                </Row>
              ))}
            </section>
          ))}
        </section>

        {/* Table 2 */}

        <section className="max-width-1100 center page2__contents-section page2__contents-table2">
          {tableColumns.map((columnName, columnIdx) => (
            <section key={`1-${columnIdx}`} className="page2__contents-table">
              <h3>{columnName}</h3>
              {tableData.map((table, idx) => (
                <div key={`2-${idx}`} className="contents-table2">
                  {table.table2_flag[columnIdx] ? (
                    <>
                      <Row className="title-row">
                        <Col className="contents-table-titleWrapper">
                          <h2>{table.title}</h2>
                        </Col>
                      </Row>
                      {table.columns.map((column, idx1) => {
                        const flag = column.flag[columnIdx];
                        if (flag) {
                          const component =
                            typeof flag === 'string' ? (
                              <p className="table-rowText">{flag}</p>
                            ) : (
                              <CheckCircleFilled className="contents__table-icon" />
                            );
                          return (
                            <div key={`3-${idx1}`}>
                              <Row
                                key={idx1}
                                className={`contents__table-rowWrapper ${
                                  idx1 % 2 === 1 ? 'page2__bg-blue' : ''
                                }`}
                              >
                                <Col className="contents__table-rowTitle">
                                  <TableList item={column} />
                                </Col>
                                <Col className="contents__table-flagWrapper">
                                  {flag ? (
                                    component
                                  ) : (
                                    <CheckCircleFilled className="contents__table-icon invisible" />
                                  )}
                                </Col>
                              </Row>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </>
                  ) : null}
                </div>
              ))}
            </section>
          ))}
        </section>
      </div>

      <div>
        <div className="page2__contents-blue">
          <div className="page2__contents-titleWrapper max-width-1100 center">
            <h2>Get Started</h2>
          </div>
        </div>
        <section className="max-width-1100 center page2__contents-section">
          <div className="getStarted-wrapper">
            <div className="getStarted-card page2__bg-blue">
              <h6>Community</h6>
              <button className="page2__button">Get Started</button>
            </div>
            <div className="getStarted-card page2__bg-blue">
              <h6>Cloud Essential</h6>
              <button className="page2__button">Start Your Trial</button>
            </div>
            <div className="getStarted-card page2__bg-blue">
              <h6>Cloud Professional</h6>
              <button className="page2__button">Start Your Trial</button>
            </div>
            <div className="getStarted-card page2__bg-blue getStarted-img-card">
              <h6>Custom</h6>
              <button className="page2__button">Contact Sales</button>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="page2__contents-blue">
          <div className="page2__contents-titleWrapper max-width-1100 center">
            <h2>Have a question?</h2>
            <button className="page2__button">Contact Sales</button>
          </div>
        </div>
        <section className="max-width-1100 center page2__contents-section">
          <ul>
            {qnaData.map((item, idx) => (
              <li
                key={idx}
                className={`page2__qnaList ${
                  idx % 2 === 0 ? 'page2__bg-blue' : ''
                }`}
              >
                <h6>{item.question}</h6>
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

const TableList = ({ item }) => {
  const [isSubtitleVislble, setIsSubTitleVislble] = useState(false);
  const handleClick = () => setIsSubTitleVislble((prev) => !prev);
  return (
    <div className="table-title-wrapper" onClick={handleClick}>
      <h4>{item.title}</h4>
      {item.subtitle && isSubtitleVislble && <p>{item.subtitle}</p>}
    </div>
  );
};
