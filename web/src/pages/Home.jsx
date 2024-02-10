import { useEffect, useState } from "react";
import { getTodos } from "../services/todos.Service";
import { Link } from "react-router-dom";


const Home = () => {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    getTodos()
    .then((todos) => {

      setTodos(todos);

    })
    .catch((error) => console.log(error))
  }, [])
  console.log('Todos:', todos);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Seleccionar</th>
          <th>Tarea</th>
          <th>Fecha de Creación</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
  {todos.map((todo) => {
    console.log('Todo ID:', todo._id); // Agregado para depuración
    return (
      <tr key={todo._id}>
        <td>{todo._id}</td>
        <td>
          <Link to={`/todos/${todo._id}`}>{todo.task}</Link>
        </td>
        {/* <input
          type="checkbox"
          checked={selectedTodos.includes(todo.id)}
          onChange={() => handleCheckboxChange(todo.id)}
        /> */}
        <td>{todo.createdAt}</td>
        <td>{todo.status}</td>
      </tr>
    );
  })}
</tbody>

    </table>
  );
}

export default Home;
