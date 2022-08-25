import { css, Theme } from "@emotion/react";

const sidebar = (theme: Theme, offsetTop = 0) => css`
  height: calc(100vh - ${offsetTop}px);
  background-color: ${theme.colors.global.blue.space};

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }

  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left,
  .ant-menu-sub.ant-menu-inline {
    border-right: none;
    background: transparent;
  }

  .ant-menu-submenu.ant-menu-submenu-inline {
    &:hover {
      color: ${theme.colors.global.contrast.default};
    }

    .ant-menu-submenu-arrow {
      color: ${theme.colors.global.contrast.default};
    }
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: ${theme.colors.global.blue.marengo};
  }

  .ant-menu-submenu-title,
  .ant-menu-item {
    color: ${theme.colors.global.contrast.default};

    &:hover {
      color: ${theme.colors.global.contrast.default};
      background: ${theme.colors.global.blue.sapphire};
    }
  }

  a,
  a.active,
  a:hover {
    color: ${theme.colors.global.contrast.default};
  }
`;

const navMenu = css`
  height: 100%;
  overflow: auto;
  .ant-menu-item {
    padding-left: 32px;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const bottomChildrenWrapper = css`
  margin-top: auto;
`;

const bottomMenu = (theme: Theme) => css`
  & > li {
    &:last-of-type {
      position: relative;

      &:before {
        position: absolute;
        content: "";
        top: 0;
        right: 1px;
        left: 0;
        height: 1px;
        background: ${theme.colors.global.blue.mouse};
      }
    }
  }

  .ant-menu-inline .ant-menu-item:not(:last-child),
  .ant-menu-submenu-title,
  .ant-menu-item {
    margin: 0;
  }
`;

const collapseTriggerButton = (theme: Theme) => css`
  position: relative;
  left: -12px;
  color: ${theme.colors.global.contrast.default};
  font-size: 24px;
`;

export default {
  sidebar,
  navMenu,
  bottomChildrenWrapper,
  bottomMenu,
  collapseTriggerButton,
};
