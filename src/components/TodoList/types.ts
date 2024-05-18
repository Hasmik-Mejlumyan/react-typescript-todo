import {ITodo} from "../../types";

type ActionFunctionType = (id: string) => void;

export interface ITodoListProps {
  todos: ITodo[];
  handleToggle: ActionFunctionType;
  handleDelete: ActionFunctionType;
  handleEdit: ActionFunctionType;
}
