/**
 * Tests for main index exports
 */

import * as IconsPackage from '../index';
import { Svg, Path } from '../index';
import { isIconComponent } from '../index';
import { useIconProps } from '../index';
import { EyesIcon } from '../index';

describe('Main Index Exports', () => {
  describe('Component exports', () => {
    it('should export Svg component', () => {
      expect(Svg).toBeDefined();
      expect(typeof Svg).toBe('function');
    });

    it('should export Path component', () => {
      expect(Path).toBeDefined();
      expect(typeof Path).toBe('function');
    });

    it('should export icon components', () => {
      expect(EyesIcon).toBeDefined();
      expect(typeof EyesIcon).toBe('function');
    });
  });

  describe('Utility exports', () => {
    it('should export isIconComponent utility', () => {
      expect(isIconComponent).toBeDefined();
      expect(typeof isIconComponent).toBe('function');
    });

    it('should export useIconProps hook', () => {
      expect(useIconProps).toBeDefined();
      expect(typeof useIconProps).toBe('function');
    });
  });

  describe('All exports', () => {
    it('should export all icon components', () => {
      const exports = Object.keys(IconsPackage);
      const iconExports = exports.filter((name) => name.endsWith('Icon'));

      expect(iconExports.length).toBeGreaterThan(100); // Should have many icons
    });

    it('should export all expected utilities', () => {
      const exports = Object.keys(IconsPackage);

      expect(exports).toContain('Svg');
      expect(exports).toContain('Path');
      expect(exports).toContain('isIconComponent');
      expect(exports).toContain('useIconProps');
    });
  });
});
