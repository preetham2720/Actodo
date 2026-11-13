# Actodo

A simple React + Vite to-do application for managing daily activities with a lightweight login and signup flow.

## Overview

Actodo is a front-end activity tracker built to help users:

- create an account with a username and password
- log in to the app
- view a personalized dashboard
- add tasks or activities to their daily to-do list
- keep track of current plans in a clean, card-based interface

This project is a beginner-friendly task manager that demonstrates React state management, routing, and component-based UI design.

## Features

- User authentication flow with login and signup pages
- Personalized greeting on the dashboard
- Activity management form to add new tasks
- Daily activity list rendered dynamically from state
- Dashboard cards for quick overview information
- Responsive layout with a modern black-and-neutral styling theme
- React Router navigation between pages

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- React Router DOM
- Tailwind CSS

## Project Structure

```text
Actodo/
├── public/
├── src/
│   ├── Components/
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Todocontainer.jsx
│   │   ├── Todoform.jsx
│   │   ├── Todolist.jsx
│   │   └── Todolistcard.jsx
│   ├── Pages/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Routes

- `/` — Login page
- `/signup` — Create a new account
- `/home` — Main dashboard and to-do area

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local Vite URL shown in the terminal to view the app.

## Build for Production

```bash
npm run build
```

## Notes

- The app currently uses in-memory user and task data stored in React state.
- It is designed as a front-end prototype and does not yet connect to a backend database or persistent storage.
- The application is ideal for learning component composition, routing, and state updates in React.

## License

This project is for learning and personal use.
