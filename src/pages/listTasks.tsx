import React, {useState, useEffect} from 'react'
import {  useParams } from 'react-router';
import { IonButton } from '@ionic/react';
import { IonNavLink } from '@ionic/react';
import { IonRouterLink } from '@ionic/react';
import { History } from 'history';

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

    

    //let handleClick = () => {
        //navigate("/create")
    //}

    let DeleteTask =  ( id:String) => {

      //event.preventDefault();

      //let params = useParams();
      //let id = params.id;
      const url = `http://localhost:3000/todo_tasks/${id}`;
  
    
      fetch(url, {method:'DELETE'}).then( () => getTasks())
      alert(`You will delete this task`)
      console.log(id)
      //navigate("/")
  
    }

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
                <td><IonButton routerLink=''>Update</IonButton></td>
                <td><button onClick={()=> DeleteTask(task.id)}>Delete</button></td>  
              </tr>
              
            ))}
            
          </table>
        </>
      );

}