import { showToast } from './toast.js';

export function initSystem() {
    const initBtn = document.getElementById('init-btn');
    const terminal = document.getElementById('terminal-scroll-area');

    if (!initBtn) return;

    initBtn.addEventListener('click', () => {
        initBtn.disabled = true;
        initBtn.classList.add('opacity-50', 'cursor-not-allowed');
        initBtn.querySelector('span').textContent = '[ SYSTEM_ACTIVE ]';

        const bootMessages = [
            { type: 'EXEC', text: 'BOOT_SEQUENCE_29_ACTIVE...', color: 'text-architectural-sand' },
            { type: 'INFO', text: 'Loading system telemetry...', color: 'text-blue-400' },
            { type: 'INFO', text: 'Allocating resources for Sprint 29...', color: 'text-blue-400' },
            { type: 'OK', text: 'Decade Cache synchronized.', color: 'text-success-green' },
            { type: 'OK', text: 'Project Repository indexed.', color: 'text-success-green' },
            { type: 'SUCCESS', text: 'SYSTEM_READY // ACCESS_GRANTED', color: 'text-success-green' }
        ];

        let delay = 0;
        bootMessages.forEach((msg) => {
            delay += 600 + Math.random() * 400;
            setTimeout(() => {
                const newLine = document.createElement('div');
                newLine.className = 'terminal-line gap-3 animate-in fade-in slide-in-from-left-2';
                newLine.innerHTML = `<span class="${msg.color}">[${msg.type}]</span> <span class="text-architectural-sand opacity-70">${msg.text}</span>`;
                terminal.prepend(newLine);
            }, delay);
        });
        
        showToast('SYSTEM_INITIALIZATION_COMPLETE');
    });

    const versionTrigger = document.getElementById('version-trigger');
    if (versionTrigger) {
        versionTrigger.addEventListener('click', () => {
            showToast('SATURN_RETURN // VERSION_29.0.0_STABLE');
        });
    }

    startTelemetry();
}

function startTelemetry() {
    const uptimeEl = document.getElementById('uptime-value');
    const loadEl = document.getElementById('load-value');

    if (!uptimeEl || !loadEl) return;

    let uptime = 10592;
    setInterval(() => {
        if (Math.random() > 0.8) {
            uptime += 1;
            uptimeEl.textContent = uptime.toLocaleString();
            uptimeEl.classList.add('text-industrial-orange');
            setTimeout(() => uptimeEl.classList.remove('text-industrial-orange'), 500);
        }

        const load = (0.9 + Math.random() * 0.2).toFixed(2);
        loadEl.textContent = load;
        if (load > 1.05) {
            loadEl.classList.add('text-industrial-orange');
        } else {
            loadEl.classList.remove('text-industrial-orange');
        }
    }, 3000);
}
