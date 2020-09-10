import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import AntdIcon from '../../../common/AntdIcon';

const { SubMenu } = Menu;

export default function InlineMenu({ navMenu }) {
  const Icon = ({ title }) => (
    <span>
      {title}{' '}
      <AntdIcon
        name="DownOutlined"
        style={{
          position: 'relative',
          top: '5px',
          fontSize: '10px',
        }}
      />
    </span>
  );
  Icon.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <Menu
      style={{
        position: 'absolute',
        top: window.innerWidth > 575 ? '68px' : '50px',
        width: '100%',
        zIndex: 10,
      }}
      mode="inline"
    >
      {navMenu &&
        navMenu.map((depth1, idx1) => {
          /* 1번 depth 메뉴 영역  */
          if (!depth1.children) {
            return (
              <Menu.Item key={`${idx1}`}>
                <a href="">{depth1.title}</a>
              </Menu.Item>
            );
          }

          return (
            <SubMenu key={idx1} icon={<Icon title={depth1.title} />}>
              {depth1.children.map((depth2, idx2) => {
                /* 2번 depth 메뉴 영역  */
                if (!depth2.children) {
                  return (
                    <Menu.Item key={`${idx1}-${idx2}}`}>
                      <a href="">{depth2.title}</a>
                    </Menu.Item>
                  );
                }

                return (
                  <SubMenu key={`${idx1}-${idx2}`} title={depth2.title}>
                    {depth2.children &&
                      depth2.children.map((depth3, idx3) => (
                        /* 3번 depth 메뉴 영역 (마지막) */
                        <Menu.Item key={`${idx1}-${idx2}-${idx3}`}>
                          <a href="">{depth3.title}</a>
                        </Menu.Item>
                      ))}
                  </SubMenu>
                );
              })}
            </SubMenu>
          );
        })}
    </Menu>
  );
}

InlineMenu.propTypes = {
  navMenu: PropTypes.array.isRequired,
};
