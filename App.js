import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './src/screen/todo';

export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCFDCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
