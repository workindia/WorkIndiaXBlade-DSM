import { z } from 'zod';
import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  CURSOR_RULES_VERSION,
  CHECK_CURSOR_RULES_DESCRIPTION,
  ICONS_KNOWLEDGEBASE_DIRECTORY,
} from '../utils/tokens.js';
import { getWorkIndiaDocsList } from '../utils/general-utils.js';
import { handleError } from '../utils/error-utils.js';
import { readdirSync } from 'fs';

import { getWorkIndiaDocsResponseText } from '../utils/get-workindia-docs-response-text.js';
import {
  isCursorRuleFileMissing,
  areCursorRulesOutdated,
  cursorRuleCreationInstructions,
} from '../utils/cursor-rules-utils.js';

const workIndiaComponentsList = getWorkIndiaDocsList('components');

const getWorkIndiaIconsList = (): string[] => {
  const iconsList: string[] = [];
  try {
    const files = readdirSync(ICONS_KNOWLEDGEBASE_DIRECTORY);
    for (const file of files) {
      if (file.endsWith('.md') && !file.includes('index.md')) {
        iconsList.push(file.replace('.md', '').trim());
      }
    }
  } catch {
    return [];
  }
  return iconsList;
};

const workIndiaIconsList = getWorkIndiaIconsList();
const workIndiaAllDocsList = [
  ...workIndiaComponentsList,
  ...workIndiaIconsList,
];
const workIndiaComponentsListString = workIndiaAllDocsList.join(', ');
const getWorkIndiaDsmComponentDocsToolName = 'get_workindia_dsm_component_docs';

const getWorkIndiaDsmComponentDocsToolDescription = `Fetch the WorkIndia Design System docs for the given list of components or icons. Use this to get information about the components and their props while adding or changing a component, or to get documentation about icons (when to use, how to use, when not to use).`;

const getWorkIndiaDsmComponentDocsToolSchema = {
  componentsList: z
    .string()
    .describe(
      `Comma separated list of semantic WorkIndia DSM component names. E.g. "Button, Accordion". Make sure to use the semantic components (like PasswordInput for passwords). Possible values: ${workIndiaComponentsListString}`,
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

const getWorkIndiaDsmComponentDocsToolCallback: ToolCallback<
  typeof getWorkIndiaDsmComponentDocsToolSchema
> = ({
  componentsList,
  currentProjectRootDirectory,
  clientName,
  cursorRuleVersion,
}) => {
  const components = componentsList.split(',').map((s) => s.trim());
  const invalidComponents = components.filter(
    (comp) => !workIndiaAllDocsList.includes(comp),
  );
  const invalidComponentsString = invalidComponents.join(', ');
  if (invalidComponents.length > 0) {
    return handleError({
      toolName: getWorkIndiaDsmComponentDocsToolName,
      mcpErrorMessage: `Invalid argument componentsList. Invalid values: ${invalidComponentsString}. Valid component and icon docs values: ${workIndiaComponentsListString}. Make sure to call the parent component name (e.g. instead of calling ListViewFilters, call ListView)`,
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
    let responseText = '';

    const componentDocs = components.filter((c) =>
      workIndiaComponentsList.includes(c),
    );
    const iconDocs = components.filter((c) => workIndiaIconsList.includes(c));

    if (componentDocs.length > 0) {
      responseText += getWorkIndiaDocsResponseText({
        docsList: componentDocs.join(', '),
        documentationType: 'components',
      });
    }

    if (iconDocs.length > 0) {
      responseText += getWorkIndiaDocsResponseText({
        docsList: iconDocs.join(', '),
        documentationType: 'icons',
      });
    }

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
      toolName: getWorkIndiaDsmComponentDocsToolName,
      errorObject: error,
    });
  }
};

export {
  getWorkIndiaDsmComponentDocsToolName,
  getWorkIndiaDsmComponentDocsToolDescription,
  getWorkIndiaDsmComponentDocsToolSchema,
  getWorkIndiaDsmComponentDocsToolCallback,
};
