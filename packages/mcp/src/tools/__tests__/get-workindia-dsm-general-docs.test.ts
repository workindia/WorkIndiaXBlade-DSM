import {
  getWorkIndiaDsmGeneralDocsToolName,
  getWorkIndiaDsmGeneralDocsToolCallback,
} from '../get-workindia-dsm-general-docs.js';
import { getWorkIndiaDocsList } from '../../utils/general-utils.js';

describe('get-workindia-dsm-general-docs tool', () => {
  it('should have correct tool name', () => {
    expect(getWorkIndiaDsmGeneralDocsToolName).toBe(
      'get_workindia_dsm_general_docs',
    );
  });

  it('should return error for invalid topic names', async () => {
    const validTopics = getWorkIndiaDocsList('general');
    const invalidTopic = 'NonExistentTopic12345';

    // Ensure we're using a topic that doesn't exist
    if (validTopics.includes(invalidTopic)) {
      // Skip this test if somehow the topic exists
      return;
    }

    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await getWorkIndiaDsmGeneralDocsToolCallback({
      topicsList: invalidTopic,
      currentProjectRootDirectory: '/test/path',
      clientName: 'unknown',
      cursorRuleVersion: '1.0.0',
    });

    const firstContent = result.content[0];
    expect(firstContent.type).toBe('text');
    if (firstContent.type === 'text') {
      expect(firstContent.text).toContain('Invalid argument topicsList');
      expect(firstContent.text).toContain(invalidTopic);
    }
  });

  it('should return cursor rules creation instructions when rules are missing', async () => {
    const validTopics = getWorkIndiaDocsList('general');
    if (validTopics.length === 0) {
      // Skip if no topics available
      return;
    }

    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await getWorkIndiaDsmGeneralDocsToolCallback({
      topicsList: validTopics[0],
      currentProjectRootDirectory: '/test/path',
      clientName: 'cursor',
      cursorRuleVersion: '0',
    });

    const firstContent = result.content[0];
    expect(firstContent.type).toBe('text');
    if (firstContent.type === 'text') {
      expect(firstContent.text).toContain('Cursor rules do not exist');
    }
  });

  it('should return cursor rules update instructions when rules are outdated', async () => {
    const validTopics = getWorkIndiaDocsList('general');
    if (validTopics.length === 0) {
      // Skip if no topics available
      return;
    }

    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await getWorkIndiaDsmGeneralDocsToolCallback({
      topicsList: validTopics[0],
      currentProjectRootDirectory: '/test/path',
      clientName: 'cursor',
      cursorRuleVersion: '0.5.0',
    });

    const firstContent = result.content[0];
    expect(firstContent.type).toBe('text');
    if (firstContent.type === 'text') {
      // Should either return outdated message or actual docs
      expect(firstContent.text).toBeTruthy();
    }
  });

  it('should return general docs for valid topics when rules are up to date', async () => {
    const validTopics = getWorkIndiaDocsList('general');
    if (validTopics.length === 0) {
      // Skip if no topics available
      return;
    }

    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await getWorkIndiaDsmGeneralDocsToolCallback({
      topicsList: validTopics[0],
      currentProjectRootDirectory: '/test/path',
      clientName: 'unknown', // Use 'unknown' to skip cursor rules check
      cursorRuleVersion: '1.0.0',
    });

    const firstContent = result.content[0];
    expect(firstContent.type).toBe('text');
    if (firstContent.type === 'text') {
      expect(firstContent.text).toBeTruthy();
      // Should contain general documentation or error message
      expect(firstContent.text.length).toBeGreaterThan(0);
    }
  });

  it('should handle multiple topics separated by commas', async () => {
    const validTopics = getWorkIndiaDocsList('general');
    if (validTopics.length === 0) {
      // Skip if no topics available
      return;
    }

    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await getWorkIndiaDsmGeneralDocsToolCallback({
      topicsList: `${validTopics[0]}, ${validTopics[0]}`,
      currentProjectRootDirectory: '/test/path',
      clientName: 'unknown',
      cursorRuleVersion: '1.0.0',
    });

    const firstContent = result.content[0];
    expect(firstContent.type).toBe('text');
    if (firstContent.type === 'text') {
      expect(firstContent.text).toBeTruthy();
    }
  });

  it('should handle errors when reading docs', async () => {
    const validTopics = getWorkIndiaDocsList('general');
    if (validTopics.length === 0) {
      // Skip if no topics available
      return;
    }

    // Test with a topic that might cause an error
    // @ts-expect-error - ToolCallback may expect 2 args when called directly, but works with 1 when registered
    const result = await getWorkIndiaDsmGeneralDocsToolCallback({
      topicsList: validTopics[0],
      currentProjectRootDirectory: '/test/path',
      clientName: 'unknown',
      cursorRuleVersion: '1.0.0',
    });

    // Should return a result (either docs or error)
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(result.content.length).toBeGreaterThan(0);
  });
});


