import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    height: 180,
    paddingTop: 60,
    paddingBottom: 32,
    backgroundColor: '#0D0D0D',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A',
  },
  tasksNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },
  emptyList: {
    alignItems: 'center',
    paddingTop: 64,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  emptyListStrongText: {
    marginTop: 16,
    color: '#808080',
    fontWeight: 'bold',
    lineHeight: 24,
  },
  emptyListNormalText: {
    color: '#808080',
    lineHeight: 24,
  },
});
