import React from "react";
// import { MemoryRouter } from "react-router-dom";
import { Story } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "./checkbox";
import { CheckboxProps } from "./checkbox.types";
// import { LinkProps } from "./checkbox.types";

export default {
  component: CheckboxComponent,
  title: "UI kit/Atoms/Checkbox",
  argTypes: {
    checked: {
      control: "boolean",
    },
  },
  // decorators: [
  //   (StoryToRender: Story) => (
  //     <MemoryRouter>
  //       <StoryToRender />
  //     </MemoryRouter>
  //   ),
  // ],
};

export const Checkbox: Story<CheckboxProps> = ({
  children,
  disabled,
  size,
  ...rest
}) => (
  <CheckboxComponent size={size} disabled={disabled} {...rest}>
    {children}
  </CheckboxComponent>
);
Checkbox.args = {
  disabled: false,
  children: "Checkbox",
  // checked: true,
};
