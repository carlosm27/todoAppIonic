import React, { useState } from 'react';
import { IonInput, IonItem, IonLabel, IonList, IonContent } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';
import TaskList from './taskList';


interface Task {
  id: number;
  body: string;
};

let dummyData = [
  {"id":0, "body":"Get milk" }, 
  {"id":1, "body":"Wash car" }, 
  {"id":2, "body":"Start coding"}
];


let nextId: number = 3;

export function AddTask() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<any[]>([])


  return (
    <IonContent>
      <IonItem>
        <input value={task} 
        onChange={e => setTask((e.target as HTMLInputElement).value)}
         placeholder="Enter task"/>

        <div className="item-note">
          <button onClick={() => {
           setTaskList([
            ...taskList, {id : nextId++, body: task}
           ]);
          }} ion-button ><IonIcon icon={addCircle}></IonIcon></button>
        </div>
      </IonItem>
      <IonList>
        <IonItem>
        <ul>
          {taskList.map(taskList => (
          <li key={taskList.id}>{taskList.body}{" "}
          <button onClick={() => {
            setTaskList(
              Object.values(taskList).filter((a:any) =>
              a.id !== taskList.id)
              );
          }}>Delete
          </button>
          </li>)
          )}
        </ul>
       </IonItem>
      </IonList>
      
    </IonContent>

    
  );
}

export function DeleteTask() {
  const [task, setTask] = useState<any[]>(
    dummyData
  );

  return (
    <ul>
      {task.map(task => (
        <li key={task.id}> {task.body}{""}
        <button onClick={() => {
          setTask(
            Object.values(task).filter((a: any) => 
            a.id !== task.id
            )
          );
        }}>

        Delete</button>

        </li>
      ))}
    </ul>
  )
}