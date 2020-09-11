const data = [
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

export default data;
