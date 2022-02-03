import './styles.css';
import { useState } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type='input'
        placeholder='Enter a task'
        className='input__box'
      />
      <button type='submit' className='input__submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
