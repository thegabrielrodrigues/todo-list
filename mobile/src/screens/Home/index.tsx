import { View } from 'react-native';

import Logo from '@/assets/logo.svg';
import { TaskForm } from '@/components/TaskForm';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.content}>
        <TaskForm />
      </View>
    </View>
  );
}
