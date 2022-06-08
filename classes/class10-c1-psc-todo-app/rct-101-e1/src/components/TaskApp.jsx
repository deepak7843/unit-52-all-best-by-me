import React, {useState} from "react";
import {v4} from 'uuid';

// import {TaskHeader} from "./TaskHeader/TaskHeader"
import TaskHeader from "./TaskHeader/TaskHeader"




// import {AddTask} from "./AddTask/AddTask"
import AddTask from "./AddTask/AddTask"


// import {Tasks} from "./Tasks/Tasks"
import Tasks from "./Tasks/Tasks"

import taskData from "../data/tasks.json"

import styles from "./taskApp.module.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState(taskData)

    // console.log(tasks);

    const addTask = (newTask) => {
      // newTask= ""

     ////  .some/.filter/.find ---->> anyone can use

      let isTaskPresent = tasks.some( (task) => task.text === newTask )
      if(newTask && !isTaskPresent) {

        const newTaskObj = {
           id: v4(),
           text: newTask,
           done: false,
           count: 1
        }
        setTasks( [ ...tasks, newTaskObj ] )
      }
    }

    // console.log("************************************************************************************")
    const handleUpdateTask= (updatedTask ) => {
       
      let newTasks = tasks.reduce((acc, curr) => {
        if(curr.id=== updatedTask.id) {
          acc.push(updatedTask)
        } else {
          acc.push(curr)
        }
        return acc
      }, [] )  

      console.log("newTasks----**", newTasks);
      setTasks([...newTasks])
    }
  console.log("tasks-----/////----", tasks);


  const handleRemoveTask= (taskId) => {   
    console.log("Removed_taskId---", taskId);

    let newTasks= tasks.filter(task => task.id !== taskId);

    // console.log("newTasks---+++99", newTasks);

    setTasks(newTasks)
  }  

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.main}>

    <div className={styles.taskApp} >  

      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
       <TaskHeader tasks={tasks}  />

       <AddTask addTask= {addTask} />

       <Tasks tasks={tasks}

         handleUpdateTask= {handleUpdateTask} 
         
         handleRemoveTask= {handleRemoveTask} />

      </div>

    </div>
  );
};

export default TaskApp;
