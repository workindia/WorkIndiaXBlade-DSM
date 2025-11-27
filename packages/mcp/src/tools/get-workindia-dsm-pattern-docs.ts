import { readFileSync } from 'fs';
import { join } from 'path';
import { z } from 'zod';
import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  PATTERNS_KNOWLEDGEBASE_DIRECTORY,
  CURSOR_RULES_VERSION,
  CHECK_CURSOR_RULES_DESCRIPTION,
} from '../utils/tokens.js';

import { getWorkIndiaDocsList } from '../utils/general-utils.js';
import { handleError } from '../utils/error-utils.js';
import { getWorkIndiaDocsResponseText } from '../utils/get-workindia-docs-response-text.js';
import {
  isCursorRuleFileMissing,
  areCursorRulesOutdated,
  cursorRuleCreationInstructions,
} from '../utils/cursor-rules-utils.js';
import { getWorkIndiaDsmComponentDocsToolName } from './get-workindia-dsm-component-docs.js';

const workIndiaPatternsList = getWorkIndiaDocsList('patterns');
const whichPatternToUseGuide = readFileSync(
  join(PATTERNS_KNOWLEDGEBASE_DIRECTORY, 'index.md'),
  'utf8',
);

const getWorkIndiaDsmPatternDocsToolName = 'get_workindia_dsm_pattern_docs';

const getWorkIndiaDsmPatternDocsToolDescription = `Fetch the WorkIndia Design System pattern docs. Use this to get information about design patterns, best practices, and implementation guidelines.`;

const getWorkIndiaDsmPatternDocsToolSchema = {
  patternsList: z
    .string()
    .describe(
      `Comma separated list of WorkIndia DSM pattern names. E.g. "ListView, DetailedView". Possible values: ${workIndiaPatternsList.join(
        ', ',
      )}. Here is guide on how to decide which pattern to use: ${whichPatternToUseGuide}`,
    ),
  currentProjectRootDirectory: z
    .string()
    .describe(
      "The working root directory of the consumer's project. Do not use root directory, do not use '.', only use absolute path to current directory",
    ),
  clientName: z
    .enum(['claude', 'cursor', 'unknown'])
    .default('unknown')
    .describe(
      'The name of the client that is calling the tool. It can be "claude", "cursor", or "unknown". Use "unknown" if you are not sure.',
    ),
  cursorRuleVersion: z.string().describe(CHECK_CURSOR_RULES_DESCRIPTION),
};

const getWorkIndiaDsmPatternDocsToolCallback: ToolCallback<
  typeof getWorkIndiaDsmPatternDocsToolSchema
> = ({
  patternsList,
  currentProjectRootDirectory,
  clientName,
  cursorRuleVersion,
}) => {
  const components = patternsList.split(',').map((s: string) => s.trim());
  const invalidComponents = components.filter(
    (comp: string) => !workIndiaPatternsList.includes(comp),
  );
  if (invalidComponents.length > 0) {
    return handleError({
      toolName: getWorkIndiaDsmPatternDocsToolName,
      mcpErrorMessage: `Invalid argument componentsList. Invalid values: ${invalidComponents.join(
        ', ',
      )}. Valid component docs values: ${workIndiaPatternsList.join(
        ', ',
      )}. Make sure to call the parent component name (e.g. instead of calling ListViewFilters, call ListView)`,
    });
  }

  if (isCursorRuleFileMissing(cursorRuleVersion, clientName)) {
    return {
      content: [
        {
          type: 'text',
          text: `Cursor rules do not exist. Create them using the following instructions: \n\n
          ${cursorRuleCreationInstructions(currentProjectRootDirectory)}`,
        },
      ],
    };
  }
  if (areCursorRulesOutdated(cursorRuleVersion, clientName)) {
    return {
      content: [
        {
          type: 'text',
          text: `Cursor rules are outdated. Expected version: ${CURSOR_RULES_VERSION}. Current version: ${cursorRuleVersion}. Update them using the following instructions: \n\n
          ${cursorRuleCreationInstructions(currentProjectRootDirectory)}`,
        },
      ],
    };
  }

  try {
    const responseText = getWorkIndiaDocsResponseText({
      docsList: patternsList,
      documentationType: 'patterns',
    });

    return {
      content: [
        {
          type: 'text',
          text: `Below is the documentation for Patterns. After this, call ${getWorkIndiaDsmComponentDocsToolName} to get documentation for components that are used in patterns.:\n ${responseText}`,
        },
      ],
    };
  } catch (error: unknown) {
    return handleError({
      toolName: getWorkIndiaDsmPatternDocsToolName,
      errorObject: error,
    });
  }
};

export {
  getWorkIndiaDsmPatternDocsToolName,
  getWorkIndiaDsmPatternDocsToolDescription,
  getWorkIndiaDsmPatternDocsToolSchema,
  getWorkIndiaDsmPatternDocsToolCallback,
};
