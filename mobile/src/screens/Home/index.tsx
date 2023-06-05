import { View } from 'react-native';

import Logo from '@/assets/logo.svg';
import { TaskForm } from '@/components/TaskForm';
import { TasksNumber } from '@/components/TasksNumber';

import { styles } from './styles';

export function Home() {
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
      </View>
    </View>
  );
}
