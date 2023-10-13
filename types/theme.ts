export enum VariantFont {
  normal = 'normal',
  large = 'large',
  extraLarge = 'extraLarge',
  small = 'small',
  extraSmall = 'extraSmall',
}
type Font = {
  fontFamily: string;
  lineHeight: number;
  fontSize: number;
  fontWeight?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}
export type ThemeProps = {
  dark: boolean;
  colors: {
    background?: string
    onBackground?: string
    text?: string
    textInverted?: string
    primary?: string
    onPrimary?: string
    secondary?: string
    onSecondary?: string
    surface?: string
    error?: string
    warn?: string
    success?: string
  };
  borderRadius: number;
  fonts: {
    [key in VariantFont]: Font;
  };
  elevation?: number;
};
