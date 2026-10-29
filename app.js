'use strict';
const express = require('express');
const app = express();
app.disable('x-powered-by');
app.get('/', (req, res) => res.type('text/plain').send('Hello World'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use((req, res) => res.status(404).json({ error: 'Not found' }));
if (require.main === module) {
  const port = Number(process.env.PORT || 4000);
  app.listen(port, '0.0.0.0', () => console.log(`Running on http://0.0.0.0:${port}`));
}
module.exports = app;
