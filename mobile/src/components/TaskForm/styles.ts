import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    marginTop: -30,
  },
  taskInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    marginRight: 5,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 16,
  },
  addTaskButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
});
