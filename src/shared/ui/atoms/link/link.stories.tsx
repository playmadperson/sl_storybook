import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Story } from "@storybook/react";
import { Link as LinkComponent } from "./link";
import { LinkProps } from "./link.types";

export default {
  component: LinkComponent,
  title: "UI kit/Atoms/Link",
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  decorators: [
    (StoryToRender: Story) => (
      <MemoryRouter>
        <StoryToRender />
      </MemoryRouter>
    ),
  ],
};

export const Link: Story<LinkProps> = ({
  children,
  disabled,
  size,
  to,
  ...rest
}) => (
  <LinkComponent disabled={disabled} size={size} to="/" {...rest}>
    {children}
  </LinkComponent>
);
Link.args = {
  disabled: false,
  children: "Default link",
};
