import { useState } from 'react';

import Clipboard from '@/assets/clipboard.svg';
import { Header } from '@/components/Header';
import { TaskCard } from '@/components/TaskCard';
import { TaskForm } from '@/components/TaskForm';
import { TasksNumber } from '@/components/TasksNumber';
import { TaskDTO } from '@/dtos/TaskDTO';

import styles from './styles.module.css';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  return (
    <div className={styles.home_container}>
      <Header />

      <main className={styles.content}>
        <TaskForm tasks={tasks} setTasks={setTasks} />

        <div className={styles.tasks_number}>
          <TasksNumber description="Tarefas criadas" quantity={4} color="PRIMARY" />
          <TasksNumber description="Tarefas concluídas" quantity={6} color="SECONDARY" />
        </div>

        <div className={styles.tasks}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard key={task.taskDescription} taskDescription={task.taskDescription} finishedTask={task.finishedTask} />
            ))
          ) : (
            <div className={styles.empty_list}>
              <img src={Clipboard} />
              <div>
                <p className={styles.strong_text}>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.normal_text}>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
