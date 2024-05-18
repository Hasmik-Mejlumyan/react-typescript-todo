import {FC} from "react";
import {ITodoItemProps} from "./types";

const TodoItem: FC<ITodoItemProps> = ({todo, handleToggle, handleDelete, handleEdit}) => {
  return (
    <li>
      <div>
        <input type="checkbox" checked={todo.isCompleted} onChange={() => handleToggle(todo.id)} />
        <span style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.text}</span>
        <button onClick={() => handleEdit(todo.id)}>EDIT</button>
        <button onClick={() => handleDelete(todo.id)}>DELETE</button>
      </div>
    </li>
  );
};

export default TodoItem;