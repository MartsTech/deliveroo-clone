import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header';
import Search from '../../components/search';
import HomeCategories from './components/categories';
import HomeRestaurants from './components/restaurants';

const HomeModule = () => {
  return (
    <SafeAreaView className="bg-white">
      <Header />
      <Search />
      <ScrollView className="bg-gray-100 pb-24">
        <HomeCategories />
        <HomeRestaurants
          title="Featured"
          description="Paid placements from our partners."
          category="featured"
        />
        <HomeRestaurants
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          category="discounts"
        />
        <HomeRestaurants
          title="Offers near you"
          description="Why not support your local restaurant tonight?"
          category="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeModule;
