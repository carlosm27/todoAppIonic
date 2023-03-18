import React, { useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { Link } from 'react-router-dom';

let dummyData = [{"id":"1", "body":"Get milk" }, {"id":"2", "body":"Wash car" }, {"id":"3", "body":"Start coding"}]


function TaskList() {
  return (
    <IonList>
      <IonItem>
       <ul>
       {dummyData.map((items) => (
        <li>{items.body}</li>
       ))}
       </ul>
      </IonItem>
    </IonList>
  );
}
export default TaskList;