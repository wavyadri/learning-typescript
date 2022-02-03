import './styles.css';
import { useState } from 'react';

const InputField = () => {
  const [todo, setTodo] = useState('');

  return (
    <form className='input'>
      <input type='input' placeholder='Enter a task' className='input__box' />
      <button type='submit' className='input__submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
