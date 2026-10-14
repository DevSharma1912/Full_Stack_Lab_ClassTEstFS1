const express = require('express');
const cors = require('cors');

const app = express();

// Allow the React app running on localhost:3000 to call this API.
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/books', (req, res) => {
  res.json([
    { id: 1, title: 'Node.js Basics', author: 'Author 1' },
    { id: 2, title: 'Express.js Guide', author: 'Author 2' }
  ]);
});

app.listen(5000, () => {
  console.log('Q7 server running on http://localhost:5000');
});
