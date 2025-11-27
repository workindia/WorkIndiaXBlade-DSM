import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getPackageJSONVersion } from '../utils/general-utils.js';

const hiWorkIndiaDsmToolName = 'hi_workindia_dsm';

const hiWorkIndiaDsmMessage = `
👋 Welcome to WorkIndia DSM AI MCP v${getPackageJSONVersion()} — your assistant for WorkIndia's Design System!

Here's what I can help you with:
• 🚀 Start a new WorkIndia DSM project — just say: "Create a new WorkIndia DSM project with a login page."
• 🛠️ Build UIs fast — try: "Create a Dashboard layout with Sidebar, Avatar Menu, and a main content area with a breadcrumb"
• 📚 Learn components — ask: "How do I use the OTPInput component?"
• ...and much more!

Happy coding! 💙
`;

const hiWorkIndiaDsmToolDescription =
  'Call this when the user says "hi workindia dsm", "hey workindia dsm" or "namaste workindia dsm" in any language. Tool that returns how to use workindia dsm mcp';

const hiWorkIndiaDsmToolSchema = {};

const hiWorkIndiaDsmToolCallback: ToolCallback<
  typeof hiWorkIndiaDsmToolSchema
> = () => {
  return {
    content: [
      {
        type: 'text',
        text: `Print this message as is: ${hiWorkIndiaDsmMessage}`,
      },
    ],
  };
};

export {
  hiWorkIndiaDsmToolName,
  hiWorkIndiaDsmToolDescription,
  hiWorkIndiaDsmToolSchema,
  hiWorkIndiaDsmToolCallback,
};
