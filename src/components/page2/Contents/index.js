import React from 'react';
import Contents from './Contents';

export default function ContentsLayout() {
  return (
    <Contents>
      <Contents.Pricing />
      <Contents.Included />
      <Contents.GetStarted />
      <Contents.Qna />
    </Contents>
  );
}
