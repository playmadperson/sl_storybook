import { css, Theme } from "@emotion/react";
import { CheckboxProps } from "./checkbox.types";

export const checkboxStyles = (theme: Theme, size: CheckboxProps["size"]) => {
  const isSmall = size === "small";

  return css`
    color: ${theme.colors.defined.texts.default};

    &:hover {
      .ant-checkbox-inner,
      .ant-checkbox-checked:after {
        border-color: ${theme.colors.global.blue.lightPup};
        background-color: ${theme.colors.global.blue.lightPup};
        border-radius: 4px;
      }
    }

    &.ant-checkbox-wrapper-disabled {
      .ant-checkbox-disabled {
        & + span {
          color: ${theme.colors.global.blue.space};
        }

        .ant-checkbox-inner {
          background-color: ${theme.colors.global.blue.pup};
          border-color: ${theme.colors.global.blue.space} !important;
          box-shadow: none;

          &:after {
            border-color: ${theme.colors.global.blue.lightPup};
          }
        }
      }
    }

    .ant-checkbox {
      & + span {
        ${!isSmall &&
        css`
          position: relative;
          top: -0.3em;
        `}
      }

      &-input {
        &:focus + .ant-checkbox-inner {
          border-color: ${theme.colors.global.blue.lightPup};
          background-color: ${theme.colors.global.blue.lightPup};
        }
      }

      &-inner {
        width: ${isSmall ? 16 : 24}px;
        height: ${isSmall ? 16 : 24}px;
        background-color: ${theme.colors.global.blue.space};
        border-color: ${theme.colors.global.blue.lightPup};
        border-radius: 4px;
        box-shadow: ${theme.shadows.twilight.drop};
      }

      &-checked .ant-checkbox-inner {
        box-shadow: ${theme.shadows.twilight.inner};

        &:after {
          border-color: ${theme.colors.global.contrast.default};
          left: 27.5%;
          width: ${isSmall ? 5 : 6}px;
          height: ${isSmall ? 8 : 12}px;
          z-index: 2;
        }
      }
    }
  `;
};
