import {FC} from "react";
import TodoItem from "../TodoItem";
import {ITodoListProps} from "./types";

const TodoList: FC<ITodoListProps> = ({todos, handleToggle, handleDelete, handleEdit}) => {

  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )
      })}
    </ul>
  );
};

export default TodoList;