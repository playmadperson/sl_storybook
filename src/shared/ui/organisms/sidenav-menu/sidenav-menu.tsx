import { Layout as AntdLayout, Menu, MenuProps, SiderProps } from "antd";
import React from "react";
import { ClassNames, useTheme } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "./styles";

const { Sider } = AntdLayout;

type MenuItem = Required<MenuProps>["items"][number];

export interface SidenavProps extends SiderProps {
  menuItems: Array<MenuItem & { path: string }>;
  offsetTop?: number;
  userMenuItems: MenuItem[];
}

export const SidenavMenu = ({
  menuItems,
  offsetTop,
  userMenuItems,
  collapsed,
}: SidenavProps) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  return (
    <Sider
      css={styles.sidebar(theme, offsetTop)}
      width={236}
      breakpoint="md"
      collapsedWidth={0}
      trigger={null}
      collapsed={collapsed}
    >
      <Menu
        css={styles.navMenu}
        items={menuItems}
        selectedKeys={[getCurrentItem(menuItems, pathname) || ""]}
      />
      <div css={styles.bottomChildrenWrapper}>
        {userMenuItems && (
          <Menu
            mode="inline"
            css={styles.bottomMenu(theme)}
            items={userMenuItems}
          />
        )}
      </div>
    </Sider>
  );
};

interface CollapseTriggerButtonProps {
  collapsed: boolean;
  onClick: () => void;
}

export const CollapseTriggerButton = ({
  collapsed,
  onClick,
}: CollapseTriggerButtonProps) => {
  const theme = useTheme();
  const Component = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;

  return (
    <ClassNames>
      {({ css }) => (
        <Component
          className={css(styles.collapseTriggerButton(theme))}
          onClick={onClick}
        />
      )}
    </ClassNames>
  );
};

const getCurrentItem = (
  menuItems: SidenavProps["menuItems"],
  currentPath: string
): string | void => {
  const matchedItem = menuItems.find((item) => item.path === currentPath);
  if (matchedItem?.key) {
    return matchedItem.key.toString();
  }
  return undefined;
};
