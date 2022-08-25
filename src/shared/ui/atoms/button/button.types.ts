import type { ButtonVariants } from "shared/configs/themes/types";
import React from "react";

export type ButtonSize = "small" | "large";

export type ButtonProps =
  | React.ButtonHTMLAttributes<HTMLButtonElement> &
      (
        | {
            children?: React.ReactNode;
            variant: keyof Pick<ButtonVariants, "secondary">;
            size?: ButtonSize;
            fullwidth?: boolean;
            disabled?: boolean;
            toggled?: boolean;
            icon?: React.ReactElement;
          }
        | {
            children?: React.ReactNode;
            variant: keyof Exclude<ButtonVariants, "secondary">;
            size?: ButtonSize;
            fullwidth?: boolean;
            disabled?: boolean;
            toggled?: never;
            icon?: React.ReactElement;
          }
      );
