import { ChangeEvent, FormEvent, useState } from 'react';

import Plus from '@/assets/plus.svg';

import styles from './styles.module.css';

export function TaskForm() {
  const [taskDescription, setTaskDescription] = useState<string>('');

  function handleTaskDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(e.target.value);
  }

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form className={styles.task_form_container} onSubmit={handleAddTask}>
      <input
        className={styles.task_input}
        onChange={handleTaskDescriptionChange}
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={taskDescription}
      />
      <button>
        Criar
        <img src={Plus} />
      </button>
    </form>
  );
}
