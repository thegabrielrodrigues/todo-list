import { Dispatch, SetStateAction, useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

import Plus from '@/assets/plus.svg';
import { TaskDTO } from '@/dtos/TaskDTO';

import { styles } from './styles';

interface TaskFormProps {
  tasks: TaskDTO[];
  setTasks: Dispatch<SetStateAction<TaskDTO[]>>;
}

export function TaskForm({ tasks, setTasks }: TaskFormProps) {
  const [taskDescription, setTaskDescription] = useState<string>('');

  function handleTaskDescriptionChange(e: string) {
    setTaskDescription(e);
  }

  function handleAddTask() {
    const existingTask = tasks.find((task) => task.taskDescription === taskDescription);

    if (existingTask) {
      return Alert.alert('Problemas ao adicionar tarefa', 'Esta tarefa já existe! Crie uma com um nome diferente');
    } else {
      setTasks((prevState) => [...prevState, { taskDescription, finishedTask: false }]);
      setTaskDescription('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.taskInput}
        onChangeText={handleTaskDescriptionChange}
        onSubmitEditing={handleAddTask}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={taskDescription}
      />

      <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
        <Plus height={18} width={18} />
      </TouchableOpacity>
    </View>
  );
}
