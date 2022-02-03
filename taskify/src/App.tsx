import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1 className='heading'>Taskify</h1>
      <InputField></InputField>
    </div>
  );
};

export default App;
