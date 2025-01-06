import { colors } from './colors';

export const lightTheme = {
  background: colors.beige.hsl,
  foreground: colors.darkGreen.hsl,

  card: colors.beige.hsl,
  'card-foreground': colors.darkGreen.hsl,

  popover: colors.beige.hsl,
  'popover-foreground': colors.darkGreen.hsl,

  primary: colors.darkGreen.hsl,
  'primary-foreground': colors.beige.hsl,

  secondary: colors.sage.hsl,
  'secondary-foreground': colors.darkGreen.hsl,

  muted: colors.sage.hsl,
  'muted-foreground': colors.teal.hsl,

  accent: colors.sage.hsl,
  'accent-foreground': colors.darkGreen.hsl,

  destructive: colors.blue.hsl,
  'destructive-foreground': colors.beige.hsl,

  border: colors.sage.hsl,
  input: colors.sage.hsl,
  ring: colors.darkGreen.hsl,

  sidebar: {
    background: colors.beige.hsl,
    foreground: colors.darkGreen.hsl,
    primary: colors.darkGreen.hsl,
    'primary-foreground': colors.beige.hsl,
    accent: colors.sage.hsl,
    'accent-foreground': colors.darkGreen.hsl,
    border: colors.sage.hsl,
    ring: colors.blue.hsl,
  }
} as const;