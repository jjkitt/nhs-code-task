React Take-Home Challenge 1: Mini Task Tracker
Jane Kitto
---------------------------------------------------------------------------------

Overview:
This is a small React application for managing personal tasks.

Users can:
- Add tasks with a title and category
- Mark tasks as complete
- Filter tasks by category

The app will:
- Persist tasks using localStorage
- Automatically refocus the input after adding a task
- Remember the last selected category

---------------------------------------------------------------------------------

Project Structure:
src/
  App.jsx
  App.test.jsx
  index.css
  components/
    AddTask.jsx
    TaskList.jsx
    Filter.jsx

Components:
AddTask handles form input and submission of new tasks
TaskList renders the list of tasks
Filter handles the filtering of the task list
 
---------------------------------------------------------------------------------
   
Key Implementation Details

Task Persistence:
- Tasks are stored in localStorage and remain visible after refresh
- Updates are synced using useEffect

Category Persistence:
- The last selected category is saved to localStorage
- The dropdown restores the last used category on reload

UX Enhancements:
- Input field is automatically refocused after adding a task
- Submitting first task without selecting a category is prevented

---------------------------------------------------------------------------------

Testing
The project includes a test (App.test.jsx) that verifies adding a task updates the task list.

The test:
- Renders the application
- Simulates user input (task name and category)
- Simulates clicking the "Add" button
- Verifies that the new task appears in the UI

This ensures that:
- Form inputs update state correctly
- Task creation logic works
- The UI renders as expected

---------------------------------------------------------------------------------

React Hooks Used

The application is built using React functional components and the following hooks:

useState - to manage component state, including:
Task list (tasks)
Form inputs (name, category)
Filter selection

useEffect - for handling persistence:
Saving tasks to localStorage whenever they change
Saving the last selected category
Loading persisted data on initial render

useRef - to manage direct interaction with DOM elements:
Automatically refocusing the task input field after a task is added

---------------------------------------------------------------------------------

Stack:
- React (functional components with hooks)
- Vite (development set up)
- Vitest (test runner)
- React Testing Library (UI testing)

---------------------------------------------------------------------------------
