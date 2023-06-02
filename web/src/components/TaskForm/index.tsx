import Plus from '@/assets/plus.svg';

import styles from './styles.module.css';

export function TaskForm() {
  return (
    <form className={styles.task_form_container}>
      <input className={styles.task_input} placeholder="Adicione uma nova tarefa" type="text" />
      <button>
        Criar
        <img src={Plus} />
      </button>
    </form>
  );
}
