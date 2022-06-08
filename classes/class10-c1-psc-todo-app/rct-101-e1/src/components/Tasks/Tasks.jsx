import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
import emptyIcon from "../../assets/empty.svg" 

// const Tasks = (props) => {
//   console.log(props);

const Tasks = ({tasks, handleUpdateTask, handleRemoveTask }) => {
  // console.log("tasks----", tasks); 

  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      {tasks.length > 0 ? (<ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}

        {tasks.map( (task) => {

         return (
        <Task key={task.id} task={task}
         handleUpdateTask={handleUpdateTask} 
         handleRemoveTask={handleRemoveTask}  />

        // <Task task={task} handleUpdateTask={handleUpdateTask}  />

         )
        } )}

      </ul>) : (
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
         
         <img src={emptyIcon} alt="Empty task List" />
         <div>
           <b>Empty list</b>
         </div>

         <div> Add a new task above  </div>

      </div>)}

      
    </>
  );
};

export default Tasks;
