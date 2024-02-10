import { useNavigate, useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useEffect, useState } from "react"; 
import { editTodo, getTodoDetail } from "../services/todos.Service";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({ task: '', createdAt: '', status: '' });

  useEffect(() => {
    console.log('Fetching TODO with ID:', id);

    getTodoDetail(id)
      .then((todoDB) => {
        console.log('Todo data:', todoDB);
        setTodo(todoDB);
      })
      .catch(error => console.error(error));
  }, [id]);

  const onSubmit = (values) => {
    console.log('Form submitted with values:', values);

    return editTodo(id, values)
      .then(editedTodo => {
        console.log('Todo edited:', editedTodo);
        navigate(`/todos/${editedTodo._id}`);
      })
      .catch(error => console.error(error));
  };

  // Renderizar el formulario solo cuando todo tenga datos
  if (!todo._id) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Editar todo</h1>
      <TodoForm initialValues={todo} onSubmit={onSubmit} />
    </div>
  );
};

export default EditTodo;
