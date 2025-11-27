import {
  hiWorkIndiaDsmToolName,
  hiWorkIndiaDsmToolDescription,
  hiWorkIndiaDsmToolSchema,
  hiWorkIndiaDsmToolCallback,
} from '../hi-workindia-dsm.js';

describe('hi-workindia-dsm tool', () => {
  it('should have correct tool name', () => {
    expect(hiWorkIndiaDsmToolName).toBe('hi_workindia_dsm');
  });

  it('should have a non-empty description', () => {
    expect(hiWorkIndiaDsmToolDescription).toBeTruthy();
    expect(typeof hiWorkIndiaDsmToolDescription).toBe('string');
    expect(hiWorkIndiaDsmToolDescription.length).toBeGreaterThan(0);
  });

  it('should have an empty schema object', () => {
    expect(hiWorkIndiaDsmToolSchema).toEqual({});
  });

  it('should return a valid response with text content', async () => {
    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await hiWorkIndiaDsmToolCallback({});

    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
    expect(result.content.length).toBeGreaterThan(0);

    const firstContent = result.content[0];
    expect(firstContent.type).toBe('text');
    if (firstContent.type === 'text') {
      expect(typeof firstContent.text).toBe('string');
      expect(firstContent.text.length).toBeGreaterThan(0);
    }
  });

  it('should include version information in the message', async () => {
    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await hiWorkIndiaDsmToolCallback({});
    const firstContent = result.content[0];

    if (firstContent.type === 'text') {
      // The message should contain version info
      expect(firstContent.text).toContain('WorkIndia DSM AI MCP');
    }
  });
});

