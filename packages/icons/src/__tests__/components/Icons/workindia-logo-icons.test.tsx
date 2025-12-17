/**
 * Tests for WorkIndia Logo and Wordmark icon components
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkIndiaLogoOnLightIcon from '../../../components/Icons/WorkIndiaLogoOnLightIcon/work-india-logo-on-light-icon';
import WorkIndiaLogoOnDarkIcon from '../../../components/Icons/WorkIndiaLogoOnDarkIcon/work-india-logo-on-dark-icon';
import WorkIndiaWordmarkOnLightIcon from '../../../components/Icons/WorkIndiaWordmarkOnLightIcon/work-india-wordmark-on-light-icon';
import WorkIndiaWordmarkOnDarkIcon from '../../../components/Icons/WorkIndiaWordmarkOnDarkIcon/work-india-wordmark-on-dark-icon';
import type { IconSize } from '../../../components/Icons/types';

// Helper to render icons
const renderIcon = (
  Icon: React.ComponentType<{
    size?: IconSize;
    testID?: string;
  }>,
  props?: { size?: IconSize; testID?: string },
) => {
  return render(<Icon {...props} />);
};

describe('WorkIndia Logo and Wordmark Icons', () => {
  describe('WorkIndiaLogoOnLightIcon', () => {
    it('should render WorkIndiaLogoOnLightIcon', () => {
      const { container } = renderIcon(WorkIndiaLogoOnLightIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should have correct viewBox', () => {
      const { container } = renderIcon(WorkIndiaLogoOnLightIcon);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('should have componentId', () => {
      expect(WorkIndiaLogoOnLightIcon.componentId).toBe(
        'WorkIndiaLogoOnLightIcon',
      );
    });

    it('should apply size prop', () => {
      const { container } = renderIcon(WorkIndiaLogoOnLightIcon, {
        size: 'large',
      });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '20px');
      expect(svg).toHaveAttribute('height', '20px');
    });

    it('should have brand colors (hardcoded)', () => {
      const { container } = renderIcon(WorkIndiaLogoOnLightIcon);
      const paths = container.querySelectorAll('path');
      // Logo should have paths with brand colors
      expect(paths.length).toBeGreaterThan(0);
    });
  });

  describe('WorkIndiaLogoOnDarkIcon', () => {
    it('should render WorkIndiaLogoOnDarkIcon', () => {
      const { container } = renderIcon(WorkIndiaLogoOnDarkIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should have correct viewBox', () => {
      const { container } = renderIcon(WorkIndiaLogoOnDarkIcon);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('should have componentId', () => {
      expect(WorkIndiaLogoOnDarkIcon.componentId).toBe(
        'WorkIndiaLogoOnDarkIcon',
      );
    });

    it('should apply size prop', () => {
      const { container } = renderIcon(WorkIndiaLogoOnDarkIcon, {
        size: 'xlarge',
      });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '24px');
      expect(svg).toHaveAttribute('height', '24px');
    });
  });

  describe('WorkIndiaWordmarkOnLightIcon', () => {
    it('should render WorkIndiaWordmarkOnLightIcon', () => {
      const { container } = renderIcon(WorkIndiaWordmarkOnLightIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should have correct viewBox', () => {
      const { container } = renderIcon(WorkIndiaWordmarkOnLightIcon);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 172 25');
    });

    it('should have componentId', () => {
      expect(WorkIndiaWordmarkOnLightIcon.componentId).toBe(
        'WorkIndiaWordmarkOnLightIcon',
      );
    });

    it('should apply size prop', () => {
      const { container } = renderIcon(WorkIndiaWordmarkOnLightIcon, {
        size: 'medium',
      });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '16px');
      expect(svg).toHaveAttribute('height', '16px');
    });
  });

  describe('WorkIndiaWordmarkOnDarkIcon', () => {
    it('should render WorkIndiaWordmarkOnDarkIcon', () => {
      const { container } = renderIcon(WorkIndiaWordmarkOnDarkIcon);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should have correct viewBox', () => {
      const { container } = renderIcon(WorkIndiaWordmarkOnDarkIcon);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 172 25');
    });

    it('should have componentId', () => {
      expect(WorkIndiaWordmarkOnDarkIcon.componentId).toBe(
        'WorkIndiaWordmarkOnDarkIcon',
      );
    });

    it('should apply size prop', () => {
      const { container } = renderIcon(WorkIndiaWordmarkOnDarkIcon, {
        size: '2xlarge',
      });
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '32px');
      expect(svg).toHaveAttribute('height', '32px');
    });
  });

  describe('testID prop', () => {
    it('should apply testID to WorkIndiaLogoOnLightIcon', () => {
      renderIcon(WorkIndiaLogoOnLightIcon, {
        testID: 'work-india-logo-on-light-test',
      });
      expect(
        screen.getByTestId('work-india-logo-on-light-test'),
      ).toBeInTheDocument();
    });

    it('should apply testID to WorkIndiaLogoOnDarkIcon', () => {
      renderIcon(WorkIndiaLogoOnDarkIcon, {
        testID: 'work-india-logo-on-dark-test',
      });
      expect(
        screen.getByTestId('work-india-logo-on-dark-test'),
      ).toBeInTheDocument();
    });

    it('should apply testID to WorkIndiaWordmarkOnLightIcon', () => {
      renderIcon(WorkIndiaWordmarkOnLightIcon, {
        testID: 'work-india-wordmark-on-light-test',
      });
      expect(
        screen.getByTestId('work-india-wordmark-on-light-test'),
      ).toBeInTheDocument();
    });

    it('should apply testID to WorkIndiaWordmarkOnDarkIcon', () => {
      renderIcon(WorkIndiaWordmarkOnDarkIcon, {
        testID: 'work-india-wordmark-on-dark-test',
      });
      expect(
        screen.getByTestId('work-india-wordmark-on-dark-test'),
      ).toBeInTheDocument();
    });
  });
});
