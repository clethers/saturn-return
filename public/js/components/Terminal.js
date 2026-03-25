export const Terminal = () => `
    <section id="terminal-section" class="mb-16">
        <div class="glow-border bg-zinc-900/80 rounded-lg overflow-hidden border-[#1f1f23]">
            <div class="bg-[#1a1a1e] px-4 py-2 flex items-center justify-between border-b border-[#1f1f23]">
                <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">bash — decade_logs.sh</div>
                <div class="w-12"></div>
            </div>
            <div class="font-mono text-sm h-[360px] overflow-hidden flex flex-col" id="terminal-content">
                <div id="terminal-scroll-area" class="flex-grow overflow-hidden flex flex-col justify-start p-6">
                    <div class="terminal-line text-architectural-sand opacity-50">Last login: Wed Mar 25 00:00:01 on ttys001</div>
                    <div class="terminal-line gap-3">
                        <span class="text-success-green">[OK]</span>
                        <span class="text-architectural-sand opacity-70">Initializing Sprint 29...</span>
                    </div>
                    <div class="terminal-line gap-3">
                        <span class="text-blue-400">[INFO]</span>
                        <span class="text-architectural-sand opacity-70">Node.js environment established.</span>
                    </div>
                    <div class="terminal-line gap-3">
                        <span class="text-success-green">[SUCCESS]</span>
                        <span class="text-architectural-sand opacity-70">Hardened core architecture.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
