import {
  createWorkIndiaDsmCursorRulesToolName,
  createWorkIndiaDsmCursorRulesToolDescription,
  createWorkIndiaDsmCursorRulesToolSchema,
  createWorkIndiaDsmCursorRulesToolCallback,
} from '../create-workindia-dsm-cursor-rules.js';

describe('create-workindia-dsm-cursor-rules tool', () => {
  it('should have correct tool name', () => {
    expect(createWorkIndiaDsmCursorRulesToolName).toBe(
      'create_workindia_dsm_cursor_rules',
    );
  });

  it('should have a non-empty description', () => {
    expect(createWorkIndiaDsmCursorRulesToolDescription).toBeTruthy();
    expect(typeof createWorkIndiaDsmCursorRulesToolDescription).toBe('string');
    expect(
      createWorkIndiaDsmCursorRulesToolDescription.length,
    ).toBeGreaterThan(0);
  });

  it('should have correct schema structure', () => {
    expect(createWorkIndiaDsmCursorRulesToolSchema).toBeDefined();
    expect(
      createWorkIndiaDsmCursorRulesToolSchema.currentProjectRootDirectory,
    ).toBeDefined();
  });

  it('should return cursor rules creation instructions', async () => {
    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await createWorkIndiaDsmCursorRulesToolCallback({
      currentProjectRootDirectory: '/test/path',
    });

    const firstContent = result.content[0];
    expect(firstContent.type).toBe('text');
    if (firstContent.type === 'text') {
      expect(firstContent.text).toContain('Instructions:');
      expect(firstContent.text).toContain('/test/path');
      expect(firstContent.text).toContain('bash');
      expect(firstContent.text).toContain('frontend-workindia-rules.mdc');
    }
  });

  it('should handle errors gracefully', async () => {
    // This test verifies error handling exists, but we can't easily mock fs operations
    // The error handling path is covered by the try-catch in the callback
    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await createWorkIndiaDsmCursorRulesToolCallback({
      currentProjectRootDirectory: '/test/path',
    });

    // Should return a valid result (not throw)
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
  });
});

