import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  createWorkIndiaDsmCursorRulesToolName,
  createWorkIndiaDsmCursorRulesToolDescription,
  createWorkIndiaDsmCursorRulesToolSchema,
  createWorkIndiaDsmCursorRulesToolCallback,
} from './tools/create-workindia-dsm-cursor-rules.js';
import {
  getWorkIndiaDsmComponentDocsToolName,
  getWorkIndiaDsmComponentDocsToolDescription,
  getWorkIndiaDsmComponentDocsToolSchema,
  getWorkIndiaDsmComponentDocsToolCallback,
} from './tools/get-workindia-dsm-component-docs.js';
import {
  hiWorkIndiaDsmToolName,
  hiWorkIndiaDsmToolDescription,
  hiWorkIndiaDsmToolSchema,
  hiWorkIndiaDsmToolCallback,
} from './tools/hi-workindia-dsm.js';
import { getPackageJSONVersion } from './utils/general-utils.js';
import {
  getWorkIndiaDsmPatternDocsToolName,
  getWorkIndiaDsmPatternDocsToolDescription,
  getWorkIndiaDsmPatternDocsToolSchema,
  getWorkIndiaDsmPatternDocsToolCallback,
} from './tools/get-workindia-dsm-pattern-docs.js';
import {
  getWorkIndiaDsmGeneralDocsToolName,
  getWorkIndiaDsmGeneralDocsToolDescription,
  getWorkIndiaDsmGeneralDocsToolSchema,
  getWorkIndiaDsmGeneralDocsToolCallback,
} from './tools/get-workindia-dsm-general-docs.js';

export const createServer = (): McpServer => {
  const server: McpServer = new McpServer({
    name: 'WorkIndia DSM MCP',
    version: getPackageJSONVersion(),
  });

  server.registerTool(
    hiWorkIndiaDsmToolName,
    {
      description: hiWorkIndiaDsmToolDescription,
      inputSchema: hiWorkIndiaDsmToolSchema,
    },
    hiWorkIndiaDsmToolCallback,
  );

  // TODO: Integrate createNewWorkIndiaProject tool
  // The reference implementation from blade does not fit with WorkIndia's frontend setup.
  // Need to adapt it to WorkIndia's specific frontend setup before integrating.

  // TODO: Add createNewWorkIndiaProject tool once adapted to WorkIndia's frontend setup
  // server.tool(
  //   createNewWorkIndiaProjectToolName,
  //   createNewWorkIndiaProjectToolDescription,
  //   createNewWorkIndiaProjectToolSchema,
  //   createNewWorkIndiaProjectToolCallback,
  // );

  server.registerTool(
    createWorkIndiaDsmCursorRulesToolName,
    {
      description: createWorkIndiaDsmCursorRulesToolDescription,
      inputSchema: createWorkIndiaDsmCursorRulesToolSchema,
    },
    createWorkIndiaDsmCursorRulesToolCallback,
  );

  server.registerTool(
    getWorkIndiaDsmComponentDocsToolName,
    {
      description: getWorkIndiaDsmComponentDocsToolDescription,
      inputSchema: getWorkIndiaDsmComponentDocsToolSchema,
    },
    getWorkIndiaDsmComponentDocsToolCallback,
  );

  server.registerTool(
    getWorkIndiaDsmPatternDocsToolName,
    {
      description: getWorkIndiaDsmPatternDocsToolDescription,
      inputSchema: getWorkIndiaDsmPatternDocsToolSchema,
    },
    getWorkIndiaDsmPatternDocsToolCallback,
  );

  server.registerTool(
    getWorkIndiaDsmGeneralDocsToolName,
    {
      description: getWorkIndiaDsmGeneralDocsToolDescription,
      inputSchema: getWorkIndiaDsmGeneralDocsToolSchema,
    },
    getWorkIndiaDsmGeneralDocsToolCallback,
  );

  return server;
};
