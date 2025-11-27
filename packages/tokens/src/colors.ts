/**
 * Restricted color tokens for WorkIndia Design System
 * This is the single source of truth for allowed colors.
 * Only these colors should be used across the design system.
 *
 * All color scale values are manually defined by the design team.
 * Each shade value must be explicitly provided as a hex code.
 */

/**
 * Chromatic color scale type - defines allowed gradient steps
 * This ensures only approved gradient variations can be used
 */
export interface WorkIndiaChromaticColorScale {
  /** Lightest shade - for very light backgrounds */
  50: string;
  /** Light shade - for light backgrounds */
  100: string;
  /** Medium-light shade - for subtle backgrounds */
  200: string;
  /** Light-medium shade */
  300: string;
  /** Medium shade */
  400: string;
  /** Base color - primary shade */
  500: string;
  /** Medium-dark shade - for emphasis */
  600: string;
  /** Dark shade - for strong emphasis */
  700: string;
  /** Darker shade */
  800: string;
  /** Very dark shade */
  900: string;
  /** Darkest shade - for maximum contrast */
  1000: string;
  /** Alpha variant - 9% opacity for overlays */
  a50: string;
  /** Alpha variant - 18% opacity for subtle overlays */
  a100: string;
  /** Alpha variant - 24% opacity for moderate overlays */
  a150: string;
  /** Alpha variant - 32% opacity for stronger overlays */
  a200: string;
  /** Alpha variant - 64% opacity for strong overlays */
  a400: string;
}

/**
 * Neutral color scale type - defines allowed gradient steps for neutral colors
 */
export interface WorkIndiaNeutralColorScale {
  /** Lightest shade */
  0: string;
  /** Very light shade */
  50: string;
  /** Light shade */
  100: string;
  /** Medium-light shade */
  200: string;
  /** Light-medium shade */
  300: string;
  /** Medium shade */
  400: string;
  /** Base medium shade */
  500: string;
  /** Medium-dark shade */
  600: string;
  /** Dark shade */
  700: string;
  /** Darker shade */
  800: string;
  /** Very dark shade */
  900: string;
  /** Darker shade */
  1000: string;
  /** Very dark shade */
  1100: string;
  /** Darker shade */
  1200: string;
  /** Darkest shade */
  1300: string;
  /** Alpha variant - 6% opacity for overlays */
  a25: string;
  /** Alpha variant - 9% opacity for overlays */
  a50: string;
  /** Alpha variant - 18% opacity for subtle overlays */
  a100: string;
  /** Alpha variant - 32% opacity for stronger overlays */
  a200: string;
  /** Alpha variant - 64% opacity for strong overlays */
  a400: string;
}

/**
 * Black and white color tokens
 */
export interface WorkIndiaBlackNWhite {
  /** Pure black */
  black: string;
  /** Pure white */
  white: string;
}

export interface WorkIndiaColorTokens {
  /** Chromatic color palette */
  chromatic: {
    /** Brand color scale */
    brand: WorkIndiaChromaticColorScale;
    /** Rose color scale */
    rose: WorkIndiaChromaticColorScale;
    /** Cerulean color scale */
    cerulean: WorkIndiaChromaticColorScale;
    /** Emerald color scale */
    emerald: WorkIndiaChromaticColorScale;
    /** Crimson color scale */
    crimson: WorkIndiaChromaticColorScale;
    /** Amber color scale */
    amber: WorkIndiaChromaticColorScale;
    /** Sky color scale */
    sky: WorkIndiaChromaticColorScale;
  };
  /** Neutral color palette */
  neutral: {
    /** Light neutral color scale */
    light: WorkIndiaNeutralColorScale;
    /** Dark neutral color scale */
    dark: WorkIndiaNeutralColorScale;
    /** Black and white colors */
    blackNWhite: WorkIndiaBlackNWhite;
  };
}

/**
 * Helper function to convert hex color with opacity percentage to rgba
 * @param hex - Hex color string (e.g., '#3C50C8')
 * @param opacityPercent - Opacity percentage (0-100)
 * @returns RGBA color string (e.g., 'rgba(60, 80, 200, 0.09)')
 */
function hexToRgba(hex: string, opacityPercent: number): string {
  const hexColor = hex.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  const opacity = opacityPercent / 100;
  return `rgba(${String(r)}, ${String(g)}, ${String(b)}, ${String(opacity)})`;
}

/**
 * WorkIndia color token values with locked-down gradient variations
 * These are the only allowed color values in the design system.
 * All gradient variations are explicitly defined by the design team.
 *
 * IMPORTANT: All hex codes must be provided by the design team.
 * Do not auto-generate or modify these values without design approval.
 */
