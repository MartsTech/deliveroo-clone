import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header';
import Search from '../../components/search';
import fetchCategoryList from '../../utils/categories/fetchCategoryList';
import fetchFeaturedList from '../../utils/featured/fetchFeaturedList';
import HomeCategories from './components/categories';
import HomeFeatured from './components/featured';

const HomeModule = () => {
  const [featured, setFeatured] = useState<FeaturedModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    fetchFeaturedList().then(data => {
      setFeatured(data);
    });
    fetchCategoryList().then(data => {
      setCategories(data);
    });
  }, []);

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
          renderItem={({item}) => <HomeFeatured {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeModule;
