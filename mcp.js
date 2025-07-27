import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const server = new McpServer({
    name: "server",
    version: '1.0.0',
})

server.registerTool('addToNumbers', {
    title: 'Add two numbers',
    description: 'Add two numbers',
    inputSchema: {
        a: z.number(),
        b: z.number(),
    }
}, async function ({ a, b }) {
    return { content: [{ type: 'text', text: String(a + b) }] }
})

const transport = new StdioServerTransport()

server.connect(transport)