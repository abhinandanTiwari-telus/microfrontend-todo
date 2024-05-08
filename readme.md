# Daily Todo - Micro Frontend Project

Daily Todo is a todo list app where you can add your daily task checklist 📋.

## Technical Aspects

This project consists of two Micro Frontend (MFE) apps:

1. **Todo App (MFE 1):**

   - Exposes the Todo component.
   - Location: `/todo`.

2. **Get Todos App (MFE 2):**
   - Consumes the Todo component exposed by MFE 1.
   - Location: `/get-todos`.

## Installation

**Start MFE 1 (Todo App):**

```bash
cd /todo
npm install
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the Todo App 🚀.

**Start MFE 2 (Get Todos App):**

```bash
    cd /get-todos
    npm install
    npm start
```

Open your browser and navigate to `http://localhost:3001` to view the Get Todos App where Todo comp is consumed ⚡.

## Running Tests

**You can run tests for MFE 1 (Todo App):**

```bash
    cd /todo
    npm run test
    npm run test-report (for coverage report)
```

##

Feel free to explore the application and delve into the codebase. May your day be filled with productive task management and a sense of accomplishment!

## License

[MIT](https://choosealicense.com/licenses/mit/)
