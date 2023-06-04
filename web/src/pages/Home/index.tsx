import { useState } from 'react';

import Swal from 'sweetalert2';

import Clipboard from '@/assets/clipboard.svg';
import { Header } from '@/components/Header';
import { TaskCard } from '@/components/TaskCard';
import { TaskForm } from '@/components/TaskForm';
import { TasksNumber } from '@/components/TasksNumber';
import { TaskDTO } from '@/dtos/TaskDTO';

import styles from './styles.module.css';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  const completedTasksNumber = tasks.filter((item) => item.finishedTask === true).length;
  const uncompletedTasksNumber = tasks.filter((item) => item.finishedTask === false).length;

  function handleRemoveTask(taskDescription: string) {
    Swal.fire({
      title: 'Remover tarefa',
      text: 'Você deseja realmente excluir esta tarefa?',
      icon: 'warning',
      confirmButtonText: 'Sim, excluir',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      focusDeny: true,
      background: 'var(--gray-500)',
      color: 'var(--gray-100)',
      customClass: {
        confirmButton: 'swal2ConfirmButton',
        denyButton: 'swal2DenyButton',
      },
    }).then((response) => {
      if (response.isConfirmed) {
        setTasks(tasks.filter((task) => task.taskDescription !== taskDescription));

        Swal.fire({
          title: 'Sua tarefa foi excluída com sucesso',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: 'var(--gray-500)',
          color: 'var(--gray-100)',
        });
      } else if (response.isDenied) {
        Swal.fire({
          title: 'Operação cancelada',
          text: 'Sua tarefa não foi excluída',
          icon: 'info',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: 'var(--gray-500)',
          color: 'var(--gray-100)',
        });
      }
    });
  }

  function handleMarkTaskAsFinished(taskDescription: string) {
    tasks.reduce(
      (prev, curr) => {
        if (curr.taskDescription === taskDescription) {
          curr.finishedTask = !curr.finishedTask;
        }

        return prev;
      },
      { taskDescription: '', finishedTask: false }
    );

    setTasks([...tasks]);
  }

  return (
    <div className={styles.home_container}>
      <Header />

      <main className={styles.content}>
        <TaskForm tasks={tasks} setTasks={setTasks} />

        <div className={styles.tasks_number}>
          <TasksNumber description="Tarefas criadas" quantity={uncompletedTasksNumber} color="PRIMARY" />
          <TasksNumber description="Tarefas concluídas" quantity={completedTasksNumber} color="SECONDARY" />
        </div>

        <div className={styles.tasks}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task.taskDescription}
                onRemove={handleRemoveTask}
                onMarkTaskAsFinished={handleMarkTaskAsFinished}
                taskDescription={task.taskDescription}
                finishedTask={task.finishedTask}
              />
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
