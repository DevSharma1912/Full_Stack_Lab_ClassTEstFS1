const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

function requireAuth(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (apiKey !== 'secret123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

// GET is public.
app.get('/api/books', (req, res) => {
  res.json([
    { id: 1, title: 'Node.js Basics', author: 'Author 1' },
    { id: 2, title: 'Express.js Guide', author: 'Author 2' }
  ]);
});

// Authentication is applied ONLY to POST.
app.post('/api/books', requireAuth, (req, res) => {
  res.status(201).json({
    message: 'Book created successfully',
    book: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Q3 server running on http://localhost:${PORT}`);
});
