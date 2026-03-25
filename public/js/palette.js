export function initPalette() {
    const palette = document.getElementById('command-palette');
    const cmdInput = document.getElementById('command-input');
    const searchTrigger = document.getElementById('search-trigger');

    if (!palette || !cmdInput || !searchTrigger) return;

    const resultsContainer = document.getElementById('command-results');
    const commands = [
        { text: '/goto sprint_inventory', type: 'JUMP', action: () => scrollTo('sprint-inventory') },
        { text: '/goto system_roadmap', type: 'JUMP', action: () => scrollTo('system-roadmap') },
        { text: '/goto network_nodes', type: 'JUMP', action: () => scrollTo('network-nodes') },
        { text: '/system status', type: 'INFO', action: () => showToast('SYSTEM_OPTIMIZED // LOAD_AVG: ' + document.querySelector('.glow-border:nth-child(3) .text-4xl').textContent) },
        { text: '/clear logs', type: 'EXEC', action: () => { document.getElementById('terminal-scroll-area').innerHTML = ''; showToast('LOGS_PURGED'); } }
    ];

    function scrollTo(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function renderCommands(filter = '') {
        resultsContainer.innerHTML = '';
        const filtered = commands.filter(cmd => cmd.text.toLowerCase().includes(filter.toLowerCase()));
        
        filtered.forEach(cmd => {
            const div = document.createElement('div');
            div.className = 'p-3 hover:bg-zinc-800 rounded cursor-pointer flex justify-between items-center group';
            div.innerHTML = `
                <span class="text-zinc-400 group-hover:text-white">${cmd.text}</span>
                <span class="text-[10px] text-zinc-600">${cmd.type}</span>
            `;
            div.onclick = () => {
                cmd.action();
                togglePalette();
            };
            resultsContainer.appendChild(div);
        });
    }

    function togglePalette() {
        palette.classList.toggle('active');
        if (palette.classList.contains('active')) {
            cmdInput.value = '';
            renderCommands();
            cmdInput.focus();
        }
    }

    cmdInput.addEventListener('input', (e) => renderCommands(e.target.value));

    cmdInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const firstResult = resultsContainer.querySelector('div');
            if (firstResult) firstResult.click();
        }
    });

    searchTrigger.addEventListener('click', togglePalette);
    
    window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            togglePalette();
        }
        if (e.key === 'Escape' && palette.classList.contains('active')) {
            togglePalette();
        }
    });

    palette.addEventListener('click', (e) => {
        if (e.target === palette) togglePalette();
    });
}
