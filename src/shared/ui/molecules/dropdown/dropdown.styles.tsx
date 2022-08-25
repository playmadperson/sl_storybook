import { css, Theme } from "@emotion/react";

export const dropdownOverlay = (theme: Theme) => css`
  .ant-dropdown-arrow {
    background: ${theme.colors.defined.backgrounds.controls};

    &:before {
      background: ${theme.colors.defined.backgrounds.controls};
    }
  }
`;

export const dropdownMenu = (theme: Theme) => css`
  min-width: 118px;
  background-color: ${theme.colors.defined.backgrounds.controls};
  z-index: 2;

  .ant-dropdown-menu-item {
    color: ${theme.colors.global.white.default};
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
    &-active,
    &:hover {
      background-color: ${theme.colors.global.blue.marengo};
    }
  }
`;
