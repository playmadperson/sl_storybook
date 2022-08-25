import { css, Theme } from "@emotion/react";
import { InputProps } from "./input.types";

type InputStylesProps = InputProps & {
  theme: Theme;
};

const resetUserAgentAutofill = (theme: Theme) => css`
  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    caret-color: ${theme.colors.defined.texts.default};
    -webkit-text-fill-color: ${theme.colors.defined.texts.default};
    transition: background-color 600000s ease-in-out 0s, color 600000s 0s,
      border-color 0.3s;
  }
`;

const disabledStyles = (theme: Theme) => css`
  pointer-events: none;
  color: ${theme.colors.defined.texts.muted};
  background-color: ${theme.colors.defined.backgrounds.disabled};
  box-shadow: none;
  border-color: ${theme.colors.global.blue.lightPup};
`;

const passwordInputStyles = (theme: Theme, disabled = false) => css`
  ${disabled && disabledStyles(theme)}
  &.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper {
    border-color: ${theme.colors.global.red.default};
  }

  .ant-input {
    background-color: transparent;
    color: ${theme.colors.defined.texts.default};

    &::placeholder {
      color: ${theme.colors.defined.texts.muted};
    }
  }

  .ant-input-password-icon {
    color: ${theme.colors.defined.texts.muted};

    &:hover {
      color: ${theme.colors.defined.texts.default};
    }
  }
`;

export const inputStyles = (props: InputStylesProps) => {
  const { theme, bordered, disabled } = props;
  return css`
    ${passwordInputStyles(theme, disabled)}
    ${resetUserAgentAutofill(theme)}

    color: ${theme.colors.defined.texts.default};
    background-color: ${theme.colors.defined.backgrounds.controls};
    box-shadow: ${theme.shadows.pressed};
    border-radius: 4px;

    ${bordered &&
    css`
      border: 1px solid ${theme.colors.global.blue.marengo};
    `}
    &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
    &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
      background-color: ${theme.colors.defined.backgrounds.controls};
      border-color: ${theme.colors.global.red.default};
    }

    input {
      transition: all 0.3s;
    }

    &::placeholder {
      color: ${theme.colors.defined.texts.muted};
    }

    &:disabled {
      ${disabledStyles(theme)}
    }

    &:hover,
    &:focus,
    &:active,
    &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
    &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):focus,
    &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):active {
      border-color: ${theme.colors.defined.primary};
      box-shadow: inherit;
    }

    &.ant-input-affix-wrapper-focused,
    &.ant-input-affix-wrapper:focus {
      box-shadow: none;
      border-color: ${theme.colors.defined.primary};
    }

    .ant-input-prefix {
      margin-right: 8px;
      margin-left: 4px;

      svg {
        color: ${theme.colors.global.blue.mouse};
      }
    }
  `;
};
