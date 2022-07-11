import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header';
import Search from '../../components/search';
import HomeCategories from './components/categories';
const HomeModule = () => {
  return (
    <SafeAreaView className="bg-white">
      <Header />
      <Search />
      <ScrollView className="bg-gray-100 pb-24">
        <HomeCategories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeModule;
