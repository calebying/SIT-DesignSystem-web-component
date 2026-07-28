# MCP server with agent skills

Use a Figma MCP server plugin with Claude Code to turn your Figma designs into working code powered by Canvas components and utilities.

> **Note:** This workflow works best with designs built using the Canvas Figma library.

---

## Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and configured
- [Figma MCP server plugin](https://help.figma.com/hc/en-us/articles/35281186390679-Figma-MCP-collection-How-to-setup-the-Figma-desktop-MCP-server-alternative) set up and running
- Canvas agent skills installed (`npx skills add calebying/SIT-DesignSystem-web-component`)
- Canvas web component package installed (`npm i @sit-canvas/canvas-web-component`)

---

## Workflow

### 1. Connect Claude Code to the Figma MCP server

Run the following command in your terminal to add the Figma Dev Mode MCP server to Claude Code:

```bash
claude mcp add --transport sse figma-dev-mode-mcp-server http://127.0.0.1:3845/sse
```

Make sure the Figma Dev Mode MCP server plugin is running locally before proceeding.

### 2. Select the frame in the Figma canvas

Open your Figma file and select the frame you want to build. The frame should be a complete section or page layout designed with the Canvas Figma library.

### 3. Prompt the agent

Copy and adapt the following prompt:

> "Build this Figma frame using Canvas web components and utility classes. Refer to the Canvas skills for the correct component APIs, utility tokens, and layout patterns."

### 4. Agent builds the design

The agent will:

- Read the selected Figma frame via the MCP server
- Reference the installed Canvas skills to identify the right components and utilities
- Generate code that replicates the design using `<sit-*>` components and Canvas CSS utility classes

---

## Tips

- Keep your Figma frames clean and well-structured for the best results.
- Name your Figma layers descriptively. The agent uses layer names to infer intent.
- If the output is not accurate, refine your prompt by specifying which section or component to focus on.
- Combine this workflow with the [Prompt Tips](?path=/docs/agent-skills-prompt-tips--docs) for more effective results.
