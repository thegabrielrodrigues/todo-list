import { Text, View } from 'react-native';

import { styles } from './styles';

interface TasksNumberProps {
  description: string;
  quantity: number;
  color?: 'PRIMARY' | 'SECONDARY';
}

export function TasksNumber({ description, quantity, color = 'PRIMARY' }: TasksNumberProps) {
  return (
    <View style={styles.container}>
      {color === 'PRIMARY' && <Text style={[styles.description, styles.primary]}>{description}</Text>}
      {color === 'SECONDARY' && <Text style={[styles.description, styles.secondary]}>{description}</Text>}
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
    </View>
  );
}
