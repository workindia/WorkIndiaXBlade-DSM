# WorkIndia DSM MCP

[![npm version](https://img.shields.io/npm/v/@workindia/dsm-mcp.svg)](https://www.npmjs.com/package/@workindia/dsm-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)

WorkIndia DSM MCP is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that implements WorkIndia's Design Guidelines and allows you to build Web Interfaces using WorkIndia Design System (based on Razorpay's Blade Design System).

## Available Tools

| Tool Name                           | Description                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hi_workindia_dsm`                  | Provides a welcome message and overview of WorkIndia DSM MCP capabilities when user greets with "hi workindia dsm", "hey workindia dsm", etc.                 |
| `create_workindia_dsm_cursor_rules` | Creates the cursor rules for WorkIndia DSM to help with code generation. Should be called before getting component docs and when the rule file doesn't exist. |
| `get_workindia_dsm_component_docs`  | Fetches the WorkIndia Design System documentation for specific components. Useful when adding or modifying components in your project.                        |
| `get_workindia_dsm_pattern_docs`    | Fetches the WorkIndia Design System pattern documentation. Use this to get information about design patterns, best practices, and implementation guidelines.  |
| `get_workindia_dsm_general_docs`    | Fetches general WorkIndia Design System documentation. Use this to get information about setup, installation, theming, tokens, and general guidelines.        |

> [!NOTE]
> **TODO**: `create_new_workindia_project` tool is not yet integrated. The reference implementation from blade does not fit with our frontend setup yet. This tool will be added once adapted to WorkIndia's specific frontend setup.

## Prerequisites

- Node.js 18.x or higher ([install using NVM](https://nodejs.org/en/download))

## Installation

### Cursor or VS Code

Create or update your `mcp.json` file with:

```json
{
  "mcpServers": {
    "dsm-mcp": {
      "command": "npx",
      "args": ["-y", "@workindia/dsm-mcp@latest"]
    }
  }
}
```

> [!NOTE]
>
> - Learn about how to configure MCP servers in [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)
> - If you're using `nvm`, you might want to [follow these steps](https://github.com/modelcontextprotocol/servers/issues/64) instead of `npx`
> - Learn how to install [Claude Desktop](https://claude.ai/download)

## Troubleshooting / Manually Updating the MCP Server

> [!NOTE]
>
> The MCP server would auto-update by default after few days if you have followed the steps above.

If your MCP server is failing to start or if you want to manually force update the MCP server to latest version, you can do so by following these steps:

- Step 1: Clear the npx cache

  Run following command in your terminal

  ```sh
  npx clear-npx-cache
  ```

- Step 2: Quit and Restart Cursor

## How to use

- Follow [Integrations Guide](#integrations) to configure MCP servers in Cursor
- Open Cursor, Click "Open Project" and select an empty folder
- Press CMD + I (or CTRL + I) to open Cursor's chat
- Type "Hi workindia dsm" and get started

```
Can you create a signup form with best UX practices using WorkIndia DSM?
```

The AI agents will use the MCP server to retrieve components and generate appropriate code.

## Local WorkIndia DSM MCP Development Setup

### Clone the repository

```bash
# Clone the repository
git clone https://github.com/workindia/WorkIndiaXBlade-DSM.git
cd WorkIndiaXBlade-DSM

# Install dependencies
npm install

# Navigate to the MCP server package
cd packages/mcp

# Build the package
npm run build
```

### Local WorkIndia DSM MCP Development with Cursor

For local WorkIndia DSM MCP development with Cursor, update your `mcp.json` with the local path:

```json
{
  "dsm-mcp": {
    "command": "node",
    "args": ["<<USER_PATH>>/WorkIndiaXBlade-DSM/packages/mcp/dist/server.js"]
  }
}
```

Replace the `<<USER_PATH>>` with your actual local path to the repository.

## Contributing

We welcome contributions! See [CONTRIBUTING.md](../../CONTRIBUTING.md) for details.

## License

MIT © WorkIndia
