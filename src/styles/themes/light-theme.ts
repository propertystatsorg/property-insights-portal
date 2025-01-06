import { colors } from './colors';

export const lightTheme = {
  background: colors.gray.hsl,
  foreground: colors.black.hsl,

  card: colors.gray.hsl,
  'card-foreground': colors.black.hsl,

  popover: colors.gray.hsl,
  'popover-foreground': colors.black.hsl,

  primary: colors.black.hsl,
  'primary-foreground': colors.gray.hsl,

  secondary: colors.gray.hsl,
  'secondary-foreground': colors.black.hsl,

  muted: colors.gray.hsl,
  'muted-foreground': colors.black.hsl,

  accent: colors.gray.hsl,
  'accent-foreground': colors.black.hsl,

  destructive: colors.black.hsl,
  'destructive-foreground': colors.gray.hsl,

  border: colors.gray.hsl,
  input: colors.gray.hsl,
  ring: colors.black.hsl,

  sidebar: {
    background: colors.gray.hsl,
    foreground: colors.black.hsl,
    primary: colors.black.hsl,
    'primary-foreground': colors.gray.hsl,
    accent: colors.gray.hsl,
    'accent-foreground': colors.black.hsl,
    border: colors.gray.hsl,
    ring: colors.black.hsl,
  }
} as const;