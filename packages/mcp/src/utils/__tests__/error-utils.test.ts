import { handleError } from '../error-utils.js';

describe('error-utils', () => {
  describe('handleError', () => {
    it('should return error with mcpErrorMessage when no errorObject provided', () => {
      const result = handleError({
        toolName: 'test_tool',
        mcpErrorMessage: 'Custom error message',
      });

      expect(result.isError).toBe(true);
      expect(result.content).toBeDefined();
      expect(result.content.length).toBe(1);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      expect(result.content[0].text).toContain('Custom error message');
    });

    it('should return error with Error message when Error instance provided', () => {
      const error = new Error('Test error message');
      const result = handleError({
        toolName: 'test_tool',
        errorObject: error,
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      expect(result.content[0].text).toContain('Test error message');
    });

    it('should return error with stringified object when object error provided', () => {
      const errorObject = { code: 'ERR_TEST', message: 'Object error' };
      const result = handleError({
        toolName: 'test_tool',
        errorObject,
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      expect(result.content[0].text).toContain('ERR_TEST');
    });

    it('should handle circular reference errors gracefully', () => {
      const circularObject: { self?: unknown } = {};
      circularObject.self = circularObject;

      // This should not throw, but should handle the circular reference
      const result = handleError({
        toolName: 'test_tool',
        errorObject: circularObject,
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      // Should either contain the stringified object or the fallback message
      expect(result.content[0].text.length).toBeGreaterThan(0);
      // Should handle circular reference (either stringify or show fallback)
      expect(
        result.content[0].text.includes('[Unable to stringify error object]') ||
          result.content[0].text.includes('test_tool'),
      ).toBe(true);
    });

    it('should return error with string representation when primitive error provided', () => {
      const result = handleError({
        toolName: 'test_tool',
        errorObject: 'String error',
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      expect(result.content[0].text).toContain('String error');
    });

    it('should handle number errors', () => {
      const result = handleError({
        toolName: 'test_tool',
        errorObject: 404,
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      expect(result.content[0].text).toContain('404');
    });

    it('should handle boolean errors', () => {
      // Note: false is falsy, so !errorObject is true, which means mcpErrorMessage is used
      // To test boolean conversion, we need to pass true
      const result = handleError({
        toolName: 'test_tool',
        errorObject: true,
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      expect(result.content[0].text).toContain('true');
    });

    it('should use errorObject when both mcpErrorMessage and errorObject provided', () => {
      const result = handleError({
        toolName: 'test_tool',
        errorObject: new Error('Error object message'),
        mcpErrorMessage: 'Custom MCP error message',
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].type).toBe('text');
      expect(result.content[0].text).toContain('test_tool');
      // When errorObject is provided, it takes precedence over mcpErrorMessage
      expect(result.content[0].text).toContain('Error object message');
    });
  });
});
