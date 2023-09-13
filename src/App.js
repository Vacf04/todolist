import './App.css';
import Form from './components/Form';
import FormInput from './components/FormInput';
import FormSubmit from './components/FormSubmit';
import Task from './components/Task';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [ deleteTask, setDeleteTask ] = useState(true);
  const [ edit, setEdit ] = useState(false);
  const [ index, setIndex ] = useState(0);
  const [ input, setInput ] = useState("");
  const [ tasks, setTasks ] = useState([]);
  const inputRef = useRef();

  useEffect(() => { 
    const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
    if(!localStorageTasks) return;
    setTasks(localStorageTasks);
  },[]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setDeleteTask(false);
    setEdit(true);
    setIndex(index);
    inputRef.current.focus();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.length === 0 || !input.trim()) {
      alert('Você não pode enviar vazio');
      setInput("");
      return;
    };

    if(edit) {
      let newTasks = [...tasks];
      newTasks[index] = input.trim();
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setInput("");
      setEdit(false);
      setDeleteTask(true);
      return;
    }

    if(tasks.indexOf(input.trim()) !== -1) return;
    const newTasks = [...tasks, input.trim()];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setInput("");
  };

  

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    console.log(newTasks)
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form 
      handleSubmit={handleSubmit} 
      >
        <FormInput 
        ref={inputRef} 
        handleOnChange={handleOnChange} 
        value={input}
        />
        <FormSubmit 
        edit={edit} 
        />
      </Form>
      <Task 
      tasks={tasks} 
      handleDelete={handleDelete} 
      handleEdit={handleEdit} 
      deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
