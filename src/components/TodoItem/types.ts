import {ITodo} from "../../types";

export interface ITodoItemProps {
  todo: ITodo;
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}
