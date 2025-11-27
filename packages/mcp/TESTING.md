# Testing Guide for WorkIndia DSM MCP Package

This guide explains how to test the MCP server package.

## Testing Methods

### 1. MCP Inspector (Interactive Testing)

The easiest way to test the MCP server is using the MCP Inspector, which provides a web-based UI for testing tools interactively.

**Steps:**

```bash
cd packages/mcp
npm run build
npm run inspect
```

**Note:** The test scripts use `NODE_OPTIONS=--experimental-vm-modules` to enable Jest's ES module support, which is required because the package uses `"type": "module"` in `package.json`.

This will:

- Build the TypeScript code
- Start the MCP Inspector
- Open a web UI where you can:
  - View all available tools
  - Call tools with different parameters
  - Inspect responses
  - Debug issues

**Note:** The inspector requires the built code, so make sure to run `npm run build` first.

### 2. Unit Tests

Unit tests are set up using Jest. Run tests with:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

**Test Structure:**

- Tests are located in `src/**/__tests__/` directories
- Test files follow the pattern `*.test.ts`
- Example test files:
  - `src/tools/__tests__/hi-workindia-dsm.test.ts` - Tests for the hi_workindia_dsm tool
  - `src/tools/__tests__/get-workindia-dsm-component-docs.test.ts` - Tests for component docs tool
  - `src/__tests__/create-server.test.ts` - Tests for server creation

**Writing New Tests:**

1. Create a test file next to the file you want to test:

   ```
   src/tools/my-tool.ts
   src/tools/__tests__/my-tool.test.ts
   ```

2. Import the functions you want to test:

   ```typescript
   import { myToolCallback } from '../my-tool.js';
   ```

3. Write test cases:
   ```typescript
   describe('my-tool', () => {
     it('should do something', async () => {
       const result = await myToolCallback({ param: 'value' });
       expect(result.content[0].type).toBe('text');
     });
   });
   ```

**Note:** When testing tool callbacks directly, you may need to use `@ts-expect-error` because the `ToolCallback` type expects 2 arguments when called directly, but works with 1 when registered with the server.

### 3. Integration Testing

For integration testing, you can:

1. **Test with a real MCP client:**
   - Configure the MCP server in Cursor or Claude Desktop
   - Use the tools through the AI interface
   - Verify responses are correct

2. **Test server startup:**
   ```bash
   npm run build
   npm start
   ```
   The server should start without errors and be ready to accept connections.

### 4. Manual Testing Checklist

When testing manually, verify:

- [ ] Server starts without errors (`npm start`)
- [ ] All tools are registered correctly (check with inspector)
- [ ] `hi_workindia_dsm` tool returns welcome message
- [ ] `get_workindia_dsm_component_docs` validates component names
- [ ] `get_workindia_dsm_component_docs` returns docs for valid components
- [ ] `get_workindia_dsm_component_docs` handles cursor rules checks
- [ ] `create_workindia_dsm_cursor_rules` generates correct bash script
- [ ] Error handling works for invalid inputs
- [ ] All tools return properly formatted responses

## Running Tests from Root

You can also run tests from the monorepo root:

```bash
# Run all tests (including MCP package)
npm test

# Run only MCP tests
npm test -- packages/mcp
```

## Troubleshooting

### Tests fail with TypeScript errors

- Make sure `npm install` has been run to install dependencies
- Check that `tsconfig.json` includes Jest types
- Verify test files are in the correct location

### Inspector doesn't start

- Ensure the package is built: `npm run build`
- Check that `dist/server.js` exists and is executable
- Verify Node.js version is 18.x or higher

### Tool callbacks return unexpected results

- Check that the knowledgebase files exist in `knowledgebase/` directory
- Verify component names match the actual markdown files
- Ensure cursor rules version is correct in `src/utils/tokens.ts`

## Continuous Integration

Tests are automatically run in CI/CD pipelines. Make sure all tests pass before merging:

```bash
npm run typecheck  # Type checking
npm test           # Unit tests
npm run lint        # Linting
```
