/**
 * Tests for Icon components
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import EyesIcon from '../../../components/Icons/EyesIcon/eyes-icon';
import EyeIcon from '../../../components/Icons/EyeIcon/eye-icon';
import XIcon from '../../../components/Icons/XIcon/xicon';
import CheckIcon from '../../../components/Icons/CheckIcon/check-icon';
import type { IconSize } from '../../../components/Icons/types';

// Helper to render icons (icons don't require WorkIndiaProvider for basic rendering)
const renderIcon = (
  Icon: React.ComponentType<{
    size?: IconSize;
    color?: string;
    testID?: string;
  }>,
  props?: { size?: IconSize; color?: string; testID?: string },
) => {
  return render(<Icon {...props} />);
};

describe('Icon Components', () => {
  describe('Basic rendering', () => {
    it('should render EyesIcon', () => {
      const { container } = renderIcon(EyesIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render EyeIcon', () => {
      const { container } = renderIcon(EyeIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render XIcon', () => {
      const { container } = renderIcon(XIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render CheckIcon', () => {
      const { container } = renderIcon(CheckIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Size prop', () => {
    it('should apply xsmall size', () => {
      const { container } = renderIcon(EyesIcon, { size: 'xsmall' });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '8px');
      expect(svg).toHaveAttribute('height', '8px');
    });

    it('should apply small size', () => {
      const { container } = renderIcon(EyesIcon, { size: 'small' });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '12px');
      expect(svg).toHaveAttribute('height', '12px');
    });

    it('should apply medium size (default)', () => {
      const { container } = renderIcon(EyesIcon);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '16px');
      expect(svg).toHaveAttribute('height', '16px');
    });

    it('should apply large size', () => {
      const { container } = renderIcon(EyesIcon, { size: 'large' });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '20px');
      expect(svg).toHaveAttribute('height', '20px');
    });

    it('should apply xlarge size', () => {
      const { container } = renderIcon(EyesIcon, { size: 'xlarge' });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '24px');
      expect(svg).toHaveAttribute('height', '24px');
    });

    it('should apply 2xlarge size', () => {
      const { container } = renderIcon(EyesIcon, { size: '2xlarge' });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '32px');
      expect(svg).toHaveAttribute('height', '32px');
    });
  });

  describe('Color prop', () => {
    it('should apply currentColor by default (fill icons)', () => {
      const { container } = renderIcon(EyesIcon);
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('fill', 'currentColor');
    });

    it('should apply currentColor by default (stroke icons)', () => {
      const { container } = renderIcon(EyeIcon);
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('stroke', 'currentColor');
    });

    it('should apply custom color token (fill icons)', () => {
      const { container } = renderIcon(EyesIcon, {
        color: 'interactive.icon.primary',
      });
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('fill', 'interactive.icon.primary');
    });

    it('should apply custom color token (stroke icons)', () => {
      const { container } = renderIcon(EyeIcon, {
        color: 'interactive.icon.primary',
      });
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('stroke', 'interactive.icon.primary');
    });
  });

  describe('testID prop', () => {
    it('should apply testID to svg element', () => {
      renderIcon(EyesIcon, { testID: 'eyes-icon-test' });
      expect(screen.getByTestId('eyes-icon-test')).toBeInTheDocument();
    });

    it('should not have testID when not provided', () => {
      const { container } = renderIcon(EyesIcon);
      const svg = container.querySelector('svg');
      // testID should not be present if not provided
      expect(svg).not.toHaveAttribute('data-testid');
    });
  });

  describe('Component structure', () => {
    it('should have correct viewBox', () => {
      const { container } = renderIcon(EyesIcon);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 20 18');
    });

    it('should have fill="none" on svg element', () => {
      const { container } = renderIcon(EyesIcon);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'none');
    });

    it('should render path elements', () => {
      const { container } = renderIcon(EyesIcon);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });
  });

  describe('ComponentId', () => {
    it('should have componentId property', () => {
      expect(EyesIcon.componentId).toBe('EyesIcon');
      expect(EyeIcon.componentId).toBe('EyeIcon');
      expect(XIcon.componentId).toBe('XIcon');
      expect(CheckIcon.componentId).toBe('CheckIcon');
    });
  });

  describe('Multiple icons', () => {
    it('should render multiple icons independently', () => {
      const { container } = render(
        <>
          <EyesIcon size="small" testID="eyes" />
          <EyeIcon size="large" testID="eye" />
        </>,
      );

      const eyesSvg = container.querySelector('[data-testid="eyes"]');
      const eyeSvg = container.querySelector('[data-testid="eye"]');

      expect(eyesSvg).toHaveAttribute('width', '12px');
      expect(eyeSvg).toHaveAttribute('width', '20px');
    });
  });
});
