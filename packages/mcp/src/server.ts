#!/usr/bin/env node

import { createServer } from './create-server.js';
import { createStdioTransport } from './create-transport.js';

try {
  const server = createServer();
  const transport = createStdioTransport();
  await server.connect(transport);
  // Why console.error? Checkout https://modelcontextprotocol.io/quickstart/server#logging-in-mcp-servers-2
  console.error('WorkIndia DSM MCP connected successfully.');
} catch (error: unknown) {
  console.error('WorkIndia DSM MCP Error', error);
  process.exit(1);
}
