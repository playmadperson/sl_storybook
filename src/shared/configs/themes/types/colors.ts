interface Colors {
  blue: {
    default: string;
    sky: string;
    periwinkle: string;
    water: string;
    whale: string;
    king: string;
    mouse: string;
    pup: string;
    lightPup: string;
    space: string;
    marengo: string;
    sapphire: string;
  };
  cyan: {
    default: string;
  };
  purple: {
    default: string;
  };
  green: {
    default: string;
    shamrock: string;
  };
  red: {
    default: string;
    coral: string;
  };
  orange: {
    default: string;
    mandarin: string;
  };
  gray: {
    default: string;
    aluminium: string;
  };
  white: {
    default: string;
  };
  contrast: {
    default: string;
  };
}

interface DefinedColors {
  backgrounds: {
    content: string;
    controls: string;
    disabled: string;
  };
  primary: string;
  primarySelection: string;
  primaryHover: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  accentColors: {
    purple: string;
    cyan: string;
    blue: string;
  };
  texts: {
    default: string;
    header: string;
    muted: string;
  };
  borders: {
    primary: string;
    secondaryButton: string;
  };
}

export interface MainColors {
  global: Colors;
  defined: DefinedColors;
}
