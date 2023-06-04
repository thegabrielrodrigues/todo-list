import styles from './styles.module.css';

interface TasksNumberProps {
  description: string;
  quantity: number;
  color?: 'PRIMARY' | 'SECONDARY';
}

export function TasksNumber({ description, quantity, color = 'PRIMARY' }: TasksNumberProps) {
  return (
    <div className={styles.tasks_number_container}>
      {color === 'PRIMARY' && <strong className={styles.primary}>{description}</strong>}
      {color === 'SECONDARY' && <strong className={styles.secondary}>{description}</strong>}
      <span className={styles.quantity}>{quantity}</span>
    </div>
  );
}
