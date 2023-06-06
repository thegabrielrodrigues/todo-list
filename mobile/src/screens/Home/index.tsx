import { useState } from 'react';
import { FlatList, View } from 'react-native';

import Logo from '@/assets/logo.svg';
import { TaskCard } from '@/components/TaskCard';
import { TaskForm } from '@/components/TaskForm';
import { TasksNumber } from '@/components/TasksNumber';
import { TaskDTO } from '@/dtos/TaskDTO';

import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([
    { taskDescription: 'Task 1', finishedTask: false },
    { taskDescription: 'Task 2', finishedTask: true },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.content}>
        <TaskForm />

        <View style={styles.tasksNumber}>
          <TasksNumber description="Tarefas criadas" quantity={4} color="PRIMARY" />
          <TasksNumber description="Tarefas concluídas" quantity={6} color="SECONDARY" />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.taskDescription}
          renderItem={({ item }) => <TaskCard taskDescription={item.taskDescription} finishedTask={item.finishedTask} />}
        />
      </View>
    </View>
  );
}
