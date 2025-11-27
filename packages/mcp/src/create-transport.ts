import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import type { StreamableHTTPServerTransportOptions } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

export const createStdioTransport = (): StdioServerTransport => {
  return new StdioServerTransport();
};

/**
 * Creating streamable http transport for WorkIndia DSM MCP server.
 *
 * ```
 * import { createServer, createStreamableHttpTransport } from '@workindia/dsm-mcp';
 *
 * const server = createServer();
 *
 * // somewhere in your nodejs server. Refer to https://github.com/modelcontextprotocol/typescript-sdk?tab=readme-ov-file#streamable-http
 * const transport = createStreamableHttpTransport();
 * server.connect(transport);
 * ```
 * @param options - The options for the streamable http transport.
 * @returns The streamable http transport.
 */
export const createStreamableHttpTransport = (
  options: StreamableHTTPServerTransportOptions,
): StreamableHTTPServerTransport => {
  return new StreamableHTTPServerTransport(options);
};
