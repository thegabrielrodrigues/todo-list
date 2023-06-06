import { Text, TouchableOpacity, View } from 'react-native';

import Check from '@/assets/check.svg';
import Trash from '@/assets/trash.svg';
import Uncheck from '@/assets/uncheck.svg';
import { TaskDTO } from '@/dtos/TaskDTO';

import { styles } from './styles';

interface TaskCardProps {
  onRemove: (taskDescription: string) => void;
}

export function TaskCard({ onRemove, taskDescription, finishedTask }: TaskCardProps & TaskDTO) {
  return (
    <>
      {finishedTask === true && (
        <View style={[styles.taskCardContainer, styles.finishedTaskCard]}>
          <TouchableOpacity>
            <Check />
          </TouchableOpacity>

          <Text style={[styles.taskDescription, styles.finishedTaskDescription]}>{taskDescription}</Text>

          <TouchableOpacity>
            <Trash />
          </TouchableOpacity>
        </View>
      )}
      {finishedTask === false && (
        <View style={styles.taskCardContainer}>
          <TouchableOpacity>
            <Uncheck />
          </TouchableOpacity>

          <Text style={styles.taskDescription}>{taskDescription}</Text>

          <TouchableOpacity onPress={() => onRemove(taskDescription)}>
            <Trash />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
