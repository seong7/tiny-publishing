import React from 'react';
import PropTypes from 'prop-types';
import {
  ToolOutlined,
  MobileOutlined,
  CoffeeOutlined,
  ShareAltOutlined,
  FormOutlined,
  FolderOpenFilled,
  UploadOutlined,
  QuestionOutlined,
  BookOutlined,
  MessageFilled,
} from '@ant-design/icons';

export default function AntdIcon({ name, className }) {
  switch (name) {
    case 'ToolOutlined':
      return <ToolOutlined className={className} />;
    case 'MobileOutlined':
      return <MobileOutlined className={className} />;
    case 'CoffeeOutlined':
      return <CoffeeOutlined className={className} />;
    case 'ShareAltOutlined':
      return <ShareAltOutlined className={className} />;
    case 'FormOutlined':
      return <FormOutlined className={className} />;
    case 'FolderOpenFilled':
      return <FolderOpenFilled className={className} />;
    case 'UploadOutlined':
      return <UploadOutlined className={className} />;
    case 'QuestionOutlined':
      return <QuestionOutlined className={className} />;
    case 'BookOutlined':
      return <BookOutlined className={className} />;
    case 'MessageFilled':
      return <MessageFilled className={className} />;

    default:
      return <></>;
  }
}

AntdIcon.defaultProps = {
  className: '',
};
AntdIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
