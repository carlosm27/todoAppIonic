import { useEffect, useState } from 'react';


const url = "http://localhost:3000";

export default function Tasks() {

    const[tasks, setTask] = useState<any[]>([]);

    useEffect(() => {
        getTasks()
    }, [])

    let getTasks =  async () => {
        let response = await fetch(`${url}/todo_tasks`)
        let data =  await response.json()
        setTask(data)
        console.log(data)
    }
    

    return (
        <>
          <h1>Inspiring sculptors:</h1>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>{task.task}{' '}{String(task.completed)} 
              </li>
            ))}
          </ul>
        </>
      );

}