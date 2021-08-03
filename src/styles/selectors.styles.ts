import { Theme } from ".";

export const getFontFamilyStyle = (theme: Theme):string => theme.typo.fontFamily;

export const getBackgroundStyle = (theme: Theme):string => theme.colors.background;
export const getWrapperBackgroundStyle = (theme: Theme):string => theme.colors.wrapperBackground;
export const getFontColorStyle = (theme: Theme):string => theme.colors.fontColor;
export const getReverseFontColorStyle = (theme: Theme):string => theme.colors.reverseFontColor;

