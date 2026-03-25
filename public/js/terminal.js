export function initTerminal() {
    const terminal = document.getElementById('terminal-scroll-area');
    if (!terminal) return;
    
    const messages = [
        { text: "npm install wisdom --save-dev", color: "text-architectural-sand opacity-70" },
        { text: "git commit -m 'refactor: life_architecture'", color: "text-architectural-sand opacity-70" },
        { prefix: "[OK]", prefixColor: "text-success-green", text: "docker-compose up --build decade_v3", color: "text-architectural-sand opacity-70" },
        { text: "ssh root@saturn_return_core", color: "text-architectural-sand opacity-70" },
        { prefix: "[INFO]", prefixColor: "text-blue-400", text: "grep -r 'purpose' ./consciousness", color: "text-architectural-sand opacity-70" },
        { text: "chmod +x future_sprint.sh", color: "text-architectural-sand opacity-70" },
        { text: "ping 127.0.0.1 --timeout infinity", color: "text-architectural-sand opacity-70" },
        { prefix: "[SUCCESS]", prefixColor: "text-success-green", text: "tail -f /var/log/growth.log", color: "text-architectural-sand opacity-70" },
        { text: "node system_check.js", color: "text-architectural-sand opacity-70" },
        { text: "cat vision_statement.txt", color: "text-architectural-sand opacity-70" },
        { text: "mkdir -p ./next_decade/goals", color: "text-architectural-sand opacity-70" },
        { text: "mv old_habits /dev/null", color: "text-architectural-sand opacity-70" },
        { prefix: "[INFO]", prefixColor: "text-blue-400", text: "npm run build:future", color: "text-architectural-sand opacity-70" },
        { text: "curl -X POST https://api.decade.io/sync", color: "text-architectural-sand opacity-70" },
        { text: "ls -la ./achievements/2025", color: "text-architectural-sand opacity-70" },
        { text: "top -o cpu", color: "text-architectural-sand opacity-70" },
        { prefix: "[OK]", prefixColor: "text-success-green", text: "history | grep 'success'", color: "text-architectural-sand opacity-70" },
        { text: "whoami --verbose", color: "text-architectural-sand opacity-70" },
        { text: "date --set='next_decade'", color: "text-architectural-sand opacity-70" },
        { prefix: "[INFO]", prefixColor: "text-blue-400", text: "ps aux | grep 'ambition'", color: "text-architectural-sand opacity-70" },
        { text: "df -h /dev/potential", color: "text-architectural-sand opacity-70" }
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let currentLineElement = null;
    let currentTextSpan = null;

    function createNewLine() {
        const maxLines = 14;
        while (terminal.children.length >= maxLines) {
            terminal.removeChild(terminal.firstElementChild);
        }

        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        const msgConfig = messages[messageIndex];
        
        let prefixHtml = '';
        if (msgConfig.prefix) {
            prefixHtml = `<span class="${msgConfig.prefixColor} mr-2">${msgConfig.prefix}</span>`;
        }

        line.innerHTML = `<span class="text-industrial-orange mr-2">$</span>${prefixHtml}<span class="${msgConfig.color} terminal-text-content"></span>`;
        
        const oldCursor = terminal.querySelector('.cursor');
        if (oldCursor) oldCursor.remove();
        
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        line.appendChild(cursor);
        
        terminal.appendChild(line);
        currentLineElement = line;
        currentTextSpan = line.querySelector('.terminal-text-content');
    }

    function type() {
        if (!currentLineElement) createNewLine();
        
        const msgConfig = messages[messageIndex];
        const currentMessage = msgConfig.text;
        
        if (charIndex < currentMessage.length) {
            currentTextSpan.textContent += currentMessage.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50 + Math.random() * 100);
        } else {
            messageIndex = (messageIndex + 1) % messages.length;
            charIndex = 0;
            currentLineElement = null;
            setTimeout(type, 1500);
        }
    }
    
    setTimeout(type, 2000);
}
