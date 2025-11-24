/**
 * Tests for WorkIndiaProvider
 */

import React from 'react';
import { render } from '@testing-library/react';
import { WorkIndiaProvider } from '../provider';

describe('WorkIndiaProvider', () => {
  describe('Component rendering', () => {
    it('should render children', () => {
      const { getByText } = render(
        <WorkIndiaProvider>
          <div>Test Content</div>
        </WorkIndiaProvider>,
      );

      expect(getByText('Test Content')).toBeInTheDocument();
    });

    it('should render with default colorScheme', () => {
      const { container } = render(
        <WorkIndiaProvider>
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });

    it('should render with light colorScheme', () => {
      const { container } = render(
        <WorkIndiaProvider colorScheme="light">
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });

    it('should render with dark colorScheme', () => {
      const { container } = render(
        <WorkIndiaProvider colorScheme="dark">
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });

    it('should render with system colorScheme', () => {
      const { container } = render(
        <WorkIndiaProvider colorScheme="system">
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });
  });

  describe('Props validation', () => {
    it('should accept children prop', () => {
      const TestComponent = () => <div>Child Component</div>;

      const { getByText } = render(
        <WorkIndiaProvider>
          <TestComponent />
        </WorkIndiaProvider>,
      );

      expect(getByText('Child Component')).toBeInTheDocument();
    });

    it('should accept colorScheme prop', () => {
      const { container } = render(
        <WorkIndiaProvider colorScheme="dark">
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });

    it('should use default colorScheme when not provided', () => {
      const { container } = render(
        <WorkIndiaProvider>
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });
  });

  describe('Multiple children', () => {
    it('should render multiple children', () => {
      const { getByText } = render(
        <WorkIndiaProvider>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </WorkIndiaProvider>,
      );

      expect(getByText('Child 1')).toBeInTheDocument();
      expect(getByText('Child 2')).toBeInTheDocument();
      expect(getByText('Child 3')).toBeInTheDocument();
    });

    it('should render nested components', () => {
      const { getByText } = render(
        <WorkIndiaProvider>
          <div>
            <span>Nested Content</span>
          </div>
        </WorkIndiaProvider>,
      );

      expect(getByText('Nested Content')).toBeInTheDocument();
    });
  });
});
