/**
 * Tests for Svg component
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Svg from '../../../components/_Svg/Svg';

describe('Svg', () => {
  describe('Basic rendering', () => {
    it('should render svg element', () => {
      const { container } = render(
        <Svg width="16px" height="16px" viewBox="0 0 16 16" fill="none">
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render children', () => {
      render(
        <Svg width="16px" height="16px" viewBox="0 0 16 16" fill="none">
          <path data-testid="test-path" d="M0 0" />
        </Svg>,
      );

      expect(screen.getByTestId('test-path')).toBeInTheDocument();
    });
  });

  describe('Props handling', () => {
    it('should apply width prop', () => {
      const { container } = render(
        <Svg width="20px" height="16px" viewBox="0 0 16 16" fill="none">
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '20px');
    });

    it('should apply height prop', () => {
      const { container } = render(
        <Svg width="16px" height="20px" viewBox="0 0 16 16" fill="none">
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('height', '20px');
    });

    it('should apply viewBox prop', () => {
      const { container } = render(
        <Svg width="16px" height="16px" viewBox="0 0 20 20" fill="none">
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
    });

    it('should apply fill prop', () => {
      const { container } = render(
        <Svg width="16px" height="16px" viewBox="0 0 16 16" fill="red">
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'red');
    });

    it('should apply fillOpacity prop', () => {
      const { container } = render(
        <Svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          fill="none"
          fillOpacity={0.5}
        >
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill-opacity', '0.5');
    });

    it('should apply display prop', () => {
      const { container } = render(
        <Svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          fill="none"
          display="block"
        >
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('display', 'block');
    });

    it('should apply testID prop', () => {
      render(
        <Svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          fill="none"
          testID="test-svg"
        >
          <path d="M0 0" />
        </Svg>,
      );

      expect(screen.getByTestId('test-svg')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have aria-hidden="true" attribute', () => {
      const { container } = render(
        <Svg width="16px" height="16px" viewBox="0 0 16 16" fill="none">
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Additional SVG props', () => {
    it('should pass through additional SVG props', () => {
      const { container } = render(
        <Svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          fill="none"
          className="test-class"
          id="test-id"
        >
          <path d="M0 0" />
        </Svg>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('test-class');
      expect(svg).toHaveAttribute('id', 'test-id');
    });
  });
});
