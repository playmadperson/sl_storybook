import { css, Theme } from "@emotion/react";

export const formWrapper = (theme: Theme) => css`
  .ant-form-item-label > label,
  &.ant-form {
    color: ${theme.colors.defined.texts.default};
  }
  .ant-form-item-explain-error {
    color: ${theme.colors.global.red.default};
  }
`;
