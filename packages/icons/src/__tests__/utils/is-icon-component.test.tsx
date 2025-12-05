/**
 * Tests for isIconComponent utility
 */

import React from 'react';
import { isIconComponent } from '../../utils/is-icon-component';
import EyesIcon from '../../components/Icons/EyesIcon/eyes-icon';
import EyeIcon from '../../components/Icons/EyeIcon/eye-icon';

describe('isIconComponent', () => {
  describe('Component function check', () => {
    it('should return true for icon component functions', () => {
      expect(isIconComponent(EyesIcon)).toBe(true);
      expect(isIconComponent(EyeIcon)).toBe(true);
    });

    it('should return false for non-icon component functions', () => {
      const RegularComponent = () => <div>Test</div>;
      expect(isIconComponent(RegularComponent)).toBe(false);
    });

    it('should return false for null', () => {
      expect(isIconComponent(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isIconComponent(undefined)).toBe(false);
    });

    it('should return false for strings', () => {
      expect(isIconComponent('string')).toBe(false);
    });

    it('should return false for numbers', () => {
      expect(isIconComponent(123)).toBe(false);
    });
  });

  describe('React element check', () => {
    it('should return true for icon component elements', () => {
      const iconElement = <EyesIcon />;
      expect(isIconComponent(iconElement)).toBe(true);
    });

    it('should return false for non-icon component elements', () => {
      const regularElement = <div>Test</div>;
      expect(isIconComponent(regularElement)).toBe(false);
    });

    it('should return false for JSX elements without componentId', () => {
      const TestComponent = () => <div>Test</div>;
      const element = <TestComponent />;
      expect(isIconComponent(element)).toBe(false);
    });
  });

  describe('Edge cases', () => {
    it('should handle components without componentId', () => {
      const ComponentWithoutId = () => <div>Test</div>;
      expect(isIconComponent(ComponentWithoutId)).toBe(false);
    });

    it('should handle components with componentId not ending in Icon', () => {
      const ComponentWithId = () => <div>Test</div>;
      (
        ComponentWithId as React.ComponentType & { componentId?: string }
      ).componentId = 'TestComponent';
      expect(isIconComponent(ComponentWithId)).toBe(false);
    });

    it('should handle components with componentId ending in Icon', () => {
      const ComponentWithIconId = () => <div>Test</div>;
      (
        ComponentWithIconId as React.ComponentType & { componentId?: string }
      ).componentId = 'TestIcon';
      expect(isIconComponent(ComponentWithIconId)).toBe(true);
    });
  });
});
