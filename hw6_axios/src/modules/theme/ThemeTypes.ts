export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
  CUSTOM = 'custom',
}

export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK | ThemeTypes.SYSTEM| ThemeTypes.CUSTOM;

export interface IColorsValues {
  light: string;
  dark: string;
  custom: string;
  system: string;
}

export interface IColors {
  overlay: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  accentDefault: string;
  textPrimary: string;
  textSecondary: string;
}

export enum ColorsKeys {
  overlay = 'overlay',
  backgroundPrimary = 'backgroundPrimary',
  backgroundSecondary = 'backgroundSecondary',
  accentDefault = 'accentDefault',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
}

export interface IThemeContext {
  theme: ThemeType;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes) => void;
}
