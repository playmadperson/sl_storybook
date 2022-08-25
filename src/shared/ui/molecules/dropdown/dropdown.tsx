import {Dropdown as AntdDropdown, DropdownProps} from "antd";
import React from "react";
import { ClassNames, useTheme } from "@emotion/react";
import { dropdownOverlay } from "./dropdown.styles";


export const Dropdown = ({ children, ...rest }: DropdownProps) => {
  const theme = useTheme();

  return (
    <ClassNames>
      {({ css }) => (
        <AntdDropdown
          overlayClassName={css(dropdownOverlay(theme))}
          {...rest}
        >
          {children}
        </AntdDropdown>
      )}
    </ClassNames>
  );
};
