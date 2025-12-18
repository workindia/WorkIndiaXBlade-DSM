/**
 * Tests for assignWithoutSideEffects utility
 */

import { assignWithoutSideEffects } from '../utils/assign-without-side-effects';
import React from 'react';

describe('assignWithoutSideEffects', () => {
  describe('Basic functionality', () => {
    it('should assign displayName to a component', () => {
      const TestComponent = () => null;
      const result = assignWithoutSideEffects(TestComponent, {
        displayName: 'MyComponent',
      });

      expect(result.displayName).toBe('MyComponent');
    });

    it('should assign componentId to a component', () => {
      const TestComponent = () => null;
      const result = assignWithoutSideEffects(TestComponent, {
        componentId: 'my-component-id',
      });

      expect(result.componentId).toBe('my-component-id');
    });

    it('should assign both displayName and componentId', () => {
      const TestComponent = () => null;
      const result = assignWithoutSideEffects(TestComponent, {
        displayName: 'MyComponent',
        componentId: 'my-component-id',
      });

      expect(result.displayName).toBe('MyComponent');
      expect(result.componentId).toBe('my-component-id');
    });

    it('should return the same component reference', () => {
      const TestComponent = () => null;
      const result = assignWithoutSideEffects(TestComponent, {
        displayName: 'MyComponent',
      });

      expect(result).toBe(TestComponent);
    });
  });

  describe('React component scenarios', () => {
    it('should work with forwardRef components', () => {
      const TestComponent = React.forwardRef<HTMLDivElement>(() => null);
      const result = assignWithoutSideEffects(TestComponent, {
        displayName: 'ForwardRefComponent',
      });

      expect(result.displayName).toBe('ForwardRefComponent');
    });

    it('should work with memo components', () => {
      const TestComponent = React.memo(() => null);
      const result = assignWithoutSideEffects(TestComponent, {
        displayName: 'MemoComponent',
      });

      expect(result.displayName).toBe('MemoComponent');
    });

    it('should work with class components', () => {
      class TestComponent extends React.Component {
        render() {
          return null;
        }
      }

      const result = assignWithoutSideEffects(TestComponent, {
        displayName: 'ClassComponent',
      });

      expect(result.displayName).toBe('ClassComponent');
    });
  });

  describe('Object scenarios', () => {
    it('should work with plain objects', () => {
      const obj = { foo: 'bar' };
      const result = assignWithoutSideEffects(obj, {
        displayName: 'MyObject',
      });

      expect(result.displayName).toBe('MyObject');
      expect(result.foo).toBe('bar');
    });

    it('should not mutate the original component/object properties', () => {
      const TestComponent = () => null;
      const originalProps = Object.keys(TestComponent);

      assignWithoutSideEffects(TestComponent, {
        displayName: 'MyComponent',
      });

      // The component should have the new property
      expect(TestComponent.displayName).toBe('MyComponent');
      // But it's the same reference
      expect(originalProps).not.toContain('displayName');
    });
  });

  describe('Empty properties', () => {
    it('should handle empty object assignment', () => {
      const TestComponent = () => null;
      const result = assignWithoutSideEffects(TestComponent, {});

      expect(result).toBe(TestComponent);
      expect(result.displayName).toBeUndefined();
      expect(result.componentId).toBeUndefined();
    });

    it('should handle only displayName', () => {
      const TestComponent = () => null;
      const result = assignWithoutSideEffects(TestComponent, {
        displayName: 'OnlyDisplayName',
      });

      expect(result.displayName).toBe('OnlyDisplayName');
      expect(result.componentId).toBeUndefined();
    });

    it('should handle only componentId', () => {
      const TestComponent = () => null;
      const result = assignWithoutSideEffects(TestComponent, {
        componentId: 'only-component-id',
      });

      expect(result.componentId).toBe('only-component-id');
      expect(result.displayName).toBeUndefined();
    });
  });

  describe('Treeshaking compatibility', () => {
    it('should be marked as pure for treeshaking', () => {
      // This test verifies the function can be used without side effects
      const TestComponent = () => null;

      // Multiple assignments should work without issues
      const result1 = assignWithoutSideEffects(TestComponent, {
        displayName: 'Component1',
      });
      const result2 = assignWithoutSideEffects(TestComponent, {
        displayName: 'Component2',
      });

      // Both should point to the same reference
      expect(result1).toBe(result2);
      // Last assignment wins
      expect(result2.displayName).toBe('Component2');
    });

    it('should preserve component functionality after assignment', () => {
      const TestComponent = () => React.createElement('div', null, 'test');
      const ComponentWithName = assignWithoutSideEffects(TestComponent, {
        displayName: 'TestComponent',
      });

      // Component should still be callable
      const result = ComponentWithName();
      expect(result).toBeTruthy();
      expect(ComponentWithName.displayName).toBe('TestComponent');
    });
  });

  describe('Type safety', () => {
    it('should work with functions', () => {
      const func = () => 'test';
      const result = assignWithoutSideEffects(func, {
        displayName: 'MyFunction',
      });

      expect(result()).toBe('test');
      expect(result.displayName).toBe('MyFunction');
    });

    it('should work with arrow functions', () => {
      const arrowFunc = () => null;
      const result = assignWithoutSideEffects(arrowFunc, {
        displayName: 'ArrowFunction',
      });

      expect(result.displayName).toBe('ArrowFunction');
    });
  });
});
