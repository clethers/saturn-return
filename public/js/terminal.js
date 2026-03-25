const BIRTHDATE     = new Date('1997-03-25');
const HISTORY_KEY   = 'saturn_terminal_history';
let   historyBuffer = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
let   historyIndex  = -1;
let   typewriterPaused = false;

// ─── Typewriter messages ─────────────────────────────────────────────────────

const TYPEWRITER_MESSAGES = [
    { text: "npm install wisdom --save-dev" },
    { text: "git commit -m 'refactor: life_architecture'" },
    { prefix: "[OK]",      prefixColor: "text-success-green", text: "docker-compose up --build decade_v3" },
    { text: "ssh root@saturn_return_core" },
    { prefix: "[INFO]",    prefixColor: "text-blue-400",      text: "grep -r 'purpose' ./consciousness" },
    { text: "chmod +x future_sprint.sh" },
    { text: "ping 127.0.0.1 --timeout infinity" },
    { prefix: "[SUCCESS]", prefixColor: "text-success-green", text: "tail -f /var/log/growth.log" },
    { text: "mv old_habits /dev/null" },
    { text: "cat vision_statement.txt" },
    { text: "mkdir -p ./next_decade/goals" },
    { prefix: "[INFO]",    prefixColor: "text-blue-400",      text: "npm run build:future" },
];

// ─── Built-in commands ───────────────────────────────────────────────────────

function getDaysAlive() {
    return Math.floor((Date.now() - BIRTHDATE.getTime()) / 86_400_000);
}

function getSprintInfo() {
    const now = new Date();
    const thisYear = now.getFullYear();
    let lastBd = new Date(thisYear, BIRTHDATE.getMonth(), BIRTHDATE.getDate());
    if (lastBd > now) lastBd.setFullYear(thisYear - 1);
    const nextBd = new Date(lastBd);
    nextBd.setFullYear(nextBd.getFullYear() + 1);
    const progress  = Math.min(100, Math.floor(((now - lastBd) / (nextBd - lastBd)) * 100));
    const daysLeft  = Math.ceil((nextBd - now) / 86_400_000);
    const sprintNum = now.getFullYear() - BIRTHDATE.getFullYear();
    return { progress, daysLeft, sprintNum };
}

const COMMANDS = {
    help(_, print) {
        print('╔══ SATURN_OS COMMANDS ══════════════════╗', 'text-industrial-orange');
        print('  help      — show this menu');
        print('  whoami    — system identity');
        print('  status    — full system snapshot');
        print('  uptime    — days in production');
        print('  sprint    — current sprint progress');
        print('  ls        — list modules');
        print('  version   — build info');
        print('  date      — current timestamp');
        print('  history   — last 10 commands');
        print('  clear     — clear terminal');
        print('  ask <q>   — query AI directly');
        print('╚════════════════════════════════════════╝', 'text-industrial-orange');
    },

    whoami(_, print) {
        print('MARX_CLETHERS', 'text-architectural-sand');
        print('Sprint 29 // Active deployment.');
        print('Founder — Remarx Foundation.');
    },

    status(_, print) {
        const { progress, daysLeft, sprintNum } = getSprintInfo();
        print(`UPTIME   : ${getDaysAlive().toLocaleString()} days`, 'text-architectural-sand');
        print(`SPRINT_${sprintNum} : ${progress}% complete — ${daysLeft}d remaining`);
        print('SYSTEM   : nominal');
        print('AI_CORE  : online');
    },

    uptime(_, print) {
        print(`${getDaysAlive().toLocaleString()} days in production.`, 'text-architectural-sand');
    },

    sprint(_, print) {
        const { progress, daysLeft, sprintNum } = getSprintInfo();
        print(`SPRINT_${sprintNum}: ${progress}% complete.`, 'text-architectural-sand');
        print(`${daysLeft} days until next checkpoint.`);
    },

    ls(_, print) {
        print('MODULES:', 'text-industrial-orange');
        print('  hero  ·  terminal  ·  telemetry  ·  inventory  ·  roadmap  ·  nodes');
    },

    version(_, print) {
        print('SATURN_RETURN v29.0.0-STABLE', 'text-architectural-sand');
        print('Build: 26.1.0 // Branch: MAIN');
    },

    date(_, print) {
        print(new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC', 'text-architectural-sand');
    },

    history(_, print) {
        const h = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        if (!h.length) { print('No history found.'); return; }
        h.slice(0, 10).forEach((cmd, i) => print(`  ${i + 1}  ${cmd}`));
    },

    clear(terminal) {
        terminal.innerHTML = '';
    },
};

// ─── Output helper ───────────────────────────────────────────────────────────

function printLine(terminal, text, color = 'text-zinc-400', prefix = null, prefixColor = null) {
    const MAX_LINES = 120;
    while (terminal.children.length >= MAX_LINES) {
        terminal.removeChild(terminal.firstElementChild);
    }
    const line = document.createElement('div');
    line.className = 'terminal-line';
    let html = '';
    if (prefix) html += `<span class="${prefixColor} mr-2">${prefix}</span>`;
    html += `<span class="${color}">${text}</span>`;
    line.innerHTML = html;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

// ─── History helpers ─────────────────────────────────────────────────────────

function saveHistory(cmd) {
    historyBuffer = [cmd, ...historyBuffer.filter(h => h !== cmd)].slice(0, 50);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(historyBuffer));
    historyIndex = -1;
}

// ─── Command processing ──────────────────────────────────────────────────────

async function processCommand(raw, terminal) {
    const trimmed = raw.trim();
    const key     = trimmed.toLowerCase().split(' ')[0];
    const rest    = trimmed.slice(key.length).trim();

    // Print the entered command
    printLine(terminal, trimmed, 'text-architectural-sand opacity-80', '$', 'text-industrial-orange');

    if (COMMANDS[key]) {
        COMMANDS[key](terminal, (text, color) => printLine(terminal, text, color));
        return;
    }

    // AI fallback — `ask <query>` or any unknown command
    const prompt = key === 'ask' ? rest : trimmed;
    if (!prompt) return;

    printLine(terminal, 'querying AI_CORE...', 'text-zinc-600 italic');

    try {
        const res  = await fetch('/api/ai', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ prompt }),
        });
        const data = await res.json();

        // Remove the "querying..." line
        const lines   = terminal.querySelectorAll('.terminal-line');
        const lastLine = lines[lines.length - 1];
        if (lastLine?.textContent.includes('querying AI_CORE')) lastLine.remove();

        if (data.text) {
            data.text.split('\n').filter(Boolean).forEach(line => {
                printLine(terminal, line, 'text-electric-blue');
            });
        } else {
            printLine(terminal, 'AI_CORE: no response.', 'text-zinc-600');
        }
    } catch {
        printLine(terminal, 'AI_CORE: offline.', 'text-zinc-600 italic');
    }
}

