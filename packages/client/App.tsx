import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import NavigationProvider from './src/providers/navigation';

const App = () => {
  return (
    <TailwindProvider>
      <NavigationProvider />
    </TailwindProvider>
  );
};

export default App;
