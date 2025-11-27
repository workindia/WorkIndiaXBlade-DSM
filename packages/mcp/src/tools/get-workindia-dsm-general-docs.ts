import { readFileSync } from 'fs';
import { join } from 'path';
import { z } from 'zod';
import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  GENERAL_KNOWLEDGEBASE_DIRECTORY,
  CHECK_CURSOR_RULES_DESCRIPTION,
  CURSOR_RULES_VERSION,
} from '../utils/tokens.js';

import { getWorkIndiaDocsList } from '../utils/general-utils.js';
import { handleError } from '../utils/error-utils.js';
import { getWorkIndiaDocsResponseText } from '../utils/get-workindia-docs-response-text.js';
import {
  isCursorRuleFileMissing,
  areCursorRulesOutdated,
  cursorRuleCreationInstructions,
} from '../utils/cursor-rules-utils.js';

const workIndiaGeneralDocsList = getWorkIndiaDocsList('general');

const getWorkIndiaDsmGeneralDocsToolName = 'get_workindia_dsm_general_docs';

const whichGeneralDocsToUse = readFileSync(
  join(GENERAL_KNOWLEDGEBASE_DIRECTORY, 'index.md'),
  'utf8',
);

const getWorkIndiaDsmGeneralDocsToolDescription = `Fetch general WorkIndia Design System documentation. Use this to get information about setup, installation, theming, tokens, and general guidelines.`;

const getWorkIndiaDsmGeneralDocsToolSchema = {
  topicsList: z
    .string()
    .describe(
      `Comma separated list of general documentation topics. E.g. "Installation, Theming". Possible values: ${workIndiaGeneralDocsList.join(
        ', ',
      )}. Here is guide on how to decide which general docs you might need:\n ${whichGeneralDocsToUse}`,
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

const getWorkIndiaDsmGeneralDocsToolCallback: ToolCallback<
  typeof getWorkIndiaDsmGeneralDocsToolSchema
> = ({
  topicsList,
  currentProjectRootDirectory,
  clientName,
  cursorRuleVersion,
}) => {
  const topicsListTyped: string = topicsList;
  const currentProjectRootDirectoryTyped: string = currentProjectRootDirectory;
  const clientNameTyped: 'claude' | 'cursor' | 'unknown' = clientName;
  const cursorRuleVersionTyped: string = cursorRuleVersion;
  const topics: string[] = topicsListTyped
    .split(',')
    .map((s: string) => s.trim());
  const invalidTopics: string[] = topics.filter(
    (topic: string) => !workIndiaGeneralDocsList.includes(topic),
  );
  if (invalidTopics.length > 0) {
    return handleError({
      toolName: getWorkIndiaDsmGeneralDocsToolName,
      mcpErrorMessage: `Invalid argument topicsList. Invalid values: ${invalidTopics.join(
        ', ',
      )}. Valid general docs values: ${workIndiaGeneralDocsList.join(', ')}`,
    });
  }

  if (isCursorRuleFileMissing(cursorRuleVersionTyped, clientNameTyped)) {
    return {
      content: [
        {
          type: 'text',
          text: `Cursor rules do not exist. Create them using the following instructions: \n\n
          ${cursorRuleCreationInstructions(currentProjectRootDirectoryTyped)}`,
        },
      ],
    };
  }

  if (areCursorRulesOutdated(cursorRuleVersionTyped, clientNameTyped)) {
    return {
      content: [
        {
          type: 'text',
          text: `Cursor rules are outdated. Expected version: ${CURSOR_RULES_VERSION}. Current version: ${cursorRuleVersionTyped}. Update them using the following instructions: \n\n
          ${cursorRuleCreationInstructions(currentProjectRootDirectoryTyped)}`,
        },
      ],
    };
  }

  try {
    const responseText = getWorkIndiaDocsResponseText({
      docsList: topicsListTyped,
      documentationType: 'general',
    });

    return {
      content: [
        {
          type: 'text',
          text: responseText.trim(),
        },
      ],
    };
  } catch (error: unknown) {
    return handleError({
      toolName: getWorkIndiaDsmGeneralDocsToolName,
      errorObject: error,
    });
  }
};

export {
  getWorkIndiaDsmGeneralDocsToolName,
  getWorkIndiaDsmGeneralDocsToolDescription,
  getWorkIndiaDsmGeneralDocsToolSchema,
  getWorkIndiaDsmGeneralDocsToolCallback,
};
