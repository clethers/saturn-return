import { showToast } from './toast.js';

export function initExplorer() {
    window.toggleFolder = function(id) {
        const folder = document.getElementById(id);
        if (!folder) return;
        folder.classList.toggle('active');
        showToast(`EXPLORER: ${id.replace('-', '_').toUpperCase()} ${folder.classList.contains('active') ? 'OPENED' : 'CLOSED'}`);
    };
}
