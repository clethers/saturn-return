export const Terminal = () => `
    <section id="terminal-section" class="mb-16">
        <div class="glow-border bg-zinc-900/80 rounded-lg overflow-hidden border-[#1f1f23]">

            <!-- Title bar -->
            <div class="bg-[#1a1a1e] px-4 py-2 flex items-center justify-between border-b border-[#1f1f23]">
                <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">bash — saturn_os v29.0.0</div>
                <div class="w-12"></div>
            </div>

            <!-- Output area -->
            <div class="font-mono text-sm flex flex-col" id="terminal-content" style="height:360px">
                <div id="terminal-scroll-area"
                     class="flex-grow overflow-y-auto flex flex-col justify-end p-6 pb-2 space-y-1">
                    <div class="terminal-line text-architectural-sand opacity-40 text-xs">
                        Last login: Wed Mar 25 00:00:01 on saturn_os
                    </div>
                    <div class="terminal-line gap-3">
                        <span class="text-success-green mr-2">[OK]</span>
                        <span class="text-architectural-sand opacity-70">Initializing Sprint 29...</span>
                    </div>
                    <div class="terminal-line gap-3">
                        <span class="text-blue-400 mr-2">[INFO]</span>
                        <span class="text-architectural-sand opacity-70">Node.js environment established.</span>
                    </div>
                    <div class="terminal-line gap-3">
                        <span class="text-success-green mr-2">[SUCCESS]</span>
                        <span class="text-architectural-sand opacity-70">System ready. Type <span class="text-industrial-orange">help</span> to begin.</span>
                    </div>
                </div>

                <!-- Input bar -->
                <div class="border-t border-zinc-800 px-6 py-3 flex items-center gap-2 shrink-0">
                    <span class="text-industrial-orange select-none">$</span>
                    <input
                        id="terminal-input"
                        type="text"
                        class="flex-grow bg-transparent text-architectural-sand outline-none font-mono text-sm placeholder-zinc-700 caret-industrial-orange"
                        placeholder="type a command or ask anything..."
                        autocomplete="off"
                        spellcheck="false"
                    />
                </div>
            </div>

        </div>
    </section>
`;
