import React from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header';
import Search from '../../components/search';
import {selectCategoryList} from '../../stores/categoryStore';
import {selectFeaturedList} from '../../stores/featuredStore';
import {useAppSelector} from '../../stores/store';
import HomeCategories from './components/categories';
import HomeFeatured from './components/featured';

const HomeModule = () => {
  const categories = useAppSelector(selectCategoryList);
  const featured = useAppSelector(selectFeaturedList);

  return (
    <SafeAreaView className="bg-white">
      <Header />
      <Search />
      <View className="bg-gray-100 pb-[420]">
        <HomeCategories categories={categories} />
        <FlatList
          className="mt-4"
          data={featured}
          keyExtractor={item => item._id}
          renderItem={({item}) => <HomeFeatured featured={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeModule;
