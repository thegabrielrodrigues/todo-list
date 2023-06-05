import { View } from 'react-native';

import Logo from '@/assets/logo.svg';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.content}></View>
    </View>
  );
}
