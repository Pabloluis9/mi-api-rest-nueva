import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { createTodo } from "../services/todos.Service";

const NewTodo = () => {
  const navigate = useNavigate()
  const onSubmit = (values) => {
    return createTodo(values)
        .then(createdTodo => {
          navigate(`/todos/${createdTodo.id}`)
        })
  }

  return (
    <div>
      <h1>Crear libro</h1>

      {/* Crear un componente reutilizable con la lógica del formulario */}
      <TodoForm onSubmit={onSubmit} />
    </div>
  )
}

export default NewTodo;