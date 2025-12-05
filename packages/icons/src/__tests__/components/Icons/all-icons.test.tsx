/**
 * Tests for all icon components
 * This test ensures all icons can be imported and rendered correctly
 */

import React from 'react';
import { render } from '@testing-library/react';
import * as Icons from '../../../components/Icons';
import type { IconSize, IconComponent } from '../../../components/Icons/types';

// Get all icon exports (excluding non-icon exports)
const getAllIcons = (): Record<string, IconComponent> => {
  const iconExports: Record<string, IconComponent> = {};

  Object.keys(Icons).forEach((key) => {
    // Filter out non-icon exports
    if (
      key !== 'useIconProps' &&
      key !== 'default' &&
      key.endsWith('Icon') &&
      typeof (Icons as Record<string, unknown>)[key] === 'function'
    ) {
      iconExports[key] = (Icons as unknown as Record<string, IconComponent>)[
        key
      ];
    }
  });

  return iconExports;
};

describe('All Icon Components', () => {
  const allIcons = getAllIcons();
  const iconNames = Object.keys(allIcons);

  it('should export icon components', () => {
    expect(iconNames.length).toBeGreaterThan(0);
  });

  describe('Icon rendering', () => {
    // Test a sample of icons to ensure they render
    const sampleIcons = iconNames.slice(0, 20); // Test first 20 icons

    sampleIcons.forEach((iconName) => {
      it(`should render ${iconName}`, () => {
        const Icon = allIcons[iconName];
        const { container } = render(<Icon />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toBeTruthy();
      });
    });
  });

  describe('Icon props', () => {
    const testIcons = [
      'EyesIcon',
      'EyeIcon',
      'XIcon',
      'CheckIcon',
      'ArrowDownIcon',
      'ArrowUpIcon',
      'UserIcon',
      'HomeIcon',
    ].filter((name) => iconNames.includes(name));

    testIcons.forEach((iconName) => {
      const Icon = allIcons[iconName];

      it(`${iconName} should accept size prop`, () => {
        const sizes: IconSize[] = [
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          '2xlarge',
        ];

        sizes.forEach((size) => {
          const { container } = render(<Icon size={size} />);
          const svg = container.querySelector('svg');
          expect(svg).not.toBeNull();
          expect(svg).toBeTruthy();
        });
      });

      it(`${iconName} should accept color prop`, () => {
        const { container } = render(<Icon color="currentColor" />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toBeTruthy();
      });

      it(`${iconName} should accept testID prop`, () => {
        const { container } = render(<Icon testID={`test-${iconName}`} />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toBeTruthy();
        if (svg) {
          expect(svg.getAttribute('data-testid')).toBe(`test-${iconName}`);
        }
      });

      it(`${iconName} should have componentId`, () => {
        expect(
          (Icon as IconComponent & { componentId: string }).componentId,
        ).toBe(iconName);
      });
    });
  });

  describe('All icons structure', () => {
    iconNames.forEach((iconName) => {
      it(`${iconName} should be a valid icon component`, () => {
        const Icon = allIcons[iconName];

        // Check it's a function
        expect(typeof Icon).toBe('function');

        // Check it has componentId (may differ from export name)
        const IconWithId = Icon as IconComponent & { componentId: string };
        expect(IconWithId.componentId).toBeDefined();
        expect(typeof IconWithId.componentId).toBe('string');
        expect(IconWithId.componentId).toMatch(/Icon$/);

        // Check it can be rendered
        const { container } = render(<Icon />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toBeTruthy();

        // Check it has required SVG attributes
        if (svg) {
          expect(svg.getAttribute('viewBox')).toBeTruthy();
          expect(svg.getAttribute('width')).toBeTruthy();
          expect(svg.getAttribute('height')).toBeTruthy();
        }
      });
    });
  });
});
