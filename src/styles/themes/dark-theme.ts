import { colors } from './colors';

export const darkTheme = {
  background: colors.black.hsl,
  foreground: colors.gray.hsl,

  card: colors.black.hsl,
  'card-foreground': colors.gray.hsl,

  popover: colors.black.hsl,
  'popover-foreground': colors.gray.hsl,

  primary: colors.gray.hsl,
  'primary-foreground': colors.black.hsl,

  secondary: colors.black.hsl,
  'secondary-foreground': colors.gray.hsl,

  muted: colors.black.hsl,
  'muted-foreground': colors.gray.hsl,

  accent: colors.black.hsl,
  'accent-foreground': colors.gray.hsl,

  destructive: colors.gray.hsl,
  'destructive-foreground': colors.black.hsl,

  border: colors.black.hsl,
  input: colors.black.hsl,
  ring: colors.gray.hsl,

  sidebar: {
    background: colors.black.hsl,
    foreground: colors.gray.hsl,
    primary: colors.gray.hsl,
    'primary-foreground': colors.black.hsl,
    accent: colors.black.hsl,
    'accent-foreground': colors.gray.hsl,
    border: colors.black.hsl,
    ring: colors.gray.hsl,
  }
} as const;