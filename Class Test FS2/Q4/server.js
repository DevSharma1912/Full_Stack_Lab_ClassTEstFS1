const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let books = [
    {
        id: 1,
        title: "Node.js Basics",
        author: "Author 1"
    },
    {
        id: 2,
        title: "Express.js Guide",
        author: "Author 2"
    }
];

// GET all books
app.get("/api/books", (req, res) => {
    res.json(books);
});

// POST create a book
app.post("/api/books", (req, res) => {
    const { title, author } = req.body;

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// DELETE a book
app.delete("/api/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1)[0];

    res.json(deletedBook);
});

app.listen(5001, () => {
    console.log("Q4 server running on http://localhost:5001");
});