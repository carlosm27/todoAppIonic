import React, { useState } from 'react';
import { IonInput, IonItem, IonLabel, IonList, IonContent } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';

let dummyData = [{"id":"1", "body":"Get milk" }, {"id":"2", "body":"Wash car" }, {"id":"3", "body":"Start coding"}];


let nextId = 0;

function AddTask() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<any[]>(dummyData)

  return (
    <IonContent>
      <IonItem>
        <input value={task} 
        onChange={e => setTask((e.target as HTMLInputElement).value)}
         placeholder="Enter task"/>

        <div className="item-note">
          <button onClick={() => {
           setTaskList([
            ...taskList,
              {id: nextId++,
              body: task}
           ]);
          }} ion-button ><IonIcon icon={addCircle}></IonIcon></button>
        </div>
      </IonItem>
      <IonList>
        <IonItem>
        <ul>
          {taskList.map(taskList => 
          (<li key={taskList.id}>{taskList.body}</li>)
          )}
        </ul>
       </IonItem>
      </IonList>
      
    </IonContent>

    
  );
}
export default AddTask;