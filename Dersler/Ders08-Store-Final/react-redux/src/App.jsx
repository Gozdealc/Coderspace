import { useSelector, useDispatch } from 'react-redux'
import { addToDo, deleteToDo } from './redux/slices/todoSlice'
import './App.css'

function App() {

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  }

  const handleAddToDo = (todo) => {
    dispatch(addToDo(todo));
  };

  return (
    <>
      <h1>Redux Toolkit ToDo App</h1>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        const todo = e.target[0].value;
        handleAddToDo({
          id: Date.now(),
          title: todo,
          completed: false,
        });
      }}
      >
        <input type="text" name="todo" placeholder="Taskı girin..." />
        <button type="submit">Add ToDo</button>
      </form>

      <ul>
        {/* <li>
          <span>ToDo 1</span>
          <button>Delete</button>
        </li>
        <li>
          <span>ToDo 2</span>
          <button>Delete</button>
        </li> */}
      { todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>  // todos.map loop end  //
      ))}
      </ul>
    </>
  )
}

export default App
