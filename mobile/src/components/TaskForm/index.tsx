import { TextInput, TouchableOpacity, View } from 'react-native';

import Plus from '@/assets/plus.svg';

import { styles } from './styles';

export function TaskForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.taskInput} placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" />

      <TouchableOpacity style={styles.addTaskButton}>
        <Plus height={18} width={18} />
      </TouchableOpacity>
    </View>
  );
}
