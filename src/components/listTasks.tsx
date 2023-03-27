import React, {useState, useEffect} from 'react'
import { IonButton } from '@ionic/react';



const url = "http://localhost:3000/todo_tasks";
export default function GetTasks() {

    const[todos, setTodos] = useState<any[]>([]);


    useEffect(() => {
        getTasks()
    }, [])

    let getTasks =  async () => {
        let response = await fetch(`${url}`)
        let data =  await response.json()
        setTodos(data)
        console.log(data)
    }

    let DeleteTask = ( id:String) => {

      const url = `http://localhost:3000/todo_tasks/${id}`;
    
      fetch(url, {method:'DELETE'}).then( () => getTasks())
      alert(`You will delete this task`)
      console.log(id)
  
    };

    const Update = (id:String) => {
        const [todo, setTodo] = useState({
            task: "",
            completed: "",
        });
        
        const {task, completed} = todo;
        const url = `http://localhost:3000/todo_tasks/${id}`;

    
        fetch(url,  {
    
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(todo),
                
            })
    
            setTodo({
                task: "",
                completed: "",
            });
            
               
                
        };

    return (
        <>
          <h1>Task List:</h1>
          <IonButton routerLink='/create'>Add Task</IonButton>
          <table>
            <tr>
              <th>Task</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
            
           
            {todos.map(task => (
              <tr key={task.id}>
                <td>{task.task}</td>    
                <th>{String(task.completed)}</th>
                <td><IonButton routerLink='/home'>Update</IonButton></td>
                <td><IonButton onClick={()=> DeleteTask(task.id)}>Delete</IonButton></td>  
              </tr>
              
            ))}
            
          </table>
        </>
      );

}
