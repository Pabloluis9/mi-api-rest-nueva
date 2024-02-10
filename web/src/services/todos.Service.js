        import http from './BaseService';

        export const getTodos = () => http.get('/');

        export const getTodoDetail = (id) => http.get(`/todos/${id}`)

        export const deleteTodo = (id) => http.delete(`/todos/${id}`)

        export const createTodo = (data) => http.post('/todos', data)

        export const editTodo = (id, data) => http.put(`/todos/${id}`, data)
