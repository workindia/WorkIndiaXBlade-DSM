import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { handleError } from '../utils/error-utils.js';
import { cursorRuleCreationInstructions } from '../utils/cursor-rules-utils.js';

const createWorkIndiaDsmCursorRulesToolName =
  'create_workindia_dsm_cursor_rules';

const createWorkIndiaDsmCursorRulesToolDescription =
  'Creates the cursor rules for WorkIndia DSM to help with code generation. Returns the bash script that should be executed. while creating a new WorkIndia DSM project (only when using cursor and when the frontend-workindia-rules.mdc rule does not already exist).';

const createWorkIndiaDsmCursorRulesToolSchema = {
  currentProjectRootDirectory: z
    .string()
    .describe(
      "The working root directory of the consumer's project. Do not use root directory, do not use '.', only use absolute path to current directory",
    ),
};

const createWorkIndiaDsmCursorRulesToolCallback: ToolCallback<
  typeof createWorkIndiaDsmCursorRulesToolSchema
> = ({ currentProjectRootDirectory }) => {
  try {
    return {
      content: [
        {
          type: 'text',
          text: cursorRuleCreationInstructions(currentProjectRootDirectory),
        },
      ],
    };
  } catch (error: unknown) {
    return handleError({
      toolName: createWorkIndiaDsmCursorRulesToolName,
      errorObject: error,
    });
  }
};

export {
  createWorkIndiaDsmCursorRulesToolName,
  createWorkIndiaDsmCursorRulesToolDescription,
  createWorkIndiaDsmCursorRulesToolSchema,
  createWorkIndiaDsmCursorRulesToolCallback,
};
