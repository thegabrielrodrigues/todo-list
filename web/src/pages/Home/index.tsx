import { Header } from '@/components/Header';
import { TaskCard } from '@/components/TaskCard';
import { TaskForm } from '@/components/TaskForm';
import { TasksNumber } from '@/components/TasksNumber';

import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.home_container}>
      <Header />

      <main className={styles.content}>
        <TaskForm />

        <div className={styles.tasks_number}>
          <TasksNumber description="Tarefas criadas" quantity={4} color="PRIMARY" />
          <TasksNumber description="Tarefas concluídas" quantity={6} color="SECONDARY" />
        </div>

        <div className={styles.tasks}>
          <TaskCard taskDescription="Task 1" finishedTask={false} />
          <TaskCard taskDescription="Task 2" finishedTask={true} />
        </div>
      </main>
    </div>
  );
}
