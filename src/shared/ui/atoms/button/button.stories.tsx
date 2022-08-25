import React from "react";
import { css } from "@emotion/react";
import { Story, Meta } from "@storybook/react";
import { GlobalOutlined } from "@ant-design/icons";
import themes from "shared/configs/themes";
import { Button } from "./button";
import { ButtonProps } from "./button.types";

export default {
  component: Button,
  title: "UI kit/Atoms/Buttons",
  argTypes: {
    variant: {
      options: Object.keys(themes.dark.buttons),
      control: { type: "select" },
    },
    disabled: { control: "boolean" },
    fullwidth: { control: "boolean" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args): React.ReactElement => {
  const { variant, size, fullwidth, children, toggled, ...rest } = args;
  if (toggled) {
    return (
      <Button
        variant={variant}
        size={size}
        fullwidth={fullwidth}
        toggled={toggled}
        {...rest}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button variant={variant} size={size} fullwidth={fullwidth} {...rest}>
      {children}
    </Button>
  );
};

export const Primary = Template.bind({});
Primary.parameters = { controls: { exclude: ["toggled"] } };
Primary.args = {
  variant: "primary",
  children: "Primary",
  fullwidth: false,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
  fullwidth: false,
  toggled: false,
  disabled: false,
};

export const SecondaryWithTogglingState = Template.bind({});
SecondaryWithTogglingState.args = {
  variant: "secondary",
  children: "Secondary button can be toggled",
  fullwidth: false,
  toggled: true,
  disabled: false,
};

export const Success = Template.bind({});
Success.parameters = { controls: { exclude: ["toggled"] } };
Success.args = {
  variant: "success",
  children: "Success",
  fullwidth: false,
  disabled: false,
};

export const Danger = Template.bind({});
Danger.parameters = { controls: { exclude: ["toggled"] } };
Danger.args = {
  variant: "danger",
  children: "Danger",
  fullwidth: false,
  disabled: false,
};

export const Info = Template.bind({});
Info.parameters = { controls: { exclude: ["toggled"] } };
Info.args = {
  variant: "info",
  children: "Info",
  fullwidth: false,
  disabled: false,
};

export const Warning = Template.bind({});
Warning.parameters = { controls: { exclude: ["toggled"] } };
Warning.args = {
  variant: "warning",
  children: "Warning",
  fullwidth: false,
  disabled: false,
};

export const LongButton = Template.bind({});
LongButton.parameters = { controls: { exclude: ["toggled"] } };
LongButton.args = {
  variant: "primary",
  children: "Very long button",
  fullwidth: true,
  size: "large",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.parameters = { controls: { exclude: ["toggled"] } };
Disabled.args = {
  variant: "primary",
  children: "Disabled state",
  size: "large",
  fullwidth: false,
  disabled: true,
};

const MultipleTemplate: Story<ButtonProps> = (args): React.ReactElement => {
  const { variant, size, fullwidth, children, toggled, ...rest } = args;
  if (toggled) {
    return (
      <Button
        variant={variant}
        fullwidth={fullwidth}
        toggled={toggled}
        {...rest}
      >
        {children}
      </Button>
    );
  }
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-left: -16px;
        button {
          margin-left: 16px;
        }
      `}
    >
      <Button variant={variant} size="small" fullwidth={fullwidth} {...rest}>
        {children}
      </Button>
      <Button variant={variant} fullwidth={fullwidth} {...rest}>
        {children}
      </Button>
      <Button variant={variant} size="large" fullwidth={fullwidth} {...rest}>
        {children}
      </Button>
    </div>
  );
};
export const IconButton = MultipleTemplate.bind({});
IconButton.args = {
  variant: "secondary",
  icon: <GlobalOutlined />,
  size: "small",
  fullwidth: false,
  toggled: false,
  disabled: false,
};
