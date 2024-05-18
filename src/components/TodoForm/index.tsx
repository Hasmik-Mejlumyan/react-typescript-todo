import {FC, useState, ChangeEvent, FormEvent, useEffect} from 'react';
import {ITodoFormProps} from "./types";


const TodoForm: FC<ITodoFormProps> = ({onSubmit, todoEntry}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    onSubmit(value);
    setValue('');
  }

  useEffect(() => {
    if (todoEntry) {
      setValue(todoEntry.text);
    } else {
      setValue('');
    }
  }, [todoEntry])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} />
      <button>Save</button>
    </form>
  )
};

export default TodoForm;