/**
 * Restricted color tokens for WorkIndia Design System
 * This is the single source of truth for allowed colors.
 * Only these colors should be used across the design system.
 *
 * All color scale values are manually defined by the design team.
 * Each shade value must be explicitly provided as a hex code.
 */

/**
 * Color scale type - defines allowed gradient steps
 * This ensures only approved gradient variations can be used
 */
export interface WorkIndiaColorScale {
  /** Lightest shade - for very light backgrounds */
  50: string;
  /** Light shade - for light backgrounds */
  100: string;
  /** Medium-light shade - for subtle backgrounds */
  200: string;
  /** Base color - primary shade */
  500: string;
  /** Medium-dark shade - for emphasis */
  700: string;
  /** Dark shade - for strong emphasis */
  900: string;
  /** Darkest shade - for maximum contrast */
  1000: string;
  /** Alpha variant - 10% opacity for overlays */
  a50: string;
  /** Alpha variant - 30% opacity for subtle overlays */
  a100: string;
  /** Alpha variant - 50% opacity for moderate overlays */
  a200: string;
}

export interface WorkIndiaColorTokens {
  brand: {
    /** Primary brand color scale - locked-down gradient variations */
    primary: WorkIndiaColorScale;
    /** Secondary brand color scale - locked-down gradient variations */
    secondary: WorkIndiaColorScale;
  };
  feedback: {
    /** Success color scale - locked-down gradient variations */
    success: WorkIndiaColorScale;
    /** Error color scale - locked-down gradient variations */
    error: WorkIndiaColorScale;
  };
  text: {
    /** Body text color */
    body: string;
    /** Heading text color */
    heading: string;
    /** Subtle/secondary text color */
    subtle: string;
  };
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
  brand: {
    primary: {
      50: '#E6F2F8', // Lightest shade - replace with design team hex
      100: '#CCE5F1', // Light shade - replace with design team hex
      200: '#99CBE3', // Medium-light shade - replace with design team hex
      500: '#005A9C', // Base color - provided by design team
      700: '#004680', // Medium-dark shade - replace with design team hex
      900: '#003264', // Dark shade - replace with design team hex
      1000: '#001F48', // Darkest shade - replace with design team hex
      a50: 'rgba(0, 90, 156, 0.1)', // 10% opacity - replace with design team value
      a100: 'rgba(0, 90, 156, 0.3)', // 30% opacity - replace with design team value
      a200: 'rgba(0, 90, 156, 0.5)', // 50% opacity - replace with design team value
    },
    secondary: {
      50: '#FFF4E6', // Lightest shade - replace with design team hex
      100: '#FFE9CC', // Light shade - replace with design team hex
      200: '#FFD399', // Medium-light shade - replace with design team hex
      500: '#FF9900', // Base color - provided by design team
      700: '#CC7A00', // Medium-dark shade - replace with design team hex
      900: '#995C00', // Dark shade - replace with design team hex
      1000: '#663D00', // Darkest shade - replace with design team hex
      a50: 'rgba(255, 153, 0, 0.1)', // 10% opacity - replace with design team value
      a100: 'rgba(255, 153, 0, 0.3)', // 30% opacity - replace with design team value
      a200: 'rgba(255, 153, 0, 0.5)', // 50% opacity - replace with design team value
    },
  },
  feedback: {
    success: {
      50: '#E6F5E6', // Lightest shade - replace with design team hex
      100: '#CCEBCC', // Light shade - replace with design team hex
      200: '#99D799', // Medium-light shade - replace with design team hex
      500: '#008000', // Base color - provided by design team
      700: '#006600', // Medium-dark shade - replace with design team hex
      900: '#004D00', // Dark shade - replace with design team hex
      1000: '#003300', // Darkest shade - replace with design team hex
      a50: 'rgba(0, 128, 0, 0.1)', // 10% opacity - replace with design team value
      a100: 'rgba(0, 128, 0, 0.3)', // 30% opacity - replace with design team value
      a200: 'rgba(0, 128, 0, 0.5)', // 50% opacity - replace with design team value
    },
    error: {
      50: '#F9E6E9', // Lightest shade - replace with design team hex
      100: '#F3CCD3', // Light shade - replace with design team hex
      200: '#E799A7', // Medium-light shade - replace with design team hex
      500: '#D9304F', // Base color - provided by design team
      700: '#AE2639', // Medium-dark shade - replace with design team hex
      900: '#821D2A', // Dark shade - replace with design team hex
      1000: '#57131C', // Darkest shade - replace with design team hex
      a50: 'rgba(217, 48, 79, 0.1)', // 10% opacity - replace with design team value
      a100: 'rgba(217, 48, 79, 0.3)', // 30% opacity - replace with design team value
      a200: 'rgba(217, 48, 79, 0.5)', // 50% opacity - replace with design team value
    },
  },
  text: {
    body: '#333333',
    heading: '#000000',
    subtle: '#666666',
  },
};
