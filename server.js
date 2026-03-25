const express = require('express');
const path = require('path');
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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.json({ text: 'AI_CORE: GEMINI_API_KEY not configured.' });

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `You are SATURN_OS, a terminal AI embedded in a personal 29th birthday milestone dashboard called Saturn Return. The user is Marx Clethers, a builder and founder. Respond in terse, terminal-style output — plain text only, no markdown, max 3 lines. User input: ${prompt}`,
    });
    res.json({ text: response.text });
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
