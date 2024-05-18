import {ITodo} from "../../types";

export interface ITodoFormProps {
  onSubmit: (value: string) => void;
  todoEntry: ITodo | null;
}