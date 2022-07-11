import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationProvider from './src/providers/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationProvider />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
