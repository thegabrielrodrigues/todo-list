import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

import Swal from 'sweetalert2';

import Plus from '@/assets/plus.svg';
import { TaskDTO } from '@/dtos/TaskDTO';

import styles from './styles.module.css';

interface TaskFormProps {
  tasks: TaskDTO[];
  setTasks: Dispatch<SetStateAction<TaskDTO[]>>;
}

export function TaskForm({ tasks, setTasks }: TaskFormProps) {
  const [taskDescription, setTaskDescription] = useState<string>('');

  function handleTaskDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(e.target.value);
  }

  function handleAddTask(e: FormEvent) {
    e.preventDefault();

    const existingTask = tasks.find((task) => task.taskDescription === taskDescription);

    if (existingTask) {
      Swal.fire({
        title: 'Problemas ao adicionar tarefa',
        text: 'Esta tarefa já existe! Crie uma com um nome diferente',
        confirmButtonText: 'Está bem',
        timer: 3000,
        timerProgressBar: true,
        background: 'var(--gray-500)',
        color: 'var(--gray-100)',
      });
    } else {
      const newTask: TaskDTO = {
        taskDescription,
        finishedTask: false,
      };

      setTasks((prevState) => [...prevState, newTask]);
      setTaskDescription('');
    }
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
