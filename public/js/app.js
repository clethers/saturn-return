console.log('SATURN_OS: app.js loaded');

import { Hero } from './components/Hero.js';
import { Terminal } from './components/Terminal.js';
import { Telemetry } from './components/Telemetry.js';
import { Inventory } from './components/Inventory.js';
import { Roadmap } from './components/Roadmap.js';
import { Nodes } from './components/Nodes.js';

import { initTerminal } from './terminal.js';
import { initPalette } from './palette.js';
import { initExplorer } from './explorer.js';
import { initSystem } from './init.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('SATURN_OS: Initializing...');
    
    const appRoot = document.getElementById('app-root');
    
    if (appRoot) {
        // Render all components
        appRoot.innerHTML = `
            ${Hero()}
            ${Terminal()}
            ${Telemetry()}
            ${Inventory()}
            ${Roadmap()}
            ${Nodes()}
        `;

        // Initialize Lucide Icons after rendering
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Initialize Features
        initTerminal();
        initPalette();
        initExplorer();
        initSystem();
    }
});
