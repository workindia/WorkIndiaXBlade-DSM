import {
  createStdioTransport,
  createStreamableHttpTransport,
} from '../create-transport.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

describe('create-transport', () => {
  describe('createStdioTransport', () => {
    it('should return a StdioServerTransport instance', () => {
      const transport = createStdioTransport();
      expect(transport).toBeInstanceOf(StdioServerTransport);
    });

    it('should create a new transport instance each time', () => {
      const transport1 = createStdioTransport();
      const transport2 = createStdioTransport();
      expect(transport1).not.toBe(transport2);
      expect(transport1).toBeInstanceOf(StdioServerTransport);
      expect(transport2).toBeInstanceOf(StdioServerTransport);
    });
  });

  describe('createStreamableHttpTransport', () => {
    // Mock sessionIdGenerator function
    const mockSessionIdGenerator = () =>
      `session-${Math.random().toString(36).substring(7)}`;

    it('should return a StreamableHTTPServerTransport instance', () => {
      const options = {
        fetch: () => Promise.resolve(new Response()),
        sessionIdGenerator: mockSessionIdGenerator,
      };
      const transport = createStreamableHttpTransport(options);
      expect(transport).toBeInstanceOf(StreamableHTTPServerTransport);
    });

    it('should create transport with provided options', () => {
      const mockFetch = () => Promise.resolve(new Response());
      const options = {
        fetch: mockFetch,
        sessionIdGenerator: mockSessionIdGenerator,
      };
      const transport = createStreamableHttpTransport(options);
      expect(transport).toBeInstanceOf(StreamableHTTPServerTransport);
    });

    it('should create a new transport instance each time', () => {
      const options = {
        fetch: () => Promise.resolve(new Response()),
        sessionIdGenerator: mockSessionIdGenerator,
      };
      const transport1 = createStreamableHttpTransport(options);
      const transport2 = createStreamableHttpTransport(options);
      expect(transport1).not.toBe(transport2);
      expect(transport1).toBeInstanceOf(StreamableHTTPServerTransport);
      expect(transport2).toBeInstanceOf(StreamableHTTPServerTransport);
    });

    it('should handle different option configurations', () => {
      const options1 = {
        fetch: () => Promise.resolve(new Response()),
        sessionIdGenerator: mockSessionIdGenerator,
      };
      const options2 = {
        fetch: () => Promise.resolve(new Response()),
        headers: { 'Content-Type': 'application/json' },
        sessionIdGenerator: mockSessionIdGenerator,
      };

      const transport1 = createStreamableHttpTransport(options1);
      const transport2 = createStreamableHttpTransport(options2);

      expect(transport1).toBeInstanceOf(StreamableHTTPServerTransport);
      expect(transport2).toBeInstanceOf(StreamableHTTPServerTransport);
    });
  });
});
