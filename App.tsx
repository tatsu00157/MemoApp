import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Helllo from './src/components/Hello';

  const App =(): JSX.Element => {
  return (
    <View style={styles.container}>
      <Helllo bang>World</Helllo>
      <Helllo style={{ fontSize: 16 }}>World</Helllo>
      <Text>Open up App.tsx to start working on your app!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App
