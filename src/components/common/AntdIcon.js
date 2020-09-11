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
  LinkedinFilled,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
  DownOutlined,
  MenuOutlined,
  CommentOutlined,
  CloseOutlined,
  FormatPainterOutlined,
  AntDesignOutlined,
  ExportOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';

export default function AntdIcon({ name, className, style }) {
  switch (name) {
    case 'ToolOutlined':
      return <ToolOutlined className={className} style={style} />;
    case 'MobileOutlined':
      return <MobileOutlined className={className} style={style} />;
    case 'CoffeeOutlined':
      return <CoffeeOutlined className={className} style={style} />;
    case 'ShareAltOutlined':
      return <ShareAltOutlined className={className} style={style} />;
    case 'FormOutlined':
      return <FormOutlined className={className} style={style} />;
    case 'FolderOpenFilled':
      return <FolderOpenFilled className={className} style={style} />;
    case 'UploadOutlined':
      return <UploadOutlined className={className} style={style} />;
    case 'QuestionOutlined':
      return <QuestionOutlined className={className} style={style} />;
    case 'BookOutlined':
      return <BookOutlined className={className} style={style} />;
    case 'MessageFilled':
      return <MessageFilled className={className} style={style} />;
    case 'LinkedinFilled':
      return <LinkedinFilled className={className} style={style} />;
    case 'LinkedinOutlined':
      return <LinkedinOutlined className={className} style={style} />;
    case 'TwitterOutlined':
      return <TwitterOutlined className={className} style={style} />;
    case 'GithubOutlined':
      return <GithubOutlined className={className} style={style} />;
    case 'DownOutlined':
      return <DownOutlined className={className} style={style} />;
    case 'MenuOutlined':
      return <MenuOutlined className={className} style={style} />;
    case 'CommentOutlined':
      return <CommentOutlined className={className} style={style} />;
    case 'CloseOutlined':
      return <CloseOutlined className={className} style={style} />;
    case 'FormatPainterOutlined':
      return <FormatPainterOutlined className={className} style={style} />;
    case 'AntDesignOutlined':
      return <AntDesignOutlined className={className} style={style} />;
    case 'ExportOutlined':
      return <ExportOutlined className={className} style={style} />;
    case 'PlaySquareOutlined':
      return <PlaySquareOutlined className={className} style={style} />;

    default:
      return <></>;
  }
}

AntdIcon.defaultProps = {
  className: '',
  style: undefined,
};
AntdIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};
