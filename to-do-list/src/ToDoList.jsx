import React, {useState} from 'react'

function ToDoList(){ 

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if (newTask.trim()!=''){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }
    function deleteTask(index){
        const updated = tasks.filter((task, i) => i!=index);
        setTasks(updated);
    }
    function moveUp(index){
        const updated = [...tasks];
        if (index>0){
            [updated[index], updated[index-1]] =
             [updated[index-1],updated[index]];
        }
        setTasks(updated);

    }
    function moveDown(index){
        const updated = [...tasks];
        if (index<updated.length-1){
            [updated[index], updated[index+1]] =
             [updated[index+1],updated[index]];
        }
        setTasks(updated);

    }
    return(

        <div className='container'>
            <h3 className='title'>To Do List</h3>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={() => handleInputChange(event)}></input>
            <button className='add-button' onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task,index) => 
                <li className='task' key={index}>{task}
                <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                <button className='up-button' onClick={() => moveUp(index)}>Up</button>
                <button className='down-button' onClick={() => moveDown(index)}>Down</button>

                </li>)}
            </ol>
        
        </div>
    );
}
export default ToDoList