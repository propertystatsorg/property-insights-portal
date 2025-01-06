import { colors } from './colors';

export const darkTheme = {
  background: colors.darkGreen.hsl,
  foreground: colors.beige.hsl,

  card: colors.darkGreen.hsl,
  'card-foreground': colors.beige.hsl,

  popover: colors.darkGreen.hsl,
  'popover-foreground': colors.beige.hsl,

  primary: colors.beige.hsl,
  'primary-foreground': colors.darkGreen.hsl,

  secondary: colors.teal.hsl,
  'secondary-foreground': colors.beige.hsl,

  muted: colors.teal.hsl,
  'muted-foreground': colors.sage.hsl,

  accent: colors.teal.hsl,
  'accent-foreground': colors.beige.hsl,

  destructive: colors.blue.hsl,
  'destructive-foreground': colors.beige.hsl,

  border: colors.teal.hsl,
  input: colors.teal.hsl,
  ring: colors.sage.hsl,

  sidebar: {
    background: colors.darkGreen.hsl,
    foreground: colors.beige.hsl,
    primary: colors.blue.hsl,
    'primary-foreground': colors.beige.hsl,
    accent: colors.teal.hsl,
    'accent-foreground': colors.beige.hsl,
    border: colors.teal.hsl,
    ring: colors.blue.hsl,
  }
} as const;