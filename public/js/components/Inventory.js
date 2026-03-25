import { Explorer } from './Explorer.js';

export const Inventory = () => `
    <section id="sprint-inventory" class="mb-24">
        <div class="flex items-center gap-4 mb-12">
            <h2 class="text-xl font-mono font-bold text-white uppercase tracking-widest">Sprint_Inventory</h2>
            <div class="h-[1px] flex-grow bg-zinc-800"></div>
            <div class="text-[10px] font-mono text-slate-500 uppercase">Filter: ALL_ASSETS</div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <!-- LEFT: FILE EXPLORER (1/4) -->
            <div class="lg:col-span-1">
                <div class="glow-border bg-zinc-900/20 rounded-lg p-6 h-full">
                    <div class="flex items-center justify-between mb-6">
                        <div class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">File_Explorer</div>
                        <i data-lucide="folder-tree" class="w-3 h-3 text-zinc-700"></i>
                    </div>
                    
                    ${Explorer()}
                </div>
            </div>

            <!-- RIGHT: PROJECT GRID (3/4) -->
            <div class="lg:col-span-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- PROJECT 01 -->
                    <div class="glow-border bg-zinc-900/40 p-8 rounded-lg group">
                        <div class="flex justify-between items-start mb-6">
                            <div class="font-mono text-zinc-500 text-sm tracking-tighter">01 // NEURAL_CORE</div>
                            <span class="text-[10px] font-mono text-industrial-orange border border-industrial-orange/30 px-2 py-0.5 rounded uppercase">Deployed</span>
                        </div>
                        <h3 class="text-2xl font-mono font-bold text-white mb-3 group-hover:text-architectural-sand transition-colors">AI_Studio_Applet</h3>
                        <p class="text-zinc-400 text-sm mb-6 leading-relaxed">
                            A high-performance sandbox for rapid prototyping and deployment of LLM-driven applications.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">React</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Next.js</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Gemini_API</span>
                        </div>
                        <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-industrial-orange transition-colors">
                            [ VIEW_SOURCE ] <i data-lucide="external-link" class="w-3 h-3"></i>
                        </a>
                    </div>

                    <!-- PROJECT 02 -->
                    <div class="glow-border bg-zinc-900/40 p-8 rounded-lg group">
                        <div class="flex justify-between items-start mb-6">
                            <div class="font-mono text-zinc-500 text-sm tracking-tighter">02 // SPRINT_SYNC</div>
                            <span class="text-[10px] font-mono text-electric-blue border border-electric-blue/30 px-2 py-0.5 rounded uppercase">In_Dev</span>
                        </div>
                        <h3 class="text-2xl font-mono font-bold text-white mb-3 group-hover:text-architectural-sand transition-colors">Saturn_OS_Dashboard</h3>
                        <p class="text-zinc-400 text-sm mb-6 leading-relaxed">
                            A real-time telemetry dashboard for monitoring personal milestones and technical growth.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Vanilla_JS</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Tailwind_CSS</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Express</span>
                        </div>
                        <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-industrial-orange transition-colors">
                            [ VIEW_SOURCE ] <i data-lucide="external-link" class="w-3 h-3"></i>
                        </a>
                    </div>

                    <!-- PROJECT 03 -->
                    <div class="glow-border bg-zinc-900/40 p-8 rounded-lg group">
                        <div class="flex justify-between items-start mb-6">
                            <div class="font-mono text-zinc-500 text-sm tracking-tighter">03 // GHOST_PROTOCOL</div>
                            <span class="text-[10px] font-mono text-zinc-500 border border-zinc-500/30 px-2 py-0.5 rounded uppercase">Archived</span>
                        </div>
                        <h3 class="text-2xl font-mono font-bold text-white mb-3 group-hover:text-architectural-sand transition-colors">Legacy_Monolith_v2.0</h3>
                        <p class="text-zinc-400 text-sm mb-6 leading-relaxed">
                            The previous generation architecture that powered the early 20s development cycle.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">PHP</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">jQuery</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">MySQL</span>
                        </div>
                        <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-industrial-orange transition-colors">
                            [ VIEW_SOURCE ] <i data-lucide="external-link" class="w-3 h-3"></i>
                        </a>
                    </div>

                    <!-- PROJECT 04 -->
                    <div class="glow-border bg-zinc-900/40 p-8 rounded-lg group">
                        <div class="flex justify-between items-start mb-6">
                            <div class="font-mono text-zinc-500 text-sm tracking-tighter">04 // QUANTUM_LEAP</div>
                            <span class="text-[10px] font-mono text-industrial-orange border border-industrial-orange/30 px-2 py-0.5 rounded uppercase">Planning</span>
                        </div>
                        <h3 class="text-2xl font-mono font-bold text-white mb-3 group-hover:text-architectural-sand transition-colors">Project_3.0_Core</h3>
                        <p class="text-zinc-400 text-sm mb-6 leading-relaxed">
                            The blueprint for the next decade of engineering, focusing on decentralized intelligence.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Rust</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">WebAssembly</span>
                            <span class="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Edge_Computing</span>
                        </div>
                        <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-industrial-orange transition-colors">
                            [ VIEW_SOURCE ] <i data-lucide="external-link" class="w-3 h-3"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
