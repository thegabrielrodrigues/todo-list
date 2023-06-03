import Check from '@/assets/check.svg';
import Trash from '@/assets/trash.svg';
import Uncheck from '@/assets/uncheck.svg';
import { TaskDTO } from '@/dtos/TaskDTO';

import styles from './styles.module.css';

interface TaskCardProps {
  onRemove: (taskDescription: string) => void;
}

export function TaskCard({ onRemove, taskDescription, finishedTask = true }: TaskCardProps & TaskDTO) {
  return (
    <>
      {finishedTask === true && (
        <div className={`${styles.task_card_container} ${styles.finished}`}>
          <button className={styles.finished_task_check_button}>
            <img src={Check} />
          </button>

          <p className={`${styles.task_description} ${styles.finished}`}>{taskDescription}</p>

          <button className={styles.trash_button} onClick={() => onRemove(taskDescription)}>
            <img src={Trash} />
          </button>
        </div>
      )}
      {finishedTask === false && (
        <div className={styles.task_card_container}>
          <button className={styles.finished_task_check_button}>
            <img src={Uncheck} />
          </button>

          <p className={styles.task_description}>{taskDescription}</p>

          <button className={styles.trash_button} onClick={() => onRemove(taskDescription)}>
            <img src={Trash} />
          </button>
        </div>
      )}
    </>
  );
}
