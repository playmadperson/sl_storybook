import type { GlobalShadows } from "shared/configs/themes/types";

export const shadows: GlobalShadows = {
  container:
    "3px 4px 4px rgba(0, 0, 0, 0.1), 3px 3px 6px rgba(0, 0, 0, 0.03), 0px 0px 1px rgba(255, 255, 255, 0.02)",
  lifted:
    "2px 2px 3px rgba(0, 0, 0, 0.19), -1px -1px 3px rgba(255, 255, 255, 0.06)",
  pressed:
    "inset 2px 2px 3px rgba(0, 0, 0, 0.19), inset -1px -1px 3px rgba(255, 255, 255, 0.06)",
  twilight: {
    drop: "-1px -1px 2px rgba(255, 255, 255, 0.06), 2px 2px 3px rgba(0, 0, 0, 0.1)",
    inner:
      "inset 2px 2px 3px rgba(0, 0, 0, 0.19), inset -1px -1px 3px rgba(255, 255, 255, 0.06)",
  },
  king: {
    drop: "4px 4px 10px rgba(29, 30, 44, 0.15)",
  },
};
