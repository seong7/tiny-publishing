import React from 'react';
import PropTypes from 'prop-types';

export default function QnaList({ items }) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`page2__qnaList ${idx % 2 === 0 ? 'page2__bg-blue' : ''}`}
        >
          <h6>{item.question}</h6>
          <p dangerouslySetInnerHTML={{ __html: item.answer }} />
        </li>
      ))}
    </ul>
  );
}

QnaList.propTypes = {
  items: PropTypes.array.isRequired,
};
