export const Roadmap = () => `
    <section id="system-roadmap" class="mb-24">
        <div class="flex items-center gap-4 mb-12">
            <h2 class="text-xl font-mono font-bold text-white uppercase tracking-widest">System_Roadmap</h2>
            <div class="h-[1px] flex-grow bg-zinc-800"></div>
            <div class="text-[10px] font-mono text-slate-500 uppercase">Branch: MAIN // SPRINT_29</div>
        </div>

        <div class="git-graph-container font-mono">
            <div class="git-commit group">
                <div class="git-line">
                    <div class="git-node"></div>
                    <div class="git-v-line"></div>
                </div>
                <div class="git-content glow-border">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[10px] text-industrial-orange">COMMIT: 24.0.1-INIT</span>
                        <span class="text-[9px] text-zinc-600">2024-Q1</span>
                    </div>
                    <h4 class="text-white font-bold mb-1">FOUNDATION_LAYER</h4>
                    <p class="text-zinc-500 text-xs leading-relaxed">Initial core architecture deployment. Establishing the "Remarx" protocol.</p>
                </div>
            </div>

            <div class="git-commit group">
                <div class="git-line">
                    <div class="git-node"></div>
                    <div class="git-v-line"></div>
                    <div class="git-branch-line"></div>
                </div>
                <div class="git-content glow-border">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[10px] text-electric-blue">COMMIT: 25.3.0-NEURAL</span>
                        <span class="text-[9px] text-zinc-600">2025-Q3</span>
                    </div>
                    <h4 class="text-white font-bold mb-1">NEURAL_EXPANSION</h4>
                    <p class="text-zinc-500 text-xs leading-relaxed">Integration of LLM-driven modules. Neural core stabilization.</p>
                    <div class="mt-2 flex gap-2">
                        <span class="text-[8px] border border-electric-blue/30 text-electric-blue px-1 rounded">FEATURE/AI_CORE</span>
                    </div>
                </div>
            </div>

            <div class="git-commit group active">
                <div class="git-line">
                    <div class="git-node active"></div>
                    <div class="git-v-line dashed"></div>
                </div>
                <div class="git-content glow-border border-industrial-orange/50 bg-industrial-orange/5">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[10px] text-industrial-orange">HEAD -> MAIN (26.1.0-STABLE)</span>
                        <span class="text-[9px] text-industrial-orange/70">CURRENT_SPRINT</span>
                    </div>
                    <h4 class="text-white font-bold mb-1">SATURN_RETURN_STABLE</h4>
                    <p class="text-zinc-300 text-xs leading-relaxed">Current deployment phase. Full system dashboard and telemetry.</p>
                </div>
            </div>

            <div class="git-commit group pending">
                <div class="git-line">
                    <div class="git-node pending"></div>
                </div>
                <div class="git-content glow-border opacity-50">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[10px] text-zinc-600">STAGED: 26.4.0-QUANTUM</span>
                        <span class="text-[9px] text-zinc-700">2026-Q4</span>
                    </div>
                    <h4 class="text-zinc-400 font-bold mb-1">QUANTUM_LEAP_INIT</h4>
                    <p class="text-zinc-600 text-xs leading-relaxed">Transition to decentralized edge computing. Next decade blueprint.</p>
                </div>
            </div>
        </div>
    </section>
`;
