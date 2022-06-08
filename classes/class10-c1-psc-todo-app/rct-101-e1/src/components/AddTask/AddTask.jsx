import React, {useState} from "react";
import styles from "./addTask.module.css";

const AddTask = ( {addTask} ) => {

   const [newTask, setNewTask] = useState("")

   const handleClick = ( ) => {
     console.log("newTask-----**", newTask);
     
     addTask(newTask)
     setNewTask("")
   }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" 
      value={newTask}
      onChange={({target}) => {
      console.log(target);
      setNewTask(target.value) } }

      type="text" 
      // placeholder="Add task..."
       />

      <button data-cy="add-task-button"   
       onClick={handleClick} > 
       
          + </button>
    </div>
  );
};

export default AddTask;
