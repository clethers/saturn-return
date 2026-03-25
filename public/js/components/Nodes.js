export const Nodes = () => `
    <section id="network-nodes" class="mb-24">
        <div class="flex items-center gap-4 mb-8">
            <h2 class="text-xl font-mono font-bold text-white uppercase tracking-widest">Network_Nodes</h2>
            <div class="h-[1px] flex-grow bg-zinc-800"></div>
            <div class="text-[10px] font-mono text-slate-500 uppercase">Status: Active_Uplinks</div>
        </div>

        <div class="node-grid">
            <div class="node-card group">
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-mono text-zinc-500">NODE_01</span>
                    <div class="node-status"></div>
                </div>
                <div class="text-sm font-mono text-white group-hover:text-electric-blue transition-colors">GITHUB_CORE</div>
                <div class="text-[9px] font-mono text-zinc-600">SOURCE_CONTROL</div>
            </div>

            <div class="node-card group">
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-mono text-zinc-500">NODE_02</span>
                    <div class="node-status"></div>
                </div>
                <div class="text-sm font-mono text-white group-hover:text-electric-blue transition-colors">LINKEDIN_SYNC</div>
                <div class="text-[9px] font-mono text-zinc-600">PROFESSIONAL_GRAPH</div>
            </div>

            <div class="node-card group">
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-mono text-zinc-500">NODE_03</span>
                    <div class="node-status"></div>
                </div>
                <div class="text-sm font-mono text-white group-hover:text-electric-blue transition-colors">X_UPLINK</div>
                <div class="text-[9px] font-mono text-zinc-600">REALTIME_FEED</div>
            </div>

            <div class="node-card group">
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-mono text-zinc-500">NODE_04</span>
                    <div class="node-status offline"></div>
                </div>
                <div class="text-sm font-mono text-zinc-500">SECURE_VAULT</div>
                <div class="text-[9px] font-mono text-zinc-700">ENCRYPTED_STORAGE</div>
            </div>
        </div>
    </section>
`;
