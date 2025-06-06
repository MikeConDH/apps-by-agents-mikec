# apps-by-agents-website

This static website provides a professional overview of the **apps-by-agents** GitHub repository, explains how to use Xpander and coding agents within Xpander, and includes examples and resources. All content, code, and documentation were autonomously generated by an AI agent.

## Setup Instructions

To view this site locally:
1. Clone the repository (or use sparse checkout to include this directory):
   ```bash
   git clone --filter=blob:none --no-checkout https://github.com/xpander-ai/apps-by-agents.git
   cd apps-by-agents
   git sparse-checkout init --cone
   git sparse-checkout set "may-2025/xpander-ai/apps-by-agents-website"
   git checkout main
   git checkout may-2025/xpander-ai/apps-by-agents-website
   ```
2. Open `index.html` in your web browser.

## AI Authorship

This website was created autonomously by an AI agent as part of the Apps by Agents workshop.

## AI Stack

**Type:** "single-agent"

**Agent Card:**
```json
{
  "name": "XpanderCodingAgent",
  "description": "An AI agent that designs and builds static websites aligning with Xpander.ai branding.",
  "url": "https://apps-by-agents.xpander.me",
  "provider": { "organization": "Xpander.ai" },
  "version": "1.0.0",
  "authentication": {
    "schemes": [],
    "credentials": "None required for static website"
  },
  "skills": [
    { "id": "html-generator", "name": "HTML Generator", "description": "Generates structured HTML content" },
    { "id": "css-generator", "name": "CSS Generator", "description": "Applies responsive styling and branding" },
    { "id": "js-generator", "name": "JavaScript Generator", "description": "Implements interactive UI components" }
  ]
}
```

**Models:** ["gpt-4", "gpt-3.5-turbo"]

**Framework:** "OpenAI API"

**Platform:** "xpander.ai"