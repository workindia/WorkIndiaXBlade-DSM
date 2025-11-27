import { getWorkIndiaDocsResponseText } from '../get-workindia-docs-response-text.js';

describe('get-workindia-docs-response-text', () => {
  it('should return formatted documentation for valid component', () => {
    // Test with actual knowledgebase files
    const result = getWorkIndiaDocsResponseText({
      docsList: 'Usage',
      documentationType: 'general',
    });

    expect(result).toContain('WorkIndia DSM general documentation');
    expect(result).toContain('Usage');
    expect(result).toContain('# Usage');
  });

  it('should handle multiple components', () => {
    const result = getWorkIndiaDocsResponseText({
      docsList: 'Usage, Usage',
      documentationType: 'general',
    });

    expect(result).toContain('Usage');
    expect(result).toContain('# Usage');
  });

  it('should handle patterns documentation type', () => {
    const result = getWorkIndiaDocsResponseText({
      docsList: 'Usage',
      documentationType: 'patterns',
    });

    expect(result).toContain('WorkIndia DSM patterns documentation');
  });

  it('should handle general documentation type', () => {
    const result = getWorkIndiaDocsResponseText({
      docsList: 'Usage',
      documentationType: 'general',
    });

    expect(result).toContain('WorkIndia DSM general documentation');
    expect(result).toContain('Usage');
  });

  it('should handle file read errors gracefully', () => {
    const result = getWorkIndiaDocsResponseText({
      docsList: 'NonExistentComponent12345',
      documentationType: 'components',
    });

    expect(result).toContain('WorkIndia DSM components documentation');
    expect(result).toContain('NonExistentComponent12345');
    expect(result).toContain('# NonExistentComponent12345');
    expect(result).toContain('⚠️ Error: Could not read documentation');
    expect(result).toContain('NonExistentComponent12345');
    expect(result).toContain('components');
  });

  it('should trim whitespace from component names', () => {
    const result = getWorkIndiaDocsResponseText({
      docsList: ' Usage ,  Usage ',
      documentationType: 'general',
    });

    expect(result).toContain('# Usage');
  });

  it('should handle empty docsList', () => {
    const result = getWorkIndiaDocsResponseText({
      docsList: '',
      documentationType: 'components',
    });

    expect(result).toContain('WorkIndia DSM components documentation');
  });

  it('should handle single component with trailing comma', () => {
    const result = getWorkIndiaDocsResponseText({
      docsList: 'Usage,',
      documentationType: 'general',
    });

    expect(result).toContain('Usage');
    // Should handle empty string after comma
    expect(result).toBeTruthy();
  });
});

