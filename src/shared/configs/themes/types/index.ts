import "@emotion/react";
import type { LinksVariants } from "./link";
import type { ButtonVariants, ButtonColors } from "./button";
import type { Shadows, GlobalShadows } from "./shadows";
import { MainColors } from "./colors";

declare module "@emotion/react" {
  export interface Theme {
    name: string;
    colors: MainColors;
    shadows: GlobalShadows;
    buttons: ButtonVariants;
    links: LinksVariants;
  }
}

export type {
  LinksVariants,
  ButtonVariants,
  ButtonColors,
  Shadows,
  GlobalShadows,
  MainColors,
};
