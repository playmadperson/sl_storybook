import React from "react";
import { Story } from "@storybook/react";
import { MemoryRouter, NavLink } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { SidenavProps, Sidenav as SidenavMenuComponent } from "./index";

export default {
  component: SidenavMenuComponent,
  title: "UI kit/Organisms/SidenavMenu",
  decorators: [
    (StoryToRender: Story) => (
      <MemoryRouter>
        <StoryToRender />
      </MemoryRouter>
    ),
  ],
};

export const SidenavMenu: Story<SidenavProps> = ({
  menuItems,
  offsetTop,
  userMenuItems,
}) => (
  <SidenavMenuComponent
    menuItems={menuItems}
    userMenuItems={userMenuItems}
    offsetTop={offsetTop}
  />
);

const exampleMenuItems = [
  {
    label: <NavLink to="#">Item 1</NavLink>,
    key: 1,
    path: "#",
  },
  {
    label: <NavLink to="#">Item 2</NavLink>,
    key: 2,
    path: "#",
  },
];

const exampleBottomItems = [
  {
    label: "test@example.com",
    icon: <UserOutlined />,
    key: 11,
    children: [
      {
        label: "subMenuItem 1",
        key: 12,
      },
      {
        label: "subMenuItem 2",
        key: 13,
      },
    ],
  },
  {
    label: "Some action",
    icon: <LogoutOutlined />,
    key: 111,
    onClick: () => {
      console.log("onclick");
    },
  },
];

SidenavMenu.args = {
  menuItems: exampleMenuItems,
  userMenuItems: exampleBottomItems,
  offsetTop: 32,
};
