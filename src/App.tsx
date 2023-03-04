import { FC } from 'react'
import './App.css';
import Todo from "./components/todo/Todo.tsx";

const App:FC =() => {
  return (
      <div className="App">
        <Todo />
      </div>
  )
}

export default App