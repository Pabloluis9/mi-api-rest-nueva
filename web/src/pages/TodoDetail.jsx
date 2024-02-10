import { useCallback, useEffect, useState } from "react";
import { deleteTodo, getTodoDetail } from "../services/todos.Service";
import { useParams, useNavigate, Link } from "react-router-dom";


const TodoDetail = () => {
  const { id } = useParams();


  const navigate = useNavigate();
  const [todo, setTodo] = useState({});
  const fetchTodoData = useCallback(() => {
    if (!id) return;

    getTodoDetail(id)
      .then((todo) => {

        setTodo(todo);
      })
      .catch((e) => console.error(e));
  }, [id]);
  useEffect(() => {
    fetchTodoData();
  }, [fetchTodoData, id]);

  const onDelete = () => {
    if (confirm(`Estás a punto de borrar: ${todo.task}`)) {
      deleteTodo(id)
      .then(() => {
        navigate('/');
      })
      .catch((e) => console.error(e));
    }
  };
  return (
    <div className="col">
    <p>{todo.task}</p>
    <p>{todo.createdAt}</p>
    <p>{todo.status}</p>
    <div className="d-flex gap-3">

    <Link to={`/todos/${id}/edit`} className="btn btn-success">
       Editar todo
    </Link>
    <button onClick={onDelete} className="btn btn-danger">
     Borrar todo
    </button>
    </div>
    </div>
  )

  }
  
  export default TodoDetail;