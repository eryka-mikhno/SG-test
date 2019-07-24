import config from 'src/config';

export const colors = {
  azureRadiance: '#00adff',
  wildWatermelon: '#FF6972',
  persianBlue: '#2739D6',
  white: '#FFFFFF',
  mercury: '#e6e6e6',
  silverRust: '#CFC6C3',
  alto: '#E0E0E0',
};

export const clientColorsScheme = {
  1: {
    primary: colors.azureRadiance,
    secondary: colors.mercury,
    background: colors.white,
  },
  2: {
    primary: colors.wildWatermelon,
    secondary: colors.silverRust,
    background: colors.white,
  },
  3: {
    primary: colors.persianBlue,
    secondary: colors.alto,
    background: colors.white,
  },
};

export const defaultColors = {
  primary: colors.wildWatermelon,
  secondary: colors.mercury,
  background: colors.white,
};

export default (appColors = clientColorsScheme[config.client.id]
  ? clientColorsScheme[config.client.id]
  : defaultColors);
