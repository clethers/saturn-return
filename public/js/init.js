import { showToast } from './toast.js';

const BIRTHDATE = new Date('1997-03-25');

const STATUS_MESSAGES = [
    'Purging technical debt...',
    'Neural pathways optimized.',
    'Compiling next decade...',
    'Legacy systems archived.',
    'Initializing Sprint_30...',
    'Memory consolidation complete.',
    'Running self-diagnostics...',
    'Syncing with future state...',
    'Decade Cache synchronized.',
    'Core integrity at 100%.',
];

const LOAD_LABELS = {
    low:      'IDLE // STANDBY',
    nominal:  'SYSTEM_OPTIMIZED',
    elevated: 'HIGH_THROUGHPUT',
    critical: 'LOAD_WARNING',
};

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

function getDaysAlive() {
    return Math.floor((Date.now() - BIRTHDATE.getTime()) / 86_400_000);
}

function getSprintProgress() {
    const now = new Date();
    const thisYear = now.getFullYear();
    let lastBirthday = new Date(thisYear, BIRTHDATE.getMonth(), BIRTHDATE.getDate());
    if (lastBirthday > now) lastBirthday.setFullYear(thisYear - 1);
    const nextBirthday = new Date(lastBirthday);
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    return Math.min(100, Math.floor(((now - lastBirthday) / (nextBirthday - lastBirthday)) * 100));
}

function getLoadLabel(load) {
    if (load < 0.75) return LOAD_LABELS.low;
    if (load < 0.96) return LOAD_LABELS.nominal;
    if (load <= 1.05) return LOAD_LABELS.elevated;
    return LOAD_LABELS.critical;
}

function startTelemetry() {
    const uptimeEl        = document.getElementById('uptime-value');
    const loadEl          = document.getElementById('load-value');
    const loadLabelEl     = document.getElementById('load-label');
    const progressBarEl   = document.getElementById('sprint-progress-bar');
    const progressTextEl  = document.getElementById('sprint-progress-text');
    const statusEl        = document.getElementById('sprint-status');

    // --- Initial render ---
    if (uptimeEl) uptimeEl.textContent = getDaysAlive().toLocaleString();

    const progress = getSprintProgress();
    if (progressBarEl)  progressBarEl.style.width = `${progress}%`;
    if (progressTextEl) progressTextEl.textContent = `${progress}%`;

    // --- Rotating status messages ---
    let msgIndex = 0;
    if (statusEl) {
        setInterval(() => {
            msgIndex = (msgIndex + 1) % STATUS_MESSAGES.length;
            statusEl.style.opacity = '0';
            setTimeout(() => {
                statusEl.textContent = STATUS_MESSAGES[msgIndex];
                statusEl.style.opacity = '1';
            }, 300);
        }, 4000);
    }

    // --- Load average ---
    if (loadEl) {
        const updateLoad = () => {
            const load = parseFloat((0.88 + Math.random() * 0.2).toFixed(2));
            loadEl.textContent = load.toFixed(2);
            const label = getLoadLabel(load);
            if (loadLabelEl) loadLabelEl.textContent = label;
            loadEl.classList.toggle('text-industrial-orange', load > 1.0);
        };
        updateLoad();
        setInterval(updateLoad, 3000);
    }

    // --- Update days counter at midnight ---
    if (uptimeEl) {
        setInterval(() => {
            uptimeEl.textContent = getDaysAlive().toLocaleString();
        }, 60_000);
    }
}
