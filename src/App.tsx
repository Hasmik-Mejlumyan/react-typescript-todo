import React, {useState} from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {ITodo} from "./types";


const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoEntry, setTodoEntry] = useState<ITodo | null>(null);

  const handleSubmit = (value: string) => {

    if (todoEntry) {
      setTodos((prevState => prevState.map(todo => {
        if (todo.id === todoEntry.id) {
          return {
            ...todo,
            text: value
          }
        }
        return todo
      })));

      setTodoEntry(null);
      return;
    }

    const newTodo: ITodo = {
      id: Date.now().toString(),
      text: value,
      isCompleted: false,
      isEditing: false
    }

    setTodos((prevState => [...prevState, newTodo]));
  };

  const handleToggle = (id: string) => {
    setTodos((prevState => prevState.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })))
  };

  const handleDelete = (id: string) => {
    setTodos((prevState => prevState.filter(todo => todo.id !== id)))
  }

  const handleEdit = (id: string) => {
    const editingData = todos.find(todo => todo.id === id);

    if (!editingData) {
      return;
    }

    setTodoEntry(editingData);
  }


  return (
    <div className="App">
      <TodoForm onSubmit={handleSubmit} todoEntry={todoEntry} />

      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
