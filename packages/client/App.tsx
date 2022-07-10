import {StatusBar} from 'expo-status-bar';
import React from 'react';
import NavigationProvider from './src/providers/navigation';

const App = () => {
  return (
    <>
      <NavigationProvider />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
