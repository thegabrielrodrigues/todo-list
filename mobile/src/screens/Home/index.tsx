import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import Clipboard from '@/assets/clipboard.svg';
import Logo from '@/assets/logo.svg';
import { TaskCard } from '@/components/TaskCard';
import { TaskForm } from '@/components/TaskForm';
import { TasksNumber } from '@/components/TasksNumber';
import { TaskDTO } from '@/dtos/TaskDTO';

import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.content}>
        <TaskForm tasks={tasks} setTasks={setTasks} />

        <View style={styles.tasksNumber}>
          <TasksNumber description="Tarefas criadas" quantity={4} color="PRIMARY" />
          <TasksNumber description="Tarefas concluídas" quantity={6} color="SECONDARY" />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.taskDescription}
          renderItem={({ item }) => <TaskCard taskDescription={item.taskDescription} finishedTask={item.finishedTask} />}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Clipboard />

              <Text style={styles.emptyListStrongText}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.emptyListNormalText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
