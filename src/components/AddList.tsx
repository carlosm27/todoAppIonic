import React, { useState } from 'react';
import { IonInput, IonItem, IonLabel, IonList, IonContent } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';





let initialTasks = [
  { id: 0, name: "Get milk" }, 
  { id: 1, name: "Wash car" }, 
  { id: 2, name: "Start coding"},
];

let nextIndex = 3;

export function TaskList() {
const [name, setName] = useState('');
const [task, setTask] = useState<any[]>(initialTasks);

return (
  <>
    <h1>Task List</h1>
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <button onClick={() => {
      setTask([
          ...task,
          {id: nextIndex++,
        name: name}
      ]);
    }}>Add</button>
    <ul>
      {task.map(artist => (
        <li key={artist.id}>{artist.name}{" "}
        <button onClick={() => {
            setTask(
              task.filter(a =>
                a.id !== artist.id
              )
            );
          }}>
            Delete
          </button>
          </li>
      ))}
    </ul>
  </>
);
}


