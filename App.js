import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Home from './src/pages/Home';
import MainNavigator from './src/navigation/MainNavigator'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <MainNavigator />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 30
  }
});
