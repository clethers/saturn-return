export const Explorer = () => `
    <div class="space-y-2 font-mono text-xs" id="explorer-root">
        <!-- ROOT -->
        <div class="folder group active" id="root-folder">
            <div class="folder-header flex items-center gap-2 cursor-pointer hover:text-white transition-colors" onclick="toggleFolder('root-folder')">
                <i data-lucide="chevron-right" class="w-3 h-3 text-zinc-700 transition-transform"></i>
                <i data-lucide="folder" class="w-3 h-3 text-industrial-orange"></i>
                <span>saturn_return_v3</span>
            </div>
            
            <div class="folder-content pl-4 border-l border-zinc-800 ml-1.5 mt-2 space-y-2">
                <!-- SRC -->
                <div class="folder group active" id="src-folder">
                    <div class="folder-header flex items-center gap-2 cursor-pointer hover:text-white transition-colors" onclick="toggleFolder('src-folder')">
                        <i data-lucide="chevron-right" class="w-3 h-3 text-zinc-700 transition-transform"></i>
                        <i data-lucide="folder" class="w-3 h-3 text-electric-blue"></i>
                        <span>src</span>
                    </div>
                    <div class="folder-content pl-4 border-l border-zinc-800 ml-1.5 mt-2 space-y-2">
                        <div class="file flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer transition-colors">
                            <i data-lucide="file-code" class="w-3 h-3"></i>
                            <span>core.js</span>
                        </div>
                        <div class="file flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer transition-colors">
                            <i data-lucide="file-code" class="w-3 h-3"></i>
                            <span>telemetry.js</span>
                        </div>
                    </div>
                </div>

                <!-- ASSETS -->
                <div class="folder group" id="assets-folder">
                    <div class="folder-header flex items-center gap-2 cursor-pointer hover:text-white transition-colors" onclick="toggleFolder('assets-folder')">
                        <i data-lucide="chevron-right" class="w-3 h-3 text-zinc-700 transition-transform"></i>
                        <i data-lucide="folder" class="w-3 h-3 text-zinc-600"></i>
                        <span>assets</span>
                    </div>
                    <div class="folder-content pl-4 border-l border-zinc-800 ml-1.5 mt-2 space-y-2">
                        <div class="file flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer transition-colors">
                            <i data-lucide="image" class="w-3 h-3"></i>
                            <span>blueprint.svg</span>
                        </div>
                    </div>
                </div>

                <div class="file flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer transition-colors">
                    <i data-lucide="file-json" class="w-3 h-3"></i>
                    <span>package.json</span>
                </div>
                <div class="file flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer transition-colors">
                    <i data-lucide="terminal" class="w-3 h-3"></i>
                    <span>decade_logs.sh</span>
                </div>
            </div>
        </div>
    </div>
`;
