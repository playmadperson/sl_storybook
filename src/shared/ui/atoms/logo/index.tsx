import React from "react";
import { useTheme } from "@emotion/react";
import { SLVisionLogoLight, SLVisionLogo } from "shared/assets/logos";

export const Logo = () => {
  const theme = useTheme();

  return theme.name === "light" ? <SLVisionLogoLight /> : <SLVisionLogo />;
};
