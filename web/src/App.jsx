import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import TodoDetail from './pages/TodoDetail'
import NewTodo from './pages/NewTodo'
import EditTodo from './pages/EditTodo'

function App() {
  return (
<div data-bs-theme="dark">      <Navbar />

<div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="/todos/new" element={<NewTodo />} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

