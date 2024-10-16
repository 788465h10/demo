import { DeleteOutlined } from '@ant-design/icons'
import { Todo } from '../typeholder';
import { useTodosStore } from '../store';
import { useEffect, useState } from 'react';
import { useBoolean } from '../hooks/useBoolean';

export const ViewTodo = () => {
  const todos = useTodosStore((state) => state.todos);
  const removeTodo = useTodosStore((state) => state.removeTodo);
  const checkTodo = useTodosStore((state) => state.checkTodo);
  const fetchTodos = useTodosStore((state) => state.fetchTodos);
  const addTodo = useTodosStore((state) => state.addTodo);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
    toggle();
  }

  const { value, toggle } = useBoolean(false);
  
  useEffect(() => {fetchTodos()},[]);

  return (
    <div className='flex flex-row justify-center items-center w-full text-2xl'>
      <table className='table-auto w-[70%] border-collapse border border-black my-5'>
        <thead>
          <tr>
            <th className='border border-black p-2'>Title</th>
            <th className='border border-black p-2'>Completed</th>
            <th className='border border-black p-2'>Delete</th>
          </tr>
        </thead>
        <tbody>
            {todos.map((todo: Todo) => (
            <tr key={todo.id}>
              <td className='border border-black p-2'>{todo.todo}</td>
              <td className='border border-black p-2 text-center'>
                <input type='checkbox' checked={todo.completed}
                  onChange={() => checkTodo(todo.id)} className='w-[20px] h-[20px]'/>
              </td>
                <td className='border border-black p-2 text-center'>
                <DeleteOutlined onClick={() => removeTodo(todo.id)} />
                </td>
            </tr>
            ))}
        </tbody>
      </table>

      <div>
      <button className="fixed bottom-5 right-5 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition" onClick={toggle}>
        Add More Todo
      </button>

      {value && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50" onClick={toggle}>
        <div className="bg-white rounded-lg shadow-lg p-6 w-96" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-lg font-bold mb-4">Add Todo</h2>
          <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="todo" className="block text-sm font-medium mb-1">
            Todo:
          </label>
          <input
            type="text"
            id="todo"
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
          Add Todo
        </button>
          </form>
        </div>
      </div>
      )}
    </div>
    </div>
  )
}