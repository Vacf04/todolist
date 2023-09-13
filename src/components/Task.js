import { FaTrash, FaPen } from 'react-icons/fa';
import Styles from './Task.module.css';

export default function Task({ tasks, handleDelete, handleEdit, deleteTask }) {
  return (
    <ul className={Styles.list}>
      {tasks.map((task, index) => (
      <li key={index} className={Styles.listItem}>
        {task} 
        <div className={Styles.actionButtons}>
          <FaTrash className={deleteTask ? Styles.remove : Styles.removeDisable} 
          onClick={() => handleDelete(index)}
          />
          <FaPen 
          className={Styles.edit} 
          onClick={() => handleEdit(index)} 
          />
        </div> 
      </li> ))} 
    </ul>
  );
}