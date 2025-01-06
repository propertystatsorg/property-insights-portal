import { colors } from './colors';

export const darkTheme = {
  background: colors.black.hsl,
  foreground: colors.lightGray.hsl,

  card: colors.black.hsl,
  'card-foreground': colors.lightGray.hsl,

  popover: colors.black.hsl,
  'popover-foreground': colors.lightGray.hsl,

  primary: colors.blue.hsl,
  'primary-foreground': colors.black.hsl,

  secondary: colors.darkGray.hsl,
  'secondary-foreground': colors.lightGray.hsl,

  muted: colors.darkGray.hsl,
  'muted-foreground': colors.lightGray.hsl,

  accent: colors.blue.hsl,
  'accent-foreground': colors.black.hsl,

  destructive: colors.lightGray.hsl,
  'destructive-foreground': colors.black.hsl,

  border: colors.darkGray.hsl,
  input: colors.darkGray.hsl,
  ring: colors.blue.hsl,

  sidebar: {
    background: colors.black.hsl,
    foreground: colors.lightGray.hsl,
    primary: colors.blue.hsl,
    'primary-foreground': colors.black.hsl,
    accent: colors.darkGray.hsl,
    'accent-foreground': colors.lightGray.hsl,
    border: colors.darkGray.hsl,
    ring: colors.blue.hsl,
  }
} as const;