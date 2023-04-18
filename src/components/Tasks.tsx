import React, { useState, useEffect } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
  IonIcon,
  InputChangeEventDetail
} from "@ionic/react";
import { add, trash, create, checkmark } from "ionicons/icons";

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskInput = (event: CustomEvent<InputChangeEventDetail>) => {
    setNewTask((event.target as HTMLInputElement).value);
  };

  const handleNewTask = () => {
    const task: Task = {
      id: Date.now(),
      task: newTask,
      completed: false
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleTaskDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleTaskEdit = (id: number, taskText: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: taskText };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskToggle = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React CRUD</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {tasks.map((task) => (
            <IonItem key={task.id}>
              <IonLabel>
                <h2>{task.task}</h2>
                <IonCheckbox
                  checked={task.completed}
                  onIonChange={() => handleTaskToggle(task.id)}
                />
              </IonLabel>
              <div slot="end">
                <IonButton
                  color="danger"
                  onClick={() => handleTaskDelete(task.id)}
                >
                  <IonIcon icon={trash} />
                </IonButton>
                <IonButton
                  color="primary"
                  onClick={() =>
                    handleTaskEdit(
                      task.id,
                      window.prompt("Update Task", task.task) || ""
                    )
                  }
                >
                  <IonIcon icon={create} />
                </IonButton>
              </div>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            placeholder="Add Task"
            value={newTask}
            onIonChange={handleTaskInput}
          />
          <IonButton color="success" onClick={handleNewTask}>
            <IonIcon icon={add} />
            <IonLabel>Add</IonLabel>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonApp>
  );
};

export default Tasks;