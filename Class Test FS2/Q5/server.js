const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const books = [
  { id: 1, title: 'Node.js Basics', author: 'Author 1' },
  { id: 2, title: 'Express.js Guide', author: 'Author 2' }
];

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  // The bug was using book.title without checking whether book exists.
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.status(200).json(book.title);
});

app.listen(5002, () => {
  console.log('Q5 server running on http://localhost:5002');
});
