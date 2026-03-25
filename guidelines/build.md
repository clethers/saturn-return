# System Architecture & Build Guide

This document explains the technical implementation of the **Saturn Return** (v29.0.0) operating system interface.

## 1. Tech Stack

The system is built as a high-performance, zero-dependency (aside from CDNs) single-page application:

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS v3 (via CDN)
- **Icons**: Lucide Icons
- **Typography**: Inter (Sans) & JetBrains Mono (Terminal)
- **Animations**: Tailwind transitions & custom CSS keyframes

## 2. Core Components

### 2.1. Terminal Simulation Engine
The terminal at the bottom of the interface is a custom-built typing simulation engine.
- **Continuous Scroll**: It maintains a maximum of 14 lines to prevent layout shifts.
- **Semantic Coloring**: Each message is an object with `text` and `color` properties, mapped to Tailwind utility classes.
- **Cursor Logic**: A CSS-animated cursor is dynamically moved to the active line during the typing phase.

### 2.2. Bento Grid Layout
The dashboard uses a responsive bento-grid layout that adapts from a single column on mobile to a 3-column complex grid on desktop.
- **Containment**: Uses `contain: strict` on the terminal window to isolate rendering updates and improve performance.
- **Glassmorphism**: Subtle borders (`border-zinc-900`) and low-opacity backgrounds create a "hardware" feel without heavy shadows.

## 3. Design Philosophy: "Technical Precision"

The build follows the **Technical Dashboard** design recipe:
- **Visible Structure**: Borders are celebrated rather than hidden to create a sense of structural integrity.
- **Monospace Data**: All telemetry and system logs use `JetBrains Mono` to signal raw data precision.
- **Micro-labels**: Small, uppercase labels with wide tracking (`tracking-[0.3em]`) provide context without cluttering the UI.

## 4. System Initialization
The "INITIATE_SYSTEM_BOOT" button triggers a secondary "Boot Sequence" simulation:
1. Disables user interaction to prevent race conditions.
2. Prepends high-priority `EXEC`, `INFO`, and `SUCCESS` logs to the terminal.
3. Uses staggered `setTimeout` delays to simulate real-time resource allocation.

## 5. Maintenance

To update the visual language, refer to `THEME.md`. All new components should be added to the `index.html` using Tailwind utility classes to maintain the zero-CSS-file architecture.
