import React from "react";
import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { ReactComponent as SunSvg } from "shared/assets/icons/sun.svg";
import { ReactComponent as MoonSvg } from "shared/assets/icons/moon.svg";

export const SunIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SunSvg} {...props} />
);

export const MoonIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={MoonSvg} {...props} />
);
