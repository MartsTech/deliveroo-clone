import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import NavigationProvider from './src/providers/navigation';
import {store} from './src/stores/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <NavigationProvider />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;
