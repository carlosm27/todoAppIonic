import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import TaskList from '../components/taskList';

let dummyData = [{"id":"1", "body":"Get milk" }, {"id":"2", "body":"Wash car" }, {"id":"3", "body":"Start coding"}];


export const AddTask = () => {
    let [tasks, setTasks] = useState(dummyData)
    return (
        <div>
            <Link to = {'/add'}>Add</Link>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}><TaskList/></li>
                ))}
            </ul>
        </div>
    )
}

export default AddTask;