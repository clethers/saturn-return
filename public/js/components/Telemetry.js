export const Telemetry = () => `
    <div id="boot-content" class="transition-all duration-1000">
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

            <!-- CARD A: UPTIME -->
            <div class="glow-border bg-zinc-900/40 p-8 rounded-lg flex flex-col justify-between min-h-[200px]">
                <div class="flex justify-between items-start mb-4">
                    <i data-lucide="clock" class="text-industrial-orange w-5 h-5"></i>
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System_Uptime</span>
                </div>
                <div>
                    <div id="uptime-value" class="text-4xl font-mono font-bold text-white mb-1">—</div>
                    <div class="text-xs font-mono text-slate-500 uppercase">Days in production</div>
                </div>
            </div>

            <!-- CARD B: RESOURCE ALLOCATION -->
            <div class="glow-border bg-zinc-900/40 p-8 rounded-lg flex flex-col justify-between min-h-[200px]">
                <div class="flex justify-between items-start mb-4">
                    <i data-lucide="database" class="text-electric-blue w-5 h-5"></i>
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Resource_Alloc</span>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-zinc-400 text-[10px] font-mono uppercase tracking-widest">Sprint_29</span>
                        <span id="sprint-progress-text" class="text-electric-blue text-[10px] font-mono">0%</span>
                    </div>
                    <div class="w-full h-1 bg-zinc-800 rounded-full mb-4 overflow-hidden">
                        <div id="sprint-progress-bar" class="h-full bg-electric-blue rounded-full transition-all duration-1000" style="width: 0%"></div>
                    </div>
                    <div id="sprint-status" class="text-xs font-mono text-slate-500 italic transition-opacity duration-300">
                        Purging technical debt...
                    </div>
                </div>
            </div>

            <!-- CARD C: LOAD AVG -->
            <div class="glow-border bg-zinc-900/40 p-8 rounded-lg flex flex-col justify-between min-h-[200px]">
                <div class="flex justify-between items-start mb-4">
                    <i data-lucide="activity" class="text-industrial-orange w-5 h-5"></i>
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Load_Average</span>
                </div>
                <div>
                    <div id="load-value" class="text-4xl font-mono font-bold text-white mb-1">—</div>
                    <div id="load-label" class="text-xs font-mono text-slate-500 uppercase">Calibrating...</div>
                </div>
            </div>

        </section>
    </div>
`;
