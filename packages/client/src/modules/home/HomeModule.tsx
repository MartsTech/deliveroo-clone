import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header';
import Search from '../../components/search';

const HomeModule = () => {
  return (
    <SafeAreaView>
      <Header />
      <Search />
    </SafeAreaView>
  );
};

export default HomeModule;
