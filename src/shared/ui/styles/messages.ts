import { css, Theme } from "@emotion/react";

export const messagesStyles = (theme: Theme) => css`
  .ant-message {
    &-notice-content {
      border-radius: 4px;
      padding: 8px 16px;
      background-color: ${theme.colors.global.blue.space};
      box-shadow: ${theme.shadows.king.drop};
      color: ${theme.colors.global.contrast.default};
    }

    &-success {
      ${successMessage(theme)}
    }

    &-warning {
      ${warningMessage(theme)}
    }

    &-error {
      ${errorMessage(theme)}
    }

    &-info {
      ${infoMessage(theme)}
    }

    &-loading {
      ${loadingMessage(theme)}
    }
  }
`;

const successMessage = (theme: Theme) => css`
  svg {
    color: ${theme.colors.global.green.default};
  }
`;

const errorMessage = (theme: Theme) => css`
  svg {
    color: ${theme.colors.global.red.default};
  }
`;

const infoMessage = (theme: Theme) => css`
  svg {
    color: ${theme.colors.global.blue.king};
  }
`;

const warningMessage = (theme: Theme) => css`
  svg {
    color: ${theme.colors.global.orange.default};
  }
`;

const loadingMessage = (theme: Theme) => css`
  svg {
    color: ${theme.colors.global.blue.king};
  }
`;
