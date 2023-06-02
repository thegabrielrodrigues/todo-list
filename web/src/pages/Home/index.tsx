import { Header } from '@/components/Header';
import { TaskForm } from '@/components/TaskForm';

import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.home_container}>
      <Header />

      <main className={styles.content}>
        <TaskForm />
      </main>
    </div>
  );
}
