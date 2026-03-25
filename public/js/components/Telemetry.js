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
                    <div id="uptime-value" class="text-4xl font-mono font-bold text-white mb-1">10,592</div>
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
                    <div class="text-zinc-300 text-sm mb-2 leading-tight">
                        Decade Cache: <span class="text-electric-blue">98% Full</span>.
                    </div>
                    <div class="text-xs font-mono text-slate-500 italic">Purging technical debt...</div>
                </div>
            </div>

            <!-- CARD C: LOAD AVG -->
            <div class="glow-border bg-zinc-900/40 p-8 rounded-lg flex flex-col justify-between min-h-[200px]">
                <div class="flex justify-between items-start mb-4">
                    <i data-lucide="activity" class="text-industrial-orange w-5 h-5"></i>
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Load_Average</span>
                </div>
                <div>
                    <div id="load-value" class="text-4xl font-mono font-bold text-white mb-1">0.99</div>
                    <div class="text-xs font-mono text-slate-500 uppercase">System_Optimized</div>
                </div>
            </div>
        </section>
    </div>
`;
