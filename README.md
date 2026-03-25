# SATURN RETURN

> *"The core remains, even as the shell evolves."*

29 years of commits — some shipped, some rolled back, all necessary.

A personal milestone dashboard built for the 29th birthday sprint.

---

## Overview

**Saturn Return** is a static single-page application served via Express.js that functions as a living OS-style dashboard. It tracks personal systems, active nodes, roadmap progress, inventory, and provides an interactive terminal interface — all themed around the concept of Saturn's return: a 29-year cycle of reinvention.

---

## Features

| Module | Description |
|--------|-------------|
| **Hero** | Title screen with sprint context |
| **Terminal** | Interactive command-line interface |
| **Telemetry** | Personal metrics and uptime tracking |
| **Inventory** | Asset and resource registry |
| **Roadmap** | Sprint 29 goals and milestones |
| **Nodes** | Active systems and connection graph |
| **Explorer** | File/content explorer |
| **Palette** | Theme and color system |

---

## Stack

- **Runtime** — Node.js + Express 5
- **Frontend** — Vanilla JS (ES Modules), HTML5
- **Styling** — Tailwind CSS (CDN), custom CSS
- **Icons** — Lucide
- **AI** — Google Gemini API (`@google/genai`)

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Gemini API key (optional — for AI features)

### Install & Run

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

App runs at **http://localhost:3000**

### Environment Variables

Copy `.env.example` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key for AI features |
| `APP_URL` | Hosted URL (for OAuth callbacks, self-referential links) |

---

## Project Structure

```
saturn-return/
├── public/
│   ├── index.html              # App shell
│   ├── css/styles.css          # Global styles
│   └── js/
│       ├── app.js              # Entry point, component mounting
│       ├── terminal.js         # Terminal logic
│       ├── explorer.js         # Explorer logic
│       ├── palette.js          # Theme/palette logic
│       ├── init.js             # System initialization
│       └── components/
│           ├── Hero.js
│           ├── Terminal.js
│           ├── Telemetry.js
│           ├── Inventory.js
│           ├── Roadmap.js
│           └── Nodes.js
├── guidelines/
│   ├── build.md                # Build principles
│   └── theme.md                # Visual system
├── server.js                   # Express server
├── metadata.json               # App metadata
└── .env.example                # Environment variable template
```

---

## Sprint 29 Principles

1. **Architectural Integrity** — Every decision reinforces the long-term structure of the system.
2. **Resource Allocation** — Prioritize high-impact growth over legacy maintenance.
3. **Telemetry-Driven** — Use data and reflection to adjust the trajectory.

> Sprint reviews every 29 days. Legacy cleanup: move old habits to `/dev/null`.

---

## License

MIT — see [LICENSE](./LICENSE)