// ─── Input handler ───────────────────────────────────────────────────────────

function handleKeydown(e, terminal) {
    const input = e.target;

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < historyBuffer.length - 1) {
            historyIndex++;
            input.value = historyBuffer[historyIndex];
        }
        return;
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = historyBuffer[historyIndex];
        } else {
            historyIndex = -1;
            input.value = '';
        }
        return;
    }

    if (e.key !== 'Enter') return;

    const cmd = input.value.trim();
    if (!cmd) return;
    input.value = '';
    saveHistory(cmd);
    processCommand(cmd, terminal);
}

// ─── Typewriter animation ────────────────────────────────────────────────────

function startTypewriter(terminal) {
    let msgIndex  = 0;
    let charIndex = 0;
    let lineEl    = null;
    let textSpan  = null;

    function createLine() {
        const MAX = 14;
        while (terminal.children.length >= MAX) terminal.removeChild(terminal.firstElementChild);

        const msg  = TYPEWRITER_MESSAGES[msgIndex];
        lineEl     = document.createElement('div');
        lineEl.className = 'terminal-line';

        const prefix = msg.prefix
            ? `<span class="${msg.prefixColor} mr-2">${msg.prefix}</span>`
            : '';

        lineEl.innerHTML = `<span class="text-industrial-orange mr-2">$</span>${prefix}<span class="text-architectural-sand opacity-60 terminal-tw"></span>`;
        terminal.appendChild(lineEl);
        textSpan = lineEl.querySelector('.terminal-tw');
        terminal.scrollTop = terminal.scrollHeight;
    }

    function tick() {
        if (typewriterPaused) { setTimeout(tick, 300); return; }
        if (!lineEl) createLine();

        const msg = TYPEWRITER_MESSAGES[msgIndex].text;
        if (charIndex < msg.length) {
            textSpan.textContent += msg[charIndex++];
            setTimeout(tick, 45 + Math.random() * 80);
        } else {
            msgIndex  = (msgIndex + 1) % TYPEWRITER_MESSAGES.length;
            charIndex = 0;
            lineEl    = null;
            setTimeout(tick, 1800);
        }
    }

    setTimeout(tick, 2000);
}

// ─── Init ────────────────────────────────────────────────────────────────────

export function initTerminal() {
    const terminal = document.getElementById('terminal-scroll-area');
    const input    = document.getElementById('terminal-input');
    if (!terminal) return;

    if (input) {
        input.addEventListener('focus', () => { typewriterPaused = true; });
        input.addEventListener('blur',  () => { typewriterPaused = false; });
        input.addEventListener('keydown', (e) => handleKeydown(e, terminal));

        // Click anywhere on terminal to focus input
        document.getElementById('terminal-content')?.addEventListener('click', () => input.focus());
    }

    startTypewriter(terminal);
}
