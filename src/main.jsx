import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  { id: "task-0", name: "Coding Task", category: "Work", completed: true },
  { id: "task-1", name: "Clean House", category: "Home", completed: false },
  { id: "task-2", name: "Mow Lawn", category: "Garden", completed: false },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
)
