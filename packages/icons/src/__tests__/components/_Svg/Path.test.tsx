/**
 * Tests for Path component
 */

import React from 'react';
import { render } from '@testing-library/react';
import Path from '../../../components/_Svg/Path/Path';

describe('Path', () => {
  describe('Basic rendering', () => {
    it('should render path element', () => {
      const { container } = render(<Path d="M0 0 L10 10" />);

      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });

    it('should apply d attribute', () => {
      const { container } = render(<Path d="M0 0 L10 10" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('d', 'M0 0 L10 10');
    });
  });

  describe('Props handling', () => {
    it('should apply fill prop', () => {
      const { container } = render(<Path d="M0 0" fill="red" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('fill', 'red');
    });

    it('should apply fillOpacity prop', () => {
      const { container } = render(<Path d="M0 0" fillOpacity={0.5} />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('fill-opacity', '0.5');
    });

    it('should apply fillRule prop', () => {
      const { container } = render(<Path d="M0 0" fillRule="evenodd" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('fill-rule', 'evenodd');
    });

    it('should apply stroke prop', () => {
      const { container } = render(<Path d="M0 0" stroke="blue" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('stroke', 'blue');
    });

    it('should apply strokeWidth prop', () => {
      const { container } = render(<Path d="M0 0" strokeWidth="2" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('stroke-width', '2');
    });

    it('should apply strokeLinecap prop', () => {
      const { container } = render(<Path d="M0 0" strokeLinecap="round" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });

    it('should apply strokeLinejoin prop', () => {
      const { container } = render(<Path d="M0 0" strokeLinejoin="miter" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('stroke-linejoin', 'miter');
    });

    it('should apply clipPath prop', () => {
      const { container } = render(<Path d="M0 0" clipPath="url(#clip)" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('clip-path', 'url(#clip)');
    });

    it('should apply clipRule prop', () => {
      const { container } = render(<Path d="M0 0" clipRule="nonzero" />);

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('clip-rule', 'nonzero');
    });
  });

  describe('Combined props', () => {
    it('should handle multiple props together', () => {
      const { container } = render(
        <Path
          d="M0 0 L10 10"
          fill="red"
          fillOpacity={0.5}
          stroke="blue"
          strokeWidth="2"
        />,
      );

      const path = container.querySelector('path');
      expect(path).toHaveAttribute('d', 'M0 0 L10 10');
      expect(path).toHaveAttribute('fill', 'red');
      expect(path).toHaveAttribute('fill-opacity', '0.5');
      expect(path).toHaveAttribute('stroke', 'blue');
      expect(path).toHaveAttribute('stroke-width', '2');
    });
  });
});
