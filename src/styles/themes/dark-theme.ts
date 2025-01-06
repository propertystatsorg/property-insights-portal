import { colors } from './colors';

export const darkTheme = {
  background: colors.darkGreen.hsl,
  foreground: colors.offWhite.hsl,

  card: colors.darkGreen.hsl,
  'card-foreground': colors.offWhite.hsl,

  popover: colors.darkGreen.hsl,
  'popover-foreground': colors.offWhite.hsl,

  primary: colors.offWhite.hsl,
  'primary-foreground': colors.darkGreen.hsl,

  secondary: colors.teal.hsl,
  'secondary-foreground': colors.offWhite.hsl,

  muted: colors.teal.hsl,
  'muted-foreground': colors.sage.hsl,

  accent: colors.teal.hsl,
  'accent-foreground': colors.offWhite.hsl,

  destructive: colors.blue.hsl,
  'destructive-foreground': colors.offWhite.hsl,

  border: colors.teal.hsl,
  input: colors.teal.hsl,
  ring: colors.sage.hsl,

  sidebar: {
    background: colors.darkGreen.hsl,
    foreground: colors.offWhite.hsl,
    primary: colors.blue.hsl,
    'primary-foreground': colors.offWhite.hsl,
    accent: colors.teal.hsl,
    'accent-foreground': colors.offWhite.hsl,
    border: colors.teal.hsl,
    ring: colors.blue.hsl,
  }
} as const;