import { colors } from './colors';

export const lightTheme = {
  background: colors.lightGray.hsl,
  foreground: colors.black.hsl,

  card: colors.lightGray.hsl,
  'card-foreground': colors.black.hsl,

  popover: colors.lightGray.hsl,
  'popover-foreground': colors.black.hsl,

  primary: colors.blue.hsl,
  'primary-foreground': colors.lightGray.hsl,

  secondary: colors.darkGray.hsl,
  'secondary-foreground': colors.lightGray.hsl,

  muted: colors.mediumGray.hsl,
  'muted-foreground': colors.black.hsl,

  accent: colors.blue.hsl,
  'accent-foreground': colors.lightGray.hsl,

  destructive: colors.black.hsl,
  'destructive-foreground': colors.lightGray.hsl,

  border: colors.darkGray.hsl,
  input: colors.darkGray.hsl,
  ring: colors.blue.hsl,

  sidebar: {
    background: colors.lightGray.hsl,
    foreground: colors.black.hsl,
    primary: colors.blue.hsl,
    'primary-foreground': colors.lightGray.hsl,
    accent: colors.darkGray.hsl,
    'accent-foreground': colors.lightGray.hsl,
    border: colors.darkGray.hsl,
    ring: colors.blue.hsl,
  }
} as const;