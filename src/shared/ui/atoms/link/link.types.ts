import { LinkProps as RouterLinkProps } from "react-router-dom";
import React from "react";

export type LinkStyleProps = {
  size?: "small" | "large";
  disabled?: boolean;
};

export type LinkProps = RouterLinkProps &
  LinkStyleProps & {
    children?: React.ReactNode;
  };
