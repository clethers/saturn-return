const express = require('express');
const path = require('path');
const fs = require('fs');

// Load .env manually (Node built-in, no extra deps)
try {
  const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  for (const line of envFile.split('\n')) {
    const match = line.match(/^([^#=\s]+)\s*=\s*(.*)$/);
    if (match) process.env[match[1]] = match[2].replace(/^["']|["']$/g, '').trim();
  }
} catch {}

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// AI terminal endpoint
app.post('/api/ai', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided.' });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.json({ text: 'AI_CORE: GROQ_API_KEY not configured.' });

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'You are SATURN_OS, a terminal AI embedded in a personal 29th birthday milestone dashboard called Saturn Return. The user is Marx Clethers, a builder and founder. Respond in terse, terminal-style output — plain text only, no markdown, max 3 lines.',
          },
          { role: 'user', content: prompt },
        ],
        max_tokens: 150,
      }),
    });
    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'AI_CORE: no response.';
    res.json({ text });
  } catch (err) {
    res.status(500).json({ text: `AI_CORE: error — ${err.message}` });
  }
});

// Fallback to index.html for SPA-like behavior (Express 5 wildcard pattern)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Saturn OS running at http://localhost:${port}`);
});
