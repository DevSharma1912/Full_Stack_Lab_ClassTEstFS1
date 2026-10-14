# Full Stack Web Development — Class Test

Solutions are organized according to the seven questions in the supplied Class Test.

## Q1 — Event Loop
Run: `node Q1.js`
Expected order: `A`, `D`, `C`, `B`.

## Q2 — Modules
```bash
cd Q2
node app.js
```
Expected output: `9`

## Q3 — Middleware & Routing
```bash
cd Q3
npm install
node server.js
```
GET `/api/books` is public. POST `/api/books` requires `x-api-key: secret123`.

## Q4 — REST API
```bash
cd Q4
npm install
node server.js
```
Test GET, POST and DELETE `/api/books`.

## Q5 — Error Handling
```bash
cd Q5
npm install express
node server.js
```
Test an existing ID and a missing ID such as `/api/books/999`.

## Q6 — React
`BookList.jsx` implements loading, error and success states using `useEffect`, `useState` and `fetch()`.
It is written in Vite-style React files. Install React/Vite in a React project before running it.

## Q7 — CORS
```bash
cd Q7
npm install
node server.js
```
The API permits requests from `http://localhost:3000`.
