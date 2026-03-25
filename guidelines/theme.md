# Architectural Sand Color Guidelines

This document outlines the visual language and color palette for the **Saturn Return** application. The aesthetic is inspired by professional-grade technical equipment, high-end terminals, and scientific instruments.

## Core Palette

| Name | Hex | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#000000` | `bg-black` | Main canvas, deep space. |
| **Ink** | `#FFFFFF` | `text-white` | Primary headings, high-contrast text. |
| **Architectural Sand** | `#E7E5E4` | `text-architectural-sand` | Primary accent, branding, active buttons. |
| **Zinc 500** | `#71717A` | `text-zinc-500` | Terminal text, metadata, secondary labels. |
| **Zinc 900** | `#18181B` | `border-zinc-900` | Borders, subtle dividers, structural elements. |

## Semantic & Terminal Colors

| Name | Hex | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Industrial Orange** | `#F97316` | `text-industrial-orange` | Terminal prompt (`$`), high-visibility accents. |
| **Electric Blue** | `#38BDF8` | `text-electric-blue` | Connectivity indicators, "In_Dev" status, resource highlights. |
| **Success Green** | `#22C55E` | `text-success-green` | `[OK]`, `[SUCCESS]`, positive status. |
| **Info Blue** | `#60A5FA` | `text-blue-400` | `[INFO]`, system logs, neutral data. |
| **Warning Red** | `#EF4444` | `text-red-500` | `[ERROR]`, critical alerts, close buttons. |

## Typography & Styling Rules

1. **Hierarchy**: Use `uppercase` and `tracking-[0.3em]` for metadata and labels (Zinc 500).
2. **Contrast**: Maintain pure black backgrounds for all technical sections to ensure maximum legibility of accent colors.
3. **Interactivity**: Use "Inversion" for primary actions (e.g., Black text on Sand background on hover).
4. **Terminal Density**: Terminal text should primarily be Zinc 500, with Industrial Orange used exclusively for the command prompt (`$`).
5. **Loading States**: Primary buttons feature a 1-second "fill-up" transition on hover, moving from transparent to solid Architectural Sand.
6. **Connectivity**: Use Electric Blue sparingly for pulse indicators or high-priority resource data.
