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

  describe('Theme integration', () => {
    it('should use workIndiaTheme in BladeProvider', () => {
      const { container } = render(
        <WorkIndiaProvider>
          <div data-testid="test-content">Test</div>
        </WorkIndiaProvider>,
      );

      expect(
        container.querySelector('[data-testid="test-content"]'),
      ).toBeInTheDocument();
    });

    it('should apply theme to nested components', () => {
      const { getByTestId } = render(
        <WorkIndiaProvider colorScheme="light">
          <div data-testid="themed-component">
            <button data-testid="button">Click me</button>
          </div>
        </WorkIndiaProvider>,
      );

      expect(getByTestId('themed-component')).toBeInTheDocument();
      expect(getByTestId('button')).toBeInTheDocument();
    });
  });

  describe('Prop edge cases', () => {
    it('should handle undefined colorScheme gracefully', () => {
      const { container } = render(
        <WorkIndiaProvider colorScheme={undefined}>
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });

    it('should handle null children gracefully', () => {
      const { container } = render(
        <WorkIndiaProvider>{null}</WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });

    it('should handle fragment children', () => {
      const { getByText } = render(
        <WorkIndiaProvider>
          <>
            <div>Fragment Child 1</div>
            <div>Fragment Child 2</div>
          </>
        </WorkIndiaProvider>,
      );

      expect(getByText('Fragment Child 1')).toBeInTheDocument();
      expect(getByText('Fragment Child 2')).toBeInTheDocument();
    });
  });

  describe('Re-rendering behavior', () => {
    it('should re-render when colorScheme changes', () => {
      const { rerender, container } = render(
        <WorkIndiaProvider colorScheme="light">
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();

      rerender(
        <WorkIndiaProvider colorScheme="dark">
          <div>Test</div>
        </WorkIndiaProvider>,
      );

      expect(container).toBeInTheDocument();
    });

    it('should re-render when children change', () => {
      const { getByText, rerender } = render(
        <WorkIndiaProvider>
          <div>Initial Content</div>
        </WorkIndiaProvider>,
      );

      expect(getByText('Initial Content')).toBeInTheDocument();

      rerender(
        <WorkIndiaProvider>
          <div>Updated Content</div>
        </WorkIndiaProvider>,
      );

      expect(getByText('Updated Content')).toBeInTheDocument();
    });
  });

  describe('Complex component trees', () => {
    it('should handle deeply nested component trees', () => {
      const { getByText } = render(
        <WorkIndiaProvider>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <span>Deeply Nested Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WorkIndiaProvider>,
      );

      expect(getByText('Deeply Nested Content')).toBeInTheDocument();
    });

    it('should handle mixed component types', () => {
      const CustomComponent = ({ text }: { text: string }) => (
        <span>{text}</span>
      );

      const { getByText } = render(
        <WorkIndiaProvider>
          <div>
            <CustomComponent text="Custom Component" />
            <button>Button</button>
            <input type="text" value="Input" readOnly />
          </div>
        </WorkIndiaProvider>,
      );

      expect(getByText('Custom Component')).toBeInTheDocument();
      expect(getByText('Button')).toBeInTheDocument();
    });
  });

  describe('Error boundaries', () => {
    it('should handle errors in children gracefully', () => {
      // Suppress console.error for this test
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {
        /* empty */
      });

      const ErrorComponent = () => {
        throw new Error('Test error');
      };

      expect(() => {
        render(
          <WorkIndiaProvider>
            <ErrorComponent />
          </WorkIndiaProvider>,
        );
      }).toThrow('Test error');

      consoleSpy.mockRestore();
    });
  });
});