export const WorkIndiaColors: WorkIndiaColorTokens = {
  chromatic: {
    brand: {
      50: '#F4F6FF',
      100: '#DEE3FF',
      200: '#C0C9FF',
      300: '#9AA9F7',
      400: '#6F84EB',
      500: '#3C50C8',
      600: '#3344B7',
      700: '#29389F',
      800: '#202E84',
      900: '#18236A',
      1000: '#101A4F',
      a50: hexToRgba('#3C50C8', 9),
      a100: hexToRgba('#3C50C8', 18),
      a150: hexToRgba('#3C50C8', 24),
      a200: hexToRgba('#3C50C8', 32),
      a400: hexToRgba('#3C50C8', 64),
    },
    rose: {
      50: '#FFF5F9',
      100: '#FCDCE5',
      200: '#F6B9CC',
      300: '#EC92B0',
      400: '#DD6288',
      500: '#C43D63',
      600: '#A73553',
      700: '#892D44',
      800: '#6E2437',
      900: '#541C2A',
      1000: '#3A141D',
      a50: hexToRgba('#C43D63', 9),
      a100: hexToRgba('#C43D63', 18),
      a150: hexToRgba('#C43D63', 24),
      a200: hexToRgba('#C43D63', 32),
      a400: hexToRgba('#C43D63', 64),
    },
    cerulean: {
      50: '#F2FBFF',
      100: '#D6F2FF',
      200: '#B0E6FF',
      300: '#83D7FF',
      400: '#47C3F7',
      500: '#138DD2',
      600: '#1079B4',
      700: '#0D6596',
      800: '#0A5077',
      900: '#073B59',
      1000: '#05293F',
      a50: hexToRgba('#138DD2', 9),
      a100: hexToRgba('#138DD2', 18),
      a150: hexToRgba('#138DD2', 24),
      a200: hexToRgba('#138DD2', 32),
      a400: hexToRgba('#138DD2', 64),
    },
    emerald: {
      50: '#F2FBF3',
      100: '#D9F5DB',
      200: '#B8EBBE',
      300: '#90DE97',
      400: '#65BE6A',
      500: '#1B8724',
      600: '#16741F',
      700: '#115F19',
      800: '#0D4B14',
      900: '#0A380F',
      1000: '#07270B',
      a50: hexToRgba('#1B8724', 9),
      a100: hexToRgba('#1B8724', 18),
      a150: hexToRgba('#1B8724', 24),
      a200: hexToRgba('#1B8724', 32),
      a400: hexToRgba('#1B8724', 64),
    },
    crimson: {
      50: '#FFF4F3',
      100: '#FFDAD9',
      200: '#FFB8B6',
      300: '#FF9090',
      400: '#F2605C',
      500: '#D81C1B',
      600: '#C01617',
      700: '#A11213',
      800: '#820E0F',
      900: '#650B0C',
      1000: '#490808',
      a50: hexToRgba('#D81C1B', 9),
      a100: hexToRgba('#D81C1B', 18),
      a150: hexToRgba('#D81C1B', 24),
      a200: hexToRgba('#D81C1B', 32),
      a400: hexToRgba('#D81C1B', 64),
    },
    amber: {
      50: '#FFF8EB',
      100: '#FFE9C6',
      200: '#FFD399',
      300: '#FFB766',
      400: '#FFA33F',
      500: '#F7901A',
      600: '#D77C15',
      700: '#B36710',
      800: '#8F520C',
      900: '#6B3D08',
      1000: '#492A05',
      a50: hexToRgba('#F7901A', 9),
      a100: hexToRgba('#F7901A', 18),
      a150: hexToRgba('#F7901A', 24),
      a200: hexToRgba('#F7901A', 32),
      a400: hexToRgba('#F7901A', 64),
    },
    sky: {
      50: '#F3FBFF',
      100: '#D9F3FF',
      200: '#B6E8FF',
      300: '#8BD8FF',
      400: '#64C9FF',
      500: '#44BBFD',
      600: '#31A3DF',
      700: '#2587BE',
      800: '#1B6B98',
      900: '#145074',
      1000: '#0E3951',
      a50: hexToRgba('#44BBFD', 9),
      a100: hexToRgba('#44BBFD', 18),
      a150: hexToRgba('#44BBFD', 24),
      a200: hexToRgba('#44BBFD', 32),
      a400: hexToRgba('#44BBFD', 64),
    },
  },
  neutral: {
    light: {
      0: '#FFFFFF',
      50: '#F8FAFB',
      100: '#F1F4F6',
      200: '#E3E8EC',
      300: '#CFD5DB',
      400: '#BAC3CB',
      500: '#AAB5BE',
      600: '#97A3AD',
      700: '#838F9A',
      800: '#6E7A86',
      900: '#5A6573',
      1000: '#3E4C5B',
      1100: '#313D4A',
      1200: '#26313C',
      1300: '#24282E',
      a25: hexToRgba('#838F9A', 6),
      a50: hexToRgba('#838F9A', 9),
      a100: hexToRgba('#838F9A', 18),
      a200: hexToRgba('#838F9A', 32),
      a400: hexToRgba('#838F9A', 64),
    },
    dark: {
      0: '#FEFFFF',
      50: '#EDF1F4',
      100: '#DAE1E7',
      200: '#BEC7D0',
      300: '#A5B1BD',
      400: '#8FA0AD',
      500: '#7D8E9C',
      600: '#71818F',
      700: '#61707D',
      800: '#53616D',
      900: '#47535E',
      1000: '#3C4752',
      1100: '#303A43',
      1200: '#272F36',
      1300: '#24282E',
      a25: hexToRgba('#BEC7D0', 6),
      a50: hexToRgba('#BEC7D0', 9),
      a100: hexToRgba('#BEC7D0', 18),
      a200: hexToRgba('#BEC7D0', 32),
      a400: hexToRgba('#BEC7D0', 64),
    },
    blackNWhite: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
};
