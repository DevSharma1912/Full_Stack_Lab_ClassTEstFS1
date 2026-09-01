# Full Stack Web Development — Frontend Practical Test

## COER University, Roorkee

### Department of Computer Science & Engineering

**Student Name:** Dev Sharma
**Course:** Full Stack Web Development
**Test:** Frontend Practical Test
**Technology:** React.js
**Project Type:** React/Vite Frontend Application

---

## 📌 Project Overview

This project contains the solutions for the **Full Stack Web Development — Frontend Practical Test** conducted by the Department of Computer Science & Engineering, COER University, Roorkee.

The project is developed using **React.js** and demonstrates fundamental frontend concepts such as state management, event handling, conditional rendering, list rendering, filtering, and timer functionality.

There are **five separate React components**, one for each practical question.

---

## 📝 Questions Implemented

### Q1. Counter

A counter application with:

* Increment button
* Decrement button
* Reset button
* Running count display
* Decrement button becomes disabled when the count reaches `0`

**React Concepts:** `useState`, event handling, conditional button disabling

---

### Q2. Todo List

A simple Todo List application with:

* Text input
* Add button
* List of entered tasks
* Individual Delete button for every task
* Empty input validation

**React Concepts:** `useState`, arrays, `map()`, `filter()`, event handling

---

### Q3. Login Toggle

A login/logout interface that:

* Initially displays a **Login** button
* Shows a welcome message after login
* Displays a **Logout** button after login
* Returns to the initial state after logout

**React Concepts:** `useState`, conditional rendering

---

### Q4. Live Search Filter

A live search application with:

* Hardcoded list of names
* Search input
* Filtering on every keystroke
* Case-insensitive search
* `No results found` message when no name matches

**React Concepts:** controlled components, `useState`, `filter()`, `map()`

---

### Q5. Stopwatch

A stopwatch application with:

* Start button
* Pause button
* Reset button
* Elapsed seconds display
* Proper pause and resume functionality
* Interval cleanup to prevent multiple timers from running simultaneously

**React Concepts:** `useState`, `useEffect`, `setInterval()`, cleanup functions

---

## 📂 Project Structure

```text
Class Test FS1/
│
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── TodoList.jsx
│   │   ├── LoginToggle.jsx
│   │   ├── LiveSearch.jsx
│   │   └── Stopwatch.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (JSX)**
* **HTML5**
* **CSS3**
* **Vite**
* **Node.js**
* **npm**

---

## ▶️ How to Run the Project

### 1. Install dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open in browser

Vite will provide a local development URL similar to:

```text
http://localhost:5173/
```

Open the URL in a web browser to view the application.

---

## 🎯 Learning Objectives

This practical demonstrates the ability to:

* Create reusable React components
* Manage component state using `useState`
* Handle user events
* Work with arrays in React
* Render dynamic lists
* Implement conditional rendering
* Create controlled form inputs
* Filter data based on user input
* Use `useEffect` for timer functionality
* Properly clean up intervals
* Build and run a React application using Vite

---

## 👨‍💻 Student

**Dev Sharma**

**COER University, Roorkee**
Department of Computer Science & Engineering

---

## 📄 Academic Submission

This repository has been created as part of the **Full Stack Web Development — Frontend Practical Test**.

**Total Questions:** 5
**Total Marks:** 20
**Frontend Framework:** React.js
