# Task Management System

A simple Task Management System built with Next.js using `useTasks` for state management.

## Features
- Create, update, delete tasks.
- Mark tasks as complete or incomplete.
- View all tasks in a list.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-mgt-app-nextjs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd task-mgt-app-nextjs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to access the app.

## File Structure

- `pages/` - Contains the main pages of the application.
  - `index.js` - The home page where users can view and manage tasks.
  
- `components/` - Contains reusable UI components.
  - `TaskList.js` - Displays the list of tasks.
  - `TaskItem.js` - Displays an individual task.
  - `TaskForm.js` - Form for creating and editing tasks.

- `hooks/` - Contains the custom hook for task management.
  - `useTasks.js` - Handles task creation, deletion, and update logic using React state.

## `useTasks` Hook

The `useTasks` hook is used to manage the tasks in the app. It provides functions to:
- Add a new task.
- Update an existing task.
- Delete a task.
- Toggle task completion.

## License

MIT License
